import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

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

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Consultation</CardTitle>
        <CardDescription>
          Schedule a consultation with Cornelia. Fill in your details and preferred date/time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+27 64 060 3592"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="service">Service Type *</Label>
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
          <div className="space-y-2">
            <Label htmlFor="type">Consultation Type *</Label>
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

          {/* Preferred Date */}
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date *</Label>
            <Input
              id="date"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              required
            />
          </div>

          {/* Preferred Time */}
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time *</Label>
            <Select value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              placeholder="Any additional questions or information you'd like to share?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Confirm Booking"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
