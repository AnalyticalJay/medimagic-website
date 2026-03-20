import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, Trash2, Calendar, Clock } from "lucide-react";

const DEFAULT_TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00"
];

type RecurringPattern = "daily" | "weekdays" | "weekends" | "none";

interface AvailabilityForm {
  startDate: string;
  endDate: string;
  timeSlots: string[];
  recurringPattern: RecurringPattern;
  daysOfWeek: number[];
}

export default function AvailabilityManager() {
  const [form, setForm] = useState<AvailabilityForm>({
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    timeSlots: DEFAULT_TIME_SLOTS,
    recurringPattern: "weekdays",
    daysOfWeek: [1, 2, 3, 4, 5], // Monday-Friday
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch existing availability
  const { data: existingAvailability = [] } = trpc.availability.getByDateRange.useQuery({
    startDate: form.startDate,
    endDate: form.endDate,
  });

  // Mutations
  const setBulk = trpc.availability.setBulk.useMutation({
    onSuccess: (data) => {
      setSuccessMessage(`Successfully created ${data.createdCount} availability slots!`);
      setErrorMessage("");
      setTimeout(() => setSuccessMessage(""), 5000);
    },
    onError: (error) => {
      setErrorMessage(error.message || "Failed to set availability");
      setSuccessMessage("");
    },
  });

  const deleteAvailability = trpc.availability.delete.useMutation({
    onSuccess: () => {
      setSuccessMessage("Availability slot deleted successfully!");
      setErrorMessage("");
      setTimeout(() => setSuccessMessage(""), 5000);
    },
    onError: (error) => {
      setErrorMessage(error.message || "Failed to delete availability");
      setSuccessMessage("");
    },
  });

  const handleTimeSlotToggle = (slot: string) => {
    setForm((prev) => ({
      ...prev,
      timeSlots: prev.timeSlots.includes(slot)
        ? prev.timeSlots.filter((s) => s !== slot)
        : [...prev.timeSlots, slot],
    }));
  };

  const handleDayToggle = (day: number) => {
    setForm((prev) => ({
      ...prev,
      daysOfWeek: prev.daysOfWeek.includes(day)
        ? prev.daysOfWeek.filter((d) => d !== day)
        : [...prev.daysOfWeek, day],
    }));
  };

  const handleRecurringPatternChange = (pattern: RecurringPattern) => {
    setForm((prev) => ({
      ...prev,
      recurringPattern: pattern,
      daysOfWeek: pattern === "weekdays" ? [1, 2, 3, 4, 5] : pattern === "weekends" ? [0, 6] : [0, 1, 2, 3, 4, 5, 6],
    }));
  };

  const handleSetAvailability = () => {
    if (!form.startDate || !form.endDate) {
      setErrorMessage("Please select both start and end dates");
      return;
    }
    if (form.timeSlots.length === 0) {
      setErrorMessage("Please select at least one time slot");
      return;
    }

    setBulk.mutate({
      startDate: form.startDate,
      endDate: form.endDate,
      timeSlots: form.timeSlots,
      recurringPattern: form.recurringPattern,
      daysOfWeek: form.recurringPattern === "none" ? undefined : form.daysOfWeek,
    });
  };

  const handleDeleteSlot = (date: string, timeSlot: string) => {
    if (confirm(`Delete availability for ${date} at ${timeSlot}?`)) {
      deleteAvailability.mutate({ date, timeSlot });
    }
  };

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Manage Your Availability</h2>
        <p className="text-muted-foreground">Set your consultation availability in bulk with recurring patterns</p>
      </div>

      {/* Messages */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-800">{successMessage}</p>
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{errorMessage}</p>
        </div>
      )}

      {/* Date Range */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Date Range
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Start Date</label>
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">End Date</label>
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </Card>

      {/* Recurring Pattern */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recurring Pattern</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(["daily", "weekdays", "weekends", "none"] as RecurringPattern[]).map((pattern) => (
              <button
                key={pattern}
                onClick={() => handleRecurringPatternChange(pattern)}
                className={`p-3 rounded-lg font-medium transition-colors ${
                  form.recurringPattern === pattern
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
              </button>
            ))}
          </div>

          {form.recurringPattern === "none" && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Select Days</label>
              <div className="grid grid-cols-7 gap-2">
                {dayNames.map((day, idx) => (
                  <button
                    key={day}
                    onClick={() => handleDayToggle(idx)}
                    className={`p-2 rounded-lg font-medium text-sm transition-colors ${
                      form.daysOfWeek.includes(idx)
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Time Slots */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Time Slots
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {DEFAULT_TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => handleTimeSlotToggle(slot)}
              className={`p-2 rounded-lg font-medium text-sm transition-colors ${
                form.timeSlots.includes(slot)
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </Card>

      {/* Summary */}
      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold text-foreground mb-3">Summary</h3>
        <div className="space-y-2 text-sm">
          <p className="text-foreground">
            <span className="font-medium">Date Range:</span> {form.startDate} to {form.endDate}
          </p>
          <p className="text-foreground">
            <span className="font-medium">Pattern:</span> {form.recurringPattern}
            {form.recurringPattern === "none" && ` (${form.daysOfWeek.length} days selected)`}
          </p>
          <p className="text-foreground">
            <span className="font-medium">Time Slots:</span> {form.timeSlots.join(", ")}
          </p>
        </div>
      </Card>

      {/* Action Button */}
      <Button
        onClick={handleSetAvailability}
        disabled={setBulk.isPending}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-3"
      >
        {setBulk.isPending ? "Setting Availability..." : "Set Availability"}
      </Button>

      {/* Existing Availability */}
      {existingAvailability.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Existing Availability</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {existingAvailability.map((slot) => (
              <div
                key={`${slot.date}-${slot.timeSlot}`}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <div className="text-sm">
                  <p className="font-medium text-foreground">{slot.date}</p>
                  <p className="text-muted-foreground">{slot.timeSlot}</p>
                </div>
                <button
                  onClick={() => handleDeleteSlot(slot.date, slot.timeSlot)}
                  disabled={deleteAvailability.isPending}
                  className="p-2 hover:bg-red-100 rounded-lg transition-colors active:bg-red-200"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
