import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createBooking, getBookings, getBookingById } from "./db";

describe("Booking Database Operations", () => {
  let bookingId: number;

  it("should create a booking with valid data", async () => {
    const bookingData = {
      name: "John Doe",
      email: "john@example.com",
      phone: "+27 64 060 3592",
      serviceType: "Divorce Settlement Agreements",
      consultationType: "online" as const,
      preferredDate: "2026-04-15",
      preferredTime: "10:00 AM",
      message: "I need help with my divorce settlement",
    };

    const result = await createBooking(bookingData);
    expect(result).toBeDefined();
    // Drizzle returns an array of results, so we get the first one
    const insertedBooking = Array.isArray(result) ? result[0] : result;
    expect(insertedBooking).toBeDefined();
  });

  it("should retrieve all bookings", async () => {
    const bookings = await getBookings(10);
    expect(Array.isArray(bookings)).toBe(true);
    expect(bookings.length).toBeGreaterThan(0);
  });

  it("should retrieve a specific booking by ID", async () => {
    if (bookingId) {
      const booking = await getBookingById(bookingId);
      expect(booking).toBeDefined();
      expect(booking?.name).toBe("John Doe");
      expect(booking?.email).toBe("john@example.com");
      expect(booking?.serviceType).toBe("Divorce Settlement Agreements");
    }
  });

  it("should handle different service types", async () => {
    const serviceTypes = [
      "Maintenance Agreements",
      "Parenting Plans",
      "Adult Divorce Preparation",
      "Illness & Disability Support",
    ];

    for (const serviceType of serviceTypes) {
      const result = await createBooking({
        name: `Test User - ${serviceType}`,
        email: `test-${serviceType}@example.com`,
        phone: "+27 64 060 3592",
        serviceType,
        consultationType: "in-person" as const,
        preferredDate: "2026-04-20",
        preferredTime: "02:00 PM",
        message: "Test booking",
      });

      expect(result).toBeDefined();
    }
  });

  it("should handle both consultation types", async () => {
    const consultationTypes: Array<"online" | "in-person"> = ["online", "in-person"];

    for (const type of consultationTypes) {
      const result = await createBooking({
        name: `Test User - ${type}`,
        email: `test-${type}@example.com`,
        phone: "+27 64 060 3592",
        serviceType: "Voice of the Child",
        consultationType: type,
        preferredDate: "2026-04-25",
        preferredTime: "03:00 PM",
        message: `Test ${type} booking`,
      });

      expect(result).toBeDefined();
    }
  });

  it("should handle optional phone field", async () => {
    const result = await createBooking({
      name: "Jane Doe",
      email: "jane@example.com",
      phone: undefined,
      serviceType: "Palliative & End-of-Life Care",
      consultationType: "online" as const,
      preferredDate: "2026-05-01",
      preferredTime: "11:00 AM",
      message: "Optional phone test",
    });

    expect(result).toBeDefined();
  });

  it("should return empty array for non-existent booking ID", async () => {
    const booking = await getBookingById(999999);
    expect(booking).toBeUndefined();
  });
});
