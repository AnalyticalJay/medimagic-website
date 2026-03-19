import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createBooking, getBookings } from "./db";
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
  }),
});

export type AppRouter = typeof appRouter;
