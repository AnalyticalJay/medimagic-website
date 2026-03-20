import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Calendar, Clock, MessageSquare, Edit2, X } from "lucide-react";
import { useLocation } from "wouter";

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
      <div className="min-h-screen bg-background py-20">
        <div className="container text-center">
          <h1 className="text-3xl font-bold mb-4">Please Log In</h1>
          <p className="text-muted-foreground mb-6">You need to be logged in to view your bookings.</p>
          <Button 
            className="bg-accent hover:bg-accent/90"
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
      <div className="bg-gradient-to-r from-primary to-accent/80 text-white py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">My Bookings</h1>
          <p className="text-white/90">View and manage your consultations with MediMagic</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading your bookings...</p>
          </div>
        ) : bookings.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground mb-4">You don't have any bookings yet.</p>
            <Button 
              className="bg-accent hover:bg-accent/90"
              onClick={() => navigate("/booking")}
            >
              Book a Consultation
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between bg-background hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedBookingId(expandedBookingId === booking.id ? null : booking.id)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{booking.serviceType}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "confirmed" ? "bg-green-100 text-green-800" :
                        booking.status === "completed" ? "bg-blue-100 text-blue-800" :
                        booking.status === "cancelled" ? "bg-red-100 text-red-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(booking.preferredDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {booking.preferredTime}
                      </div>
                      <div className="text-xs">
                        {booking.consultationType === "online" ? "🖥️ Online" : "🏢 In-Person"}
                      </div>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedBookingId === booking.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Expanded Details */}
                {expandedBookingId === booking.id && (
                  <div className="border-t border-border p-6 bg-muted/30 space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Booking Details</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-muted-foreground">Booking ID:</span> #{booking.id}</p>
                        <p><span className="text-muted-foreground">Name:</span> {booking.name}</p>
                        <p><span className="text-muted-foreground">Email:</span> {booking.email}</p>
                        {booking.phone && <p><span className="text-muted-foreground">Phone:</span> {booking.phone}</p>}
                        <p><span className="text-muted-foreground">Created:</span> {new Date(booking.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {booking.message && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Your Message
                        </h4>
                        <p className="text-sm text-muted-foreground bg-background p-3 rounded border border-border">
                          {booking.message}
                        </p>
                      </div>
                    )}

                    {booking.status !== "completed" && booking.status !== "cancelled" && (
                      <div className="flex gap-2 pt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => setRescheduleModal({
                            bookingId: booking.id,
                            preferredDate: booking.preferredDate,
                            preferredTime: booking.preferredTime,
                            message: booking.message || "",
                          })}
                        >
                          <Edit2 className="w-4 h-4" />
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Reschedule Booking</h2>
                <button
                  onClick={() => setRescheduleModal(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={rescheduleModal.preferredDate}
                    onChange={(e) => setRescheduleModal({
                      ...rescheduleModal,
                      preferredDate: e.target.value,
                    })}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={rescheduleModal.preferredTime}
                    onChange={(e) => setRescheduleModal({
                      ...rescheduleModal,
                      preferredTime: e.target.value,
                    })}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={rescheduleModal.message}
                    onChange={(e) => setRescheduleModal({
                      ...rescheduleModal,
                      message: e.target.value,
                    })}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground resize-none"
                    rows={3}
                    placeholder="Any additional information..."
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setRescheduleModal(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={() => {
                      reschedule.mutate({
                        bookingId: rescheduleModal.bookingId,
                        preferredDate: rescheduleModal.preferredDate,
                        preferredTime: rescheduleModal.preferredTime,
                        message: rescheduleModal.message,
                      });
                    }}
                    disabled={reschedule.isPending}
                  >
                    {reschedule.isPending ? "Updating..." : "Confirm"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
