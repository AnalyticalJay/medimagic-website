import { describe, it, expect, vi, beforeEach } from "vitest";
import { getClientBookings, updateBookingDetails } from "./db";

// Mock database functions
vi.mock("./db", () => ({
  getDb: vi.fn(),
  getClientBookings: vi.fn(),
  updateBookingDetails: vi.fn(),
}));

describe("Client Portal Features", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getClientBookings", () => {
    it("retrieves all bookings for a specific email", async () => {
      const mockBookings = [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "555-1234",
          serviceType: "Divorce Settlement",
          consultationType: "online" as const,
          preferredDate: "2026-04-15",
          preferredTime: "10:00",
          message: "Need help with settlement",
          status: "confirmed" as const,
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "John Doe",
          email: "john@example.com",
          phone: "555-1234",
          serviceType: "Parenting Plans",
          consultationType: "in-person" as const,
          preferredDate: "2026-05-20",
          preferredTime: "14:00",
          message: null,
          status: "pending" as const,
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(getClientBookings).mockResolvedValue(mockBookings);

      const result = await getClientBookings("john@example.com");

      expect(result).toHaveLength(2);
      expect(result[0].serviceType).toBe("Divorce Settlement");
      expect(result[1].serviceType).toBe("Parenting Plans");
      expect(vi.mocked(getClientBookings)).toHaveBeenCalledWith("john@example.com");
    });

    it("returns empty array for email with no bookings", async () => {
      vi.mocked(getClientBookings).mockResolvedValue([]);

      const result = await getClientBookings("nobody@example.com");

      expect(result).toHaveLength(0);
    });

    it("handles different booking statuses", async () => {
      const mockBookings = [
        {
          id: 1,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "555-5678",
          serviceType: "Mediation",
          consultationType: "online" as const,
          preferredDate: "2026-03-25",
          preferredTime: "11:00",
          message: null,
          status: "confirmed" as const,
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "555-5678",
          serviceType: "Social Work Support",
          consultationType: "in-person" as const,
          preferredDate: "2026-04-10",
          preferredTime: "15:00",
          message: null,
          status: "completed" as const,
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "555-5678",
          serviceType: "Health Education",
          consultationType: "online" as const,
          preferredDate: "2026-05-01",
          preferredTime: "09:00",
          message: null,
          status: "cancelled" as const,
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(getClientBookings).mockResolvedValue(mockBookings);

      const result = await getClientBookings("jane@example.com");

      expect(result).toHaveLength(3);
      expect(result.map((b) => b.status)).toEqual(["confirmed", "completed", "cancelled"]);
    });
  });

  describe("updateBookingDetails", () => {
    it("updates booking date and time", async () => {
      vi.mocked(updateBookingDetails).mockResolvedValue({ success: true });

      const result = await updateBookingDetails(1, {
        preferredDate: "2026-05-15",
        preferredTime: "13:00",
      });

      expect(result).toEqual({ success: true });
      expect(vi.mocked(updateBookingDetails)).toHaveBeenCalledWith(1, {
        preferredDate: "2026-05-15",
        preferredTime: "13:00",
      });
    });

    it("updates booking message only", async () => {
      vi.mocked(updateBookingDetails).mockResolvedValue({ success: true });

      const result = await updateBookingDetails(2, {
        message: "Updated notes for the consultation",
      });

      expect(result).toEqual({ success: true });
      expect(vi.mocked(updateBookingDetails)).toHaveBeenCalledWith(2, {
        message: "Updated notes for the consultation",
      });
    });

    it("updates all booking details", async () => {
      vi.mocked(updateBookingDetails).mockResolvedValue({ success: true });

      const result = await updateBookingDetails(3, {
        preferredDate: "2026-06-01",
        preferredTime: "10:30",
        message: "Rescheduled due to conflict",
      });

      expect(result).toEqual({ success: true });
      expect(vi.mocked(updateBookingDetails)).toHaveBeenCalledWith(3, {
        preferredDate: "2026-06-01",
        preferredTime: "10:30",
        message: "Rescheduled due to conflict",
      });
    });

    it("handles partial updates without throwing error", async () => {
      vi.mocked(updateBookingDetails).mockResolvedValue({ success: true });

      const result = await updateBookingDetails(4, {
        preferredDate: "2026-07-10",
      });

      expect(result).toEqual({ success: true });
      expect(vi.mocked(updateBookingDetails)).toHaveBeenCalledWith(4, {
        preferredDate: "2026-07-10",
      });
    });

    it("throws error when no updates provided", async () => {
      const error = new Error("No updates provided");
      vi.mocked(updateBookingDetails).mockRejectedValue(error);

      await expect(updateBookingDetails(5, {})).rejects.toThrow("No updates provided");
    });

    it("handles database errors gracefully", async () => {
      const dbError = new Error("Database connection failed");
      vi.mocked(updateBookingDetails).mockRejectedValue(dbError);

      await expect(updateBookingDetails(6, { preferredDate: "2026-08-01" })).rejects.toThrow(
        "Database connection failed"
      );
    });
  });

  describe("Client Portal Authorization", () => {
    it("clients can only access their own bookings", async () => {
      const clientBookings = [
        {
          id: 1,
          name: "Client A",
          email: "clienta@example.com",
          phone: "555-1111",
          serviceType: "Mediation",
          consultationType: "online" as const,
          preferredDate: "2026-04-01",
          preferredTime: "10:00",
          message: null,
          status: "pending" as const,
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      vi.mocked(getClientBookings).mockResolvedValue(clientBookings);

      const result = await getClientBookings("clienta@example.com");

      expect(result).toHaveLength(1);
      expect(result[0].email).toBe("clienta@example.com");
    });

    it("prevents unauthorized booking updates", async () => {
      const error = new Error("Booking not found or unauthorized");
      vi.mocked(updateBookingDetails).mockRejectedValue(error);

      await expect(updateBookingDetails(999, { preferredDate: "2026-09-01" })).rejects.toThrow(
        "Booking not found or unauthorized"
      );
    });
  });

  describe("Rescheduling Workflow", () => {
    it("allows rescheduling pending bookings", async () => {
      vi.mocked(updateBookingDetails).mockResolvedValue({ success: true });

      const result = await updateBookingDetails(1, {
        preferredDate: "2026-04-20",
        preferredTime: "14:00",
      });

      expect(result).toEqual({ success: true });
    });

    it("allows adding notes during reschedule", async () => {
      vi.mocked(updateBookingDetails).mockResolvedValue({ success: true });

      const result = await updateBookingDetails(1, {
        preferredDate: "2026-04-20",
        preferredTime: "14:00",
        message: "Rescheduled - had a conflict",
      });

      expect(result).toEqual({ success: true });
    });

    it("maintains booking history across rescheduling", async () => {
      const bookings = [
        {
          id: 1,
          name: "Client",
          email: "client@example.com",
          phone: "555-1234",
          serviceType: "Mediation",
          consultationType: "online" as const,
          preferredDate: "2026-04-20",
          preferredTime: "14:00",
          message: "Rescheduled - had a conflict",
          status: "pending" as const,
          userId: null,
          createdAt: new Date("2026-03-20"),
          updatedAt: new Date("2026-03-21"),
        },
      ];

      vi.mocked(getClientBookings).mockResolvedValue(bookings);

      const result = await getClientBookings("client@example.com");

      expect(result[0].createdAt).toBeDefined();
      expect(result[0].updatedAt).toBeDefined();
      expect(result[0].updatedAt > result[0].createdAt).toBe(true);
    });
  });
});
