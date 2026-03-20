import nodemailer from "nodemailer";

// Email configuration - using environment variables
const emailConfig = {
  host: process.env.SMTP_HOST || "localhost",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

/**
 * Send booking confirmation email to client
 */
export async function sendBookingConfirmationEmail(
  clientEmail: string,
  clientName: string,
  bookingDetails: {
    serviceType: string;
    consultationType: string;
    preferredDate: string;
    preferredTime: string;
    bookingId: string;
  }
) {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0F3D4C 0%, #2F6F73 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Booking Confirmation</h1>
        <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">MediMagic - Mediation & Social Work Services</p>
      </div>
      
      <div style="background: #f8fafb; padding: 30px; border-radius: 0 0 8px 8px;">
        <p style="font-size: 16px; color: #1A2A3A; margin-top: 0;">Dear ${clientName},</p>
        
        <p style="font-size: 14px; color: #5A7A7F; line-height: 1.6;">
          Thank you for booking a consultation with MediMagic. We're excited to support you through this important process. Here are your booking details:
        </p>
        
        <div style="background: white; border-left: 4px solid #8BC34A; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Service Type:</strong> ${bookingDetails.serviceType}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Consultation Type:</strong> ${bookingDetails.consultationType}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Preferred Date:</strong> ${bookingDetails.preferredDate}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Preferred Time:</strong> ${bookingDetails.preferredTime}</p>
        </div>
        
        <p style="font-size: 14px; color: #5A7A7F; line-height: 1.6;">
          <strong>What's Next?</strong><br/>
          We will review your booking request and confirm your appointment within 24 hours. You'll receive a confirmation email with the final appointment details and any additional information you need to prepare.
        </p>
        
        <p style="font-size: 14px; color: #5A7A7F; line-height: 1.6;">
          If you have any questions or need to reschedule, please don't hesitate to contact us.
        </p>
        
        <div style="background: #D4E5E9; padding: 15px; border-radius: 4px; margin: 20px 0;">
          <p style="margin: 0; font-size: 13px; color: #0F3D4C;">
            <strong>Contact Information:</strong><br/>
            Email: cornelia.griessel@medimagic.co.za<br/>
            Phone: +27 (0)XX XXX XXXX
          </p>
        </div>
        
        <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #E0E8EB; padding-top: 15px;">
          This is an automated email. Please do not reply to this message. For inquiries, contact us directly at cornelia.griessel@medimagic.co.za
        </p>
      </div>
    </div>
  `;

  const textContent = `
Booking Confirmation - MediMagic

Dear ${clientName},

Thank you for booking a consultation with MediMagic. Here are your booking details:

Booking ID: ${bookingDetails.bookingId}
Service Type: ${bookingDetails.serviceType}
Consultation Type: ${bookingDetails.consultationType}
Preferred Date: ${bookingDetails.preferredDate}
Preferred Time: ${bookingDetails.preferredTime}

What's Next?
We will review your booking request and confirm your appointment within 24 hours. You'll receive a confirmation email with the final appointment details.

If you have any questions or need to reschedule, please contact us.

Contact: cornelia.griessel@medimagic.co.za
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@medimagic.co.za",
      to: clientEmail,
      subject: `Booking Confirmation - ${bookingDetails.serviceType}`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Client confirmation email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending client confirmation email:", error);
    throw error;
  }
}

/**
 * Send admin notification email to Cornelia about new booking
 */
export async function sendAdminNotificationEmail(
  bookingDetails: {
    bookingId: string;
    clientName: string;
    clientEmail: string;
    clientPhone?: string;
    serviceType: string;
    consultationType: string;
    preferredDate: string;
    preferredTime: string;
    notes?: string;
  }
) {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #8BC34A 0%, #7ab041 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Booking Received</h1>
        <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">MediMagic Admin Notification</p>
      </div>
      
      <div style="background: #f8fafb; padding: 30px; border-radius: 0 0 8px 8px;">
        <p style="font-size: 16px; color: #1A2A3A; margin-top: 0;">New booking request received:</p>
        
        <div style="background: white; border-left: 4px solid #8BC34A; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Client Name:</strong> ${bookingDetails.clientName}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Email:</strong> ${bookingDetails.clientEmail}</p>
          ${bookingDetails.clientPhone ? `<p style="margin: 8px 0; color: #1A2A3A;"><strong>Phone:</strong> ${bookingDetails.clientPhone}</p>` : ""}
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Service Type:</strong> ${bookingDetails.serviceType}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Consultation Type:</strong> ${bookingDetails.consultationType}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Preferred Date:</strong> ${bookingDetails.preferredDate}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Preferred Time:</strong> ${bookingDetails.preferredTime}</p>
          ${bookingDetails.notes ? `<p style="margin: 8px 0; color: #1A2A3A;"><strong>Notes:</strong> ${bookingDetails.notes}</p>` : ""}
        </div>
        
        <p style="font-size: 14px; color: #5A7A7F; line-height: 1.6;">
          Please log in to the admin dashboard to review and confirm this booking.
        </p>
        
        <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #E0E8EB; padding-top: 15px;">
          This is an automated notification from MediMagic booking system.
        </p>
      </div>
    </div>
  `;

  const textContent = `
New Booking Received - MediMagic Admin

Booking ID: ${bookingDetails.bookingId}
Client Name: ${bookingDetails.clientName}
Email: ${bookingDetails.clientEmail}
${bookingDetails.clientPhone ? `Phone: ${bookingDetails.clientPhone}` : ""}
Service Type: ${bookingDetails.serviceType}
Consultation Type: ${bookingDetails.consultationType}
Preferred Date: ${bookingDetails.preferredDate}
Preferred Time: ${bookingDetails.preferredTime}
${bookingDetails.notes ? `Notes: ${bookingDetails.notes}` : ""}

Please log in to the admin dashboard to review and confirm this booking.
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@medimagic.co.za",
      to: process.env.ADMIN_EMAIL || "cornelia.griessel@medimagic.co.za",
      subject: `New Booking Request - ${bookingDetails.serviceType}`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Admin notification email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending admin notification email:", error);
    throw error;
  }
}

/**
 * Send booking status update email to client
 */
export async function sendStatusUpdateEmail(
  clientEmail: string,
  clientName: string,
  status: string,
  bookingDetails: {
    serviceType: string;
    preferredDate: string;
    preferredTime: string;
    bookingId: string;
  }
) {
  const statusMessages: Record<string, { title: string; message: string }> = {
    confirmed: {
      title: "Your Appointment is Confirmed!",
      message:
        "Your appointment has been confirmed. We look forward to meeting with you.",
    },
    completed: {
      title: "Appointment Completed",
      message:
        "Thank you for attending your consultation with MediMagic. We hope it was helpful.",
    },
    cancelled: {
      title: "Appointment Cancelled",
      message:
        "Your appointment has been cancelled. If you would like to reschedule, please contact us.",
    },
  };

  const statusInfo = statusMessages[status] || {
    title: "Booking Status Updated",
    message: `Your booking status has been updated to: ${status}`,
  };

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0F3D4C 0%, #2F6F73 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">${statusInfo.title}</h1>
      </div>
      
      <div style="background: #f8fafb; padding: 30px; border-radius: 0 0 8px 8px;">
        <p style="font-size: 16px; color: #1A2A3A; margin-top: 0;">Dear ${clientName},</p>
        
        <p style="font-size: 14px; color: #5A7A7F; line-height: 1.6;">
          ${statusInfo.message}
        </p>
        
        <div style="background: white; border-left: 4px solid #8BC34A; padding: 15px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Booking ID:</strong> ${bookingDetails.bookingId}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Service:</strong> ${bookingDetails.serviceType}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Date:</strong> ${bookingDetails.preferredDate}</p>
          <p style="margin: 8px 0; color: #1A2A3A;"><strong>Time:</strong> ${bookingDetails.preferredTime}</p>
        </div>
        
        <p style="font-size: 14px; color: #5A7A7F; line-height: 1.6;">
          If you have any questions, please contact us at cornelia.griessel@medimagic.co.za
        </p>
      </div>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@medimagic.co.za",
      to: clientEmail,
      subject: `${statusInfo.title} - MediMagic`,
      html: htmlContent,
    });

    console.log("Status update email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending status update email:", error);
    throw error;
  }
}
