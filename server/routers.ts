import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "@shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, adminProcedure } from "./_core/trpc";
import { createBooking, getBookings, updateBookingStatus, getBookingsByDateRange, getBookingsByService, getAvailability, setAvailability, getClientBookings, updateBookingDetails } from "./db";
import { sendBookingConfirmationEmail, sendAdminNotificationEmail, sendStatusUpdateEmail } from "./email";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  booking: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          serviceType: z.string().min(1),
          consultationType: z.enum(["in-person", "online"]),
          preferredDate: z.string().min(1),
          preferredTime: z.string().min(1),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createBooking({
          name: input.name,
          email: input.email,
          phone: input.phone,
          serviceType: input.serviceType,
          consultationType: input.consultationType,
          preferredDate: input.preferredDate,
          preferredTime: input.preferredTime,
          message: input.message,
        });

        // Send confirmation email to client
        try {
          await sendBookingConfirmationEmail(input.email, input.name, {
            serviceType: input.serviceType,
            consultationType: input.consultationType,
            preferredDate: input.preferredDate,
            preferredTime: input.preferredTime,
            bookingId: result.id.toString(),
          });
        } catch (error) {
          console.error("Failed to send client confirmation email:", error);
          // Don't fail the booking creation if email fails
        }

        // Send admin notification email
        try {
          await sendAdminNotificationEmail({
            bookingId: result.id.toString(),
            clientName: input.name,
            clientEmail: input.email,
            clientPhone: input.phone,
            serviceType: input.serviceType,
            consultationType: input.consultationType,
            preferredDate: input.preferredDate,
            preferredTime: input.preferredTime,
            notes: input.message,
          });
        } catch (error) {
          console.error("Failed to send admin notification email:", error);
          // Don't fail the booking creation if email fails
        }

        return { success: true, message: "Booking created successfully" };
      }),
    list: publicProcedure.query(async () => {
      return await getBookings();
    }),
    // Admin procedures
    updateStatus: adminProcedure
      .input(
        z.object({
          bookingId: z.number(),
          status: z.enum(["pending", "confirmed", "completed", "cancelled"]),
        })
      )
      .mutation(async ({ input }) => {
        // Get booking details before updating
        const bookings = await getBookings();
        const booking = bookings.find((b) => b.id === input.bookingId);

        await updateBookingStatus(input.bookingId, input.status);

        // Send status update email to client if booking found and status is not pending
        if (booking && input.status !== "pending") {
          try {
            await sendStatusUpdateEmail(
              booking.email,
              booking.name,
              input.status,
              {
                serviceType: booking.serviceType,
                preferredDate: booking.preferredDate,
                preferredTime: booking.preferredTime,
                bookingId: booking.id.toString(),
              }
            );
          } catch (error) {
            console.error("Failed to send status update email:", error);
            // Don't fail the status update if email fails
          }
        }

        return { success: true, message: "Booking status updated" };
      }),
    getByDateRange: adminProcedure
      .input(
        z.object({
          startDate: z.string(),
          endDate: z.string(),
        })
      )
      .query(async ({ input }) => {
        return await getBookingsByDateRange(input.startDate, input.endDate);
      }),
    getByService: adminProcedure
      .input(z.object({ serviceType: z.string() }))
      .query(async ({ input }) => {
        return await getBookingsByService(input.serviceType);
      }),
  }),

  availability: router({
    getPublic: publicProcedure
      .input(z.object({ date: z.string() }))
      .query(async ({ input }) => {
        return await getAvailability(input.date);
      }),
    getAvailableSlots: publicProcedure
      .input(z.object({ date: z.string() }))
      .query(async ({ input }) => {
        const availability = await getAvailability(input.date);
        const bookings = await getBookingsByDateRange(input.date, input.date);

        const availableSlots = availability.filter(slot => {
          const isBooked = bookings.some(booking =>
            booking.preferredDate === input.date &&
            booking.preferredTime === slot.timeSlot &&
            booking.status !== "cancelled"
          );
          return slot.isAvailable === 1 && !isBooked;
        });

        return availableSlots.map(slot => ({
          timeSlot: slot.timeSlot,
          isAvailable: slot.isAvailable === 1,
        }));
      }),
    get: adminProcedure
      .input(z.object({ date: z.string().optional() }).optional())
      .query(async ({ input }) => {
        return await getAvailability(input?.date);
      }),
    set: adminProcedure
      .input(
        z.object({
          date: z.string(),
          timeSlot: z.string(),
          isAvailable: z.boolean(),
        })
      )
      .mutation(async ({ input }) => {
        await setAvailability(input.date, input.timeSlot, input.isAvailable);
        return { success: true, message: "Availability updated" };
      }),
  }),

  clientPortal: router({
    getBookings: publicProcedure
      .query(async ({ ctx }) => {
        if (!ctx.user?.email) {
          return [];
        }
        return await getClientBookings(ctx.user.email);
      }),
    reschedule: publicProcedure
      .input(
        z.object({
          bookingId: z.number(),
          preferredDate: z.string(),
          preferredTime: z.string(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const allBookings = await getBookings();
        const userBooking = allBookings.find((b) => b.id === input.bookingId && b.email === ctx.user?.email);

        if (!userBooking) {
          throw new Error("Booking not found or unauthorized");
        }

        await updateBookingDetails(input.bookingId, {
          preferredDate: input.preferredDate,
          preferredTime: input.preferredTime,
          message: input.message,
        });

        return { success: true, message: "Booking rescheduled successfully" };
      }),
  }),
});

export type AppRouter = typeof appRouter;
