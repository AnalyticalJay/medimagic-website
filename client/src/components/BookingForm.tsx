import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import AvailabilityCalendar from "./AvailabilityCalendar";

interface BookingFormProps {
  serviceType?: string;
  onSuccess?: () => void;
}

export default function BookingForm({ serviceType = "", onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    consultationType: "online" | "in-person";
    preferredDate: string;
    preferredTime: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    serviceType: serviceType,
    consultationType: "online",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const createBooking = trpc.booking.create.useMutation({
    onSuccess: () => {
      toast.success("Booking request submitted successfully! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        consultationType: "online",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
      onSuccess?.();
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to submit booking request");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.serviceType || !formData.preferredDate || !formData.preferredTime) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await createBooking.mutateAsync(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { label: "Divorce Settlement Agreements", value: "Divorce Settlement Agreements" },
    { label: "Maintenance Agreements", value: "Maintenance Agreements" },
    { label: "Parenting Plans", value: "Parenting Plans" },
    { label: "Voice of the Child", value: "Voice of the Child" },
    { label: "Adult Divorce Preparation", value: "Adult Divorce Preparation" },
    { label: "Illness & Disability Support", value: "Illness & Disability Support" },
    { label: "Palliative & End-of-Life Care", value: "Palliative & End-of-Life Care" },
    { label: "Health Education & Promotion", value: "Health Education & Promotion" },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-xl md:text-2xl">Book Your Consultation</CardTitle>
        <CardDescription className="text-sm md:text-base mt-2">
          Schedule a consultation with Cornelia. Fill in your details and select your preferred date/time from available slots.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          {/* Name */}
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
            <Input
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-base md:text-sm h-10 md:h-9"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="email" className="text-sm md:text-base">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="text-base md:text-sm h-10 md:h-9"
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="phone" className="text-sm md:text-base">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+27 64 060 3592"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-base md:text-sm h-10 md:h-9"
            />
          </div>

          {/* Service Type */}
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="service" className="text-sm md:text-base">Service Type *</Label>
            <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Consultation Type */}
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="type" className="text-sm md:text-base">Consultation Type *</Label>
            <Select value={formData.consultationType} onValueChange={(value) => setFormData({ ...formData, consultationType: value as "online" | "in-person" })}>
              <SelectTrigger id="type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="in-person">In-Person</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Availability Calendar */}
          <div className="space-y-1.5 md:space-y-2">
            <Label className="text-sm md:text-base">Select Date & Time *</Label>
            <AvailabilityCalendar
              selectedDate={formData.preferredDate}
              selectedTime={formData.preferredTime}
              onDateChange={(date) => setFormData({ ...formData, preferredDate: date })}
              onTimeChange={(time) => setFormData({ ...formData, preferredTime: time })}
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="message" className="text-sm md:text-base">Additional Message</Label>
            <Textarea
              id="message"
              placeholder="Any additional questions or information you'd like to share?"
              value={formData.message}
              className="text-base md:text-sm"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 md:px-6 py-3 md:py-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 touch-manipulation text-base md:text-sm min-h-[44px] md:min-h-[40px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Confirm Booking"}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
