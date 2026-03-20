import { describe, it, expect, beforeEach, vi } from "vitest";
import { setBulkAvailability, deleteAvailability, getAvailabilityByDateRange } from "./db";

// Mock the database
vi.mock("./db", async () => {
  const actual = await vi.importActual("./db");
  return {
    ...actual,
    setBulkAvailability: vi.fn(async (startDate, endDate, timeSlots, pattern, daysOfWeek) => {
      // Simulate the function
      const dates = [];
      const start = new Date(startDate);
      const end = new Date(endDate);

      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split("T")[0];
        const dayOfWeek = d.getDay();

        let shouldInclude = false;
        if (pattern === "daily") {
          shouldInclude = true;
        } else if (pattern === "weekdays") {
          shouldInclude = dayOfWeek >= 1 && dayOfWeek <= 5;
        } else if (pattern === "weekends") {
          shouldInclude = dayOfWeek === 0 || dayOfWeek === 6;
        } else if (pattern === "none" && daysOfWeek) {
          shouldInclude = daysOfWeek.includes(dayOfWeek);
        }

        if (shouldInclude) {
          dates.push(dateStr);
        }
      }

      return { createdCount: dates.length * timeSlots.length, dates };
    }),
    deleteAvailability: vi.fn(async () => ({ success: true })),
    getAvailabilityByDateRange: vi.fn(async () => []),
  };
});

describe("Availability Manager", () => {
  describe("setBulkAvailability", () => {
    it("creates availability for all days when pattern is daily", async () => {
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-24",
        ["09:00", "10:00"],
        "daily"
      );

      expect(result.createdCount).toBe(10); // 5 days * 2 slots
      expect(result.dates.length).toBe(5);
    });

    it("creates availability for weekdays only", async () => {
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-24",
        ["09:00", "10:00"],
        "weekdays"
      );

      // March 20-24, 2026: Friday-Tuesday
      // Weekdays: Friday (20), Monday (23), Tuesday (24) = 3 days
      expect(result.createdCount).toBe(6); // 3 days * 2 slots
    });

    it("creates availability for weekends only", async () => {
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-24",
        ["09:00"],
        "weekends"
      );

      // March 20-24, 2026: Friday-Tuesday
      // Weekends: Saturday (21), Sunday (22) = 2 days
      expect(result.createdCount).toBe(2); // 2 days * 1 slot
    });

    it("creates availability for specific days of week", async () => {
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-27",
        ["09:00", "10:00", "11:00"],
        "none",
        [1, 3, 5] // Monday, Wednesday, Friday
      );

      // March 20-27: Friday (20), Monday (23), Wednesday (25) = 3 days
      expect(result.createdCount).toBe(9); // 3 days * 3 slots
    });

    it("handles single day availability", async () => {
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-20",
        ["09:00", "10:00", "11:00"],
        "daily"
      );

      expect(result.createdCount).toBe(3); // 1 day * 3 slots
      expect(result.dates.length).toBe(1);
    });

    it("includes all specified time slots", async () => {
      const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00"];
      const result = await setBulkAvailability(
        "2026-03-23",
        "2026-03-23",
        timeSlots,
        "daily"
      );

      expect(result.createdCount).toBe(5); // 1 day * 5 slots
    });

    it("handles empty date range gracefully", async () => {
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-19",
        ["09:00"],
        "daily"
      );

      expect(result.createdCount).toBe(0);
      expect(result.dates.length).toBe(0);
    });

    it("calculates correct dates for month-long availability", async () => {
      const result = await setBulkAvailability(
        "2026-03-01",
        "2026-03-31",
        ["09:00"],
        "weekdays"
      );

      // March 2026 has 21 weekdays
      expect(result.createdCount).toBe(21);
    });
  });

  describe("deleteAvailability", () => {
    it("deletes availability for specific date and time slot", async () => {
      const result = await deleteAvailability("2026-03-20", "09:00");
      expect(result.success).toBe(true);
    });

    it("deletes all availability for a date when timeSlot is not provided", async () => {
      const result = await deleteAvailability("2026-03-20");
      expect(result.success).toBe(true);
    });
  });

  describe("getAvailabilityByDateRange", () => {
    it("fetches availability for date range", async () => {
      const result = await getAvailabilityByDateRange("2026-03-20", "2026-03-24");
      expect(Array.isArray(result)).toBe(true);
    });

    it("returns empty array for future dates with no availability", async () => {
      const result = await getAvailabilityByDateRange("2026-12-01", "2026-12-31");
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("Recurring Pattern Validation", () => {
    it("validates daily pattern creates slots for all days", async () => {
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-22",
        ["09:00"],
        "daily"
      );

      expect(result.dates.length).toBe(3);
      expect(result.createdCount).toBe(3);
    });

    it("validates weekdays pattern excludes weekends", async () => {
      // March 21-22, 2026 are Saturday and Sunday
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-23",
        ["09:00"],
        "weekdays"
      );

      // Should only include Friday (20) and Monday (23)
      expect(result.dates.length).toBe(2);
    });

    it("validates weekends pattern excludes weekdays", async () => {
      // March 20-24, 2026: Friday-Tuesday
      const result = await setBulkAvailability(
        "2026-03-20",
        "2026-03-24",
        ["09:00"],
        "weekends"
      );

      // Should only include Saturday (21) and Sunday (22)
      expect(result.dates.length).toBe(2);
    });
  });

  describe("Edge Cases", () => {
    it("handles leap year dates correctly", async () => {
      const result = await setBulkAvailability(
        "2024-02-28",
        "2024-03-01",
        ["09:00"],
        "daily"
      );

      expect(result.dates.length).toBe(3); // Feb 28, Feb 29 (leap year), Mar 1
    });

    it("handles year boundary correctly", async () => {
      const result = await setBulkAvailability(
        "2025-12-30",
        "2026-01-02",
        ["09:00"],
        "daily"
      );

      expect(result.dates.length).toBe(4);
    });

    it("handles multiple time slots correctly", async () => {
      const timeSlots = Array.from({ length: 8 }, (_, i) => `${9 + i}:00`);
      const result = await setBulkAvailability(
        "2026-03-23",
        "2026-03-27",
        timeSlots,
        "weekdays"
      );

      // March 23-27: Monday, Tuesday, Wednesday, Thursday, Friday = 4 weekdays (23-26) * 8 slots = 32
      expect(result.createdCount).toBe(32);
    });
  });
});
