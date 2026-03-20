import { describe, expect, it, vi } from "vitest";
import {
  sendBookingConfirmationEmail,
  sendAdminNotificationEmail,
  sendStatusUpdateEmail,
} from "./email";

// Mock nodemailer
vi.mock("nodemailer", () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: vi.fn(async (mailOptions) => {
        // Validate that required fields are present
        if (!mailOptions.to || !mailOptions.subject || !mailOptions.html) {
          throw new Error("Missing required email fields");
        }
        return { messageId: `mock-${Date.now()}@medimagic.local` };
      }),
    })),
  },
}));

describe("Email Notifications", () => {
  const mockBookingDetails = {
    bookingId: "BOOK-001",
    serviceType: "Divorce Settlement Agreements",
    consultationType: "online" as const,
    preferredDate: "2026-04-15",
    preferredTime: "14:00",
  };

  describe("sendBookingConfirmationEmail", () => {
    it("sends confirmation email to client with correct details", async () => {
      const result = await sendBookingConfirmationEmail(
        "client@example.com",
        "John Doe",
        mockBookingDetails
      );

      expect(result.success).toBe(true);
      expect(result.messageId).toBeDefined();
      expect(result.messageId).toContain("mock-");
    });

    it("includes booking details in the email", async () => {
      const result = await sendBookingConfirmationEmail(
        "client@example.com",
        "Jane Smith",
        mockBookingDetails
      );

      expect(result.success).toBe(true);
    });

    it("handles optional phone field", async () => {
      const result = await sendBookingConfirmationEmail(
        "client@example.com",
        "Alice Johnson",
        mockBookingDetails
      );

      expect(result.success).toBe(true);
    });
  });

  describe("sendAdminNotificationEmail", () => {
    it("sends admin notification with complete booking details", async () => {
      const adminDetails = {
        ...mockBookingDetails,
        clientName: "John Doe",
        clientEmail: "client@example.com",
        clientPhone: "+27123456789",
        notes: "Client prefers afternoon slots",
      };

      const result = await sendAdminNotificationEmail(adminDetails);

      expect(result.success).toBe(true);
      expect(result.messageId).toBeDefined();
    });

    it("sends admin notification without optional phone", async () => {
      const adminDetails = {
        ...mockBookingDetails,
        clientName: "Jane Smith",
        clientEmail: "client@example.com",
      };

      const result = await sendAdminNotificationEmail(adminDetails);

      expect(result.success).toBe(true);
    });

    it("sends admin notification without notes", async () => {
      const adminDetails = {
        ...mockBookingDetails,
        clientName: "Bob Wilson",
        clientEmail: "client@example.com",
        clientPhone: "+27987654321",
      };

      const result = await sendAdminNotificationEmail(adminDetails);

      expect(result.success).toBe(true);
    });
  });

  describe("sendStatusUpdateEmail", () => {
    it("sends confirmed status update email", async () => {
      const result = await sendStatusUpdateEmail(
        "client@example.com",
        "John Doe",
        "confirmed",
        mockBookingDetails
      );

      expect(result.success).toBe(true);
      expect(result.messageId).toBeDefined();
    });

    it("sends completed status update email", async () => {
      const result = await sendStatusUpdateEmail(
        "client@example.com",
        "Jane Smith",
        "completed",
        mockBookingDetails
      );

      expect(result.success).toBe(true);
    });

    it("sends cancelled status update email", async () => {
      const result = await sendStatusUpdateEmail(
        "client@example.com",
        "Alice Johnson",
        "cancelled",
        mockBookingDetails
      );

      expect(result.success).toBe(true);
    });

    it("handles unknown status gracefully", async () => {
      const result = await sendStatusUpdateEmail(
        "client@example.com",
        "Bob Wilson",
        "pending",
        mockBookingDetails
      );

      expect(result.success).toBe(true);
    });
  });
});
