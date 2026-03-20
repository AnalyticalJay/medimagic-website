import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Calendar, Clock, MessageSquare, Edit2, X } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

interface RescheduleData {
  bookingId: number;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00"
];

export default function ClientDashboard() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [rescheduleModal, setRescheduleModal] = useState<RescheduleData | null>(null);
  const [expandedBookingId, setExpandedBookingId] = useState<number | null>(null);

  // Fetch client bookings
  const { data: bookings = [], isLoading, refetch } = trpc.clientPortal.getBookings.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  // Reschedule mutation
  const reschedule = trpc.clientPortal.reschedule.useMutation({
    onSuccess: () => {
      setRescheduleModal(null);
      refetch();
    },
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background py-12 md:py-20 px-4 md:px-0">
        <div className="container text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Please Log In</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6">You need to be logged in to view your bookings.</p>
          <Button 
            className="bg-accent hover:bg-accent/90 w-full md:w-auto"
            onClick={() => navigate("/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent/80 text-white py-8 md:py-12 px-4 md:px-0">
        <div className="container">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">My Bookings</h1>
          <p className="text-sm md:text-base text-white/90">View and manage your consultations with MediMagic</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8 md:py-12 px-4 md:px-0">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-sm md:text-base text-muted-foreground">Loading your bookings...</p>
          </div>
        ) : bookings.length === 0 ? (
          <Card className="p-6 md:p-8 text-center">
            <p className="text-sm md:text-base text-muted-foreground mb-4">You don't have any bookings yet.</p>
            <Button 
              className="bg-accent hover:bg-accent/90 w-full md:w-auto"
              onClick={() => navigate("/booking")}
            >
              Book a Consultation
            </Button>
          </Card>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {bookings.map((booking: any) => (
              <Card key={booking.id} className="overflow-hidden">
                <button
                  onClick={() => setExpandedBookingId(expandedBookingId === booking.id ? null : booking.id)}
                  className="w-full p-4 md:p-6 text-left hover:bg-muted/50 transition-colors active:bg-muted touch-manipulation"
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm md:text-base text-foreground truncate">{booking.serviceType}</h3>
                      <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-muted-foreground flex-wrap">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>{new Date(booking.preferredDate).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{booking.preferredTime}</span>
                      </div>
                      <div className="mt-2">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          booking.status === "confirmed" ? "bg-green-100 text-green-800" :
                          booking.status === "completed" ? "bg-blue-100 text-blue-800" :
                          booking.status === "cancelled" ? "bg-red-100 text-red-800" :
                          "bg-yellow-100 text-yellow-800"
                        }`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform ${expandedBookingId === booking.id ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedBookingId === booking.id && (
                  <div className="border-t border-border p-4 md:p-6 bg-muted/30 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs md:text-sm font-medium text-muted-foreground">Consultation Type</p>
                        <p className="text-sm md:text-base text-foreground mt-1">{booking.consultationType}</p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-medium text-muted-foreground">Booked On</p>
                        <p className="text-sm md:text-base text-foreground mt-1">{new Date(booking.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {booking.message && (
                      <div>
                        <p className="text-xs md:text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Your Message
                        </p>
                        <p className="text-sm md:text-base text-foreground mt-1 break-words">{booking.message}</p>
                      </div>
                    )}

                    {booking.status === "pending" && (
                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setRescheduleModal({
                            bookingId: booking.id,
                            preferredDate: booking.preferredDate,
                            preferredTime: booking.preferredTime,
                            message: booking.message || "",
                          })}
                          className="flex-1 sm:flex-none text-xs md:text-sm h-9 md:h-8"
                        >
                          <Edit2 className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          Reschedule
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Reschedule Modal */}
      {rescheduleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-50 p-4">
          <Card className="w-full md:max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6 border-b border-border flex items-center justify-between sticky top-0 bg-background">
              <h2 className="text-lg md:text-xl font-bold">Reschedule Booking</h2>
              <button
                onClick={() => setRescheduleModal(null)}
                className="p-1 hover:bg-muted rounded transition-colors active:bg-muted/70"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6 space-y-4">
              {/* Date Input */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-sm md:text-base font-medium">New Date</label>
                <input
                  type="date"
                  value={rescheduleModal.preferredDate}
                  onChange={(e) => setRescheduleModal({
                    ...rescheduleModal,
                    preferredDate: e.target.value,
                  })}
                  className="w-full px-3 py-2 md:py-2.5 border border-border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-accent h-10 md:h-9"
                />
              </div>

              {/* Time Slots */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-sm md:text-base font-medium">New Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setRescheduleModal({
                        ...rescheduleModal,
                        preferredTime: slot,
                      })}
                      className={`p-2 md:p-2.5 rounded-lg text-xs md:text-sm font-medium transition-colors active:scale-95 touch-manipulation ${
                        rescheduleModal.preferredTime === slot
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-sm md:text-base font-medium">Additional Notes</label>
                <textarea
                  value={rescheduleModal.message}
                  onChange={(e) => setRescheduleModal({
                    ...rescheduleModal,
                    message: e.target.value,
                  })}
                  placeholder="Any additional information..."
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={3}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse sm:flex-row gap-2 pt-4">
                <button
                  onClick={() => setRescheduleModal(null)}
                  className="flex-1 px-4 py-2.5 md:py-2 border border-border rounded-lg text-sm md:text-base font-medium hover:bg-muted transition-colors active:bg-muted/70 touch-manipulation"
                >
                  Cancel
                </button>
                <button
                  onClick={() => reschedule.mutate({
                    bookingId: rescheduleModal.bookingId,
                    preferredDate: rescheduleModal.preferredDate,
                    preferredTime: rescheduleModal.preferredTime,
                    message: rescheduleModal.message,
                  })}
                  disabled={reschedule.isPending}
                  className="flex-1 px-4 py-2.5 md:py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg text-sm md:text-base font-medium transition-colors disabled:opacity-50 active:scale-95 touch-manipulation"
                >
                  {reschedule.isPending ? "Updating..." : "Confirm"}
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
