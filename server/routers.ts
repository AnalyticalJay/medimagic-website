import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "../shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, adminProcedure } from "./_core/trpc";
import { createBooking, getBookings, updateBookingStatus, getBookingsByDateRange, getBookingsByService, getAvailability, setAvailability } from "./db";
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
        await updateBookingStatus(input.bookingId, input.status);
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
});

export type AppRouter = typeof appRouter;
