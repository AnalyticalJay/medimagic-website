import { describe, it, expect, vi, beforeEach } from "vitest";
import { getAvailability, setAvailability } from "./db";

// Mock database functions
vi.mock("./db", () => ({
  getDb: vi.fn(),
  getAvailability: vi.fn(),
  setAvailability: vi.fn(),
  getBookingsByDateRange: vi.fn(),
}));

describe("Availability Calendar Features", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getAvailability", () => {
    it("retrieves all available time slots for a specific date", async () => {
      const mockAvailability = [
        { timeSlot: "09:00", isAvailable: 1 },
        { timeSlot: "10:00", isAvailable: 1 },
        { timeSlot: "11:00", isAvailable: 1 },
        { timeSlot: "14:00", isAvailable: 1 },
        { timeSlot: "15:00", isAvailable: 1 },
      ];

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability("2026-04-15");

      expect(result).toHaveLength(5);
      expect(result[0].timeSlot).toBe("09:00");
      expect(result[0].isAvailable).toBe(1);
      expect(vi.mocked(getAvailability)).toHaveBeenCalledWith("2026-04-15");
    });

    it("returns empty array when no availability set for date", async () => {
      vi.mocked(getAvailability).mockResolvedValue([]);

      const result = await getAvailability("2026-05-20");

      expect(result).toHaveLength(0);
    });

    it("handles mixed availability (some slots available, some not)", async () => {
      const mockAvailability = [
        { timeSlot: "09:00", isAvailable: 1 },
        { timeSlot: "10:00", isAvailable: 0 },
        { timeSlot: "11:00", isAvailable: 1 },
        { timeSlot: "14:00", isAvailable: 0 },
        { timeSlot: "15:00", isAvailable: 1 },
      ];

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability("2026-04-20");

      expect(result).toHaveLength(5);
      expect(result.filter((s) => s.isAvailable === 1)).toHaveLength(3);
      expect(result.filter((s) => s.isAvailable === 0)).toHaveLength(2);
    });

    it("retrieves availability for all dates when no specific date provided", async () => {
      const mockAvailability = [
        { timeSlot: "09:00", isAvailable: 1 },
        { timeSlot: "10:00", isAvailable: 1 },
      ];

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability();

      expect(result).toHaveLength(2);
      expect(vi.mocked(getAvailability)).toHaveBeenCalled();
    });
  });

  describe("setAvailability", () => {
    it("sets a time slot as available", async () => {
      vi.mocked(setAvailability).mockResolvedValue(undefined);

      await setAvailability("2026-04-15", "09:00", true);

      expect(vi.mocked(setAvailability)).toHaveBeenCalledWith("2026-04-15", "09:00", true);
    });

    it("sets a time slot as unavailable", async () => {
      vi.mocked(setAvailability).mockResolvedValue(undefined);

      await setAvailability("2026-04-15", "10:00", false);

      expect(vi.mocked(setAvailability)).toHaveBeenCalledWith("2026-04-15", "10:00", false);
    });

    it("allows updating multiple slots for same date", async () => {
      vi.mocked(setAvailability).mockResolvedValue(undefined);

      await setAvailability("2026-04-15", "09:00", true);
      await setAvailability("2026-04-15", "10:00", true);
      await setAvailability("2026-04-15", "11:00", false);

      expect(vi.mocked(setAvailability)).toHaveBeenCalledTimes(3);
    });

    it("allows toggling slot availability", async () => {
      vi.mocked(setAvailability).mockResolvedValue(undefined);

      // First set as available
      await setAvailability("2026-04-15", "09:00", true);
      // Then set as unavailable
      await setAvailability("2026-04-15", "09:00", false);

      expect(vi.mocked(setAvailability)).toHaveBeenCalledTimes(2);
      expect(vi.mocked(setAvailability)).toHaveBeenNthCalledWith(1, "2026-04-15", "09:00", true);
      expect(vi.mocked(setAvailability)).toHaveBeenNthCalledWith(2, "2026-04-15", "09:00", false);
    });
  });

  describe("Availability Calendar Display", () => {
    it("shows only available slots to clients", async () => {
      const mockAvailability = [
        { timeSlot: "09:00", isAvailable: 1 },
        { timeSlot: "10:00", isAvailable: 0 },
        { timeSlot: "11:00", isAvailable: 1 },
      ];

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability("2026-04-15");
      const availableSlots = result.filter((s) => s.isAvailable === 1);

      expect(availableSlots).toHaveLength(2);
      expect(availableSlots.map((s) => s.timeSlot)).toEqual(["09:00", "11:00"]);
    });

    it("filters out booked slots from available slots", async () => {
      const mockAvailability = [
        { timeSlot: "09:00", isAvailable: 1 },
        { timeSlot: "10:00", isAvailable: 1 },
        { timeSlot: "11:00", isAvailable: 1 },
      ];

      const bookedSlots = ["09:00"]; // 09:00 is already booked

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability("2026-04-15");
      const availableForBooking = result.filter(
        (s) => s.isAvailable === 1 && !bookedSlots.includes(s.timeSlot)
      );

      expect(availableForBooking).toHaveLength(2);
      expect(availableForBooking.map((s) => s.timeSlot)).toEqual(["10:00", "11:00"]);
    });
  });

  describe("Admin Availability Management", () => {
    it("allows admin to set bulk availability for a date", async () => {
      vi.mocked(setAvailability).mockResolvedValue(undefined);

      const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00"];
      for (const slot of timeSlots) {
        await setAvailability("2026-04-15", slot, true);
      }

      expect(vi.mocked(setAvailability)).toHaveBeenCalledTimes(5);
    });

    it("allows admin to disable specific slots", async () => {
      vi.mocked(setAvailability).mockResolvedValue(undefined);

      // Set all slots available
      await setAvailability("2026-04-15", "09:00", true);
      await setAvailability("2026-04-15", "10:00", true);
      // Then disable lunch hour
      await setAvailability("2026-04-15", "12:00", false);

      expect(vi.mocked(setAvailability)).toHaveBeenCalledTimes(3);
    });

    it("allows admin to set different availability for different dates", async () => {
      vi.mocked(setAvailability).mockResolvedValue(undefined);

      // Monday availability
      await setAvailability("2026-04-15", "09:00", true);
      // Tuesday availability
      await setAvailability("2026-04-16", "14:00", true);

      expect(vi.mocked(setAvailability)).toHaveBeenCalledTimes(2);
      expect(vi.mocked(setAvailability)).toHaveBeenNthCalledWith(1, "2026-04-15", "09:00", true);
      expect(vi.mocked(setAvailability)).toHaveBeenNthCalledWith(2, "2026-04-16", "14:00", true);
    });
  });

  describe("Availability Validation", () => {
    it("prevents booking past dates", async () => {
      const today = new Date();
      const pastDate = new Date(today);
      pastDate.setDate(pastDate.getDate() - 1);
      const pastDateStr = pastDate.toISOString().split("T")[0];

      // Past dates should not have availability
      vi.mocked(getAvailability).mockResolvedValue([]);

      const result = await getAvailability(pastDateStr);

      expect(result).toHaveLength(0);
    });

    it("handles date format validation", async () => {
      const validDate = "2026-04-15";
      const mockAvailability = [{ timeSlot: "09:00", isAvailable: 1 }];

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability(validDate);

      expect(result).toBeDefined();
      expect(vi.mocked(getAvailability)).toHaveBeenCalledWith(validDate);
    });

    it("handles time slot format validation", async () => {
      const validTimeSlot = "09:00";
      const validDate = "2026-04-15";

      vi.mocked(setAvailability).mockResolvedValue(undefined);

      await setAvailability(validDate, validTimeSlot, true);

      expect(vi.mocked(setAvailability)).toHaveBeenCalledWith(validDate, validTimeSlot, true);
    });
  });

  describe("Availability Edge Cases", () => {
    it("handles all-day unavailability", async () => {
      const mockAvailability = [
        { timeSlot: "09:00", isAvailable: 0 },
        { timeSlot: "10:00", isAvailable: 0 },
        { timeSlot: "11:00", isAvailable: 0 },
        { timeSlot: "14:00", isAvailable: 0 },
        { timeSlot: "15:00", isAvailable: 0 },
      ];

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability("2026-04-15");
      const availableSlots = result.filter((s) => s.isAvailable === 1);

      expect(availableSlots).toHaveLength(0);
    });

    it("handles single available slot", async () => {
      const mockAvailability = [
        { timeSlot: "09:00", isAvailable: 0 },
        { timeSlot: "10:00", isAvailable: 1 },
        { timeSlot: "11:00", isAvailable: 0 },
      ];

      vi.mocked(getAvailability).mockResolvedValue(mockAvailability);

      const result = await getAvailability("2026-04-15");
      const availableSlots = result.filter((s) => s.isAvailable === 1);

      expect(availableSlots).toHaveLength(1);
      expect(availableSlots[0].timeSlot).toBe("10:00");
    });

    it("handles availability for multiple consecutive dates", async () => {
      vi.mocked(getAvailability).mockResolvedValue([
        { timeSlot: "09:00", isAvailable: 1 },
      ]);

      const dates = ["2026-04-15", "2026-04-16", "2026-04-17"];
      for (const date of dates) {
        const result = await getAvailability(date);
        expect(result).toHaveLength(1);
      }

      expect(vi.mocked(getAvailability)).toHaveBeenCalledTimes(3);
    });
  });
});
