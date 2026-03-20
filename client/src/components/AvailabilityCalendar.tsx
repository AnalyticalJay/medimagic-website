import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, AlertCircle } from "lucide-react";

interface AvailabilityCalendarProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export default function AvailabilityCalendar({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: AvailabilityCalendarProps) {
  const [displayMonth, setDisplayMonth] = useState(() => {
    const date = new Date(selectedDate || new Date());
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });

  // Fetch available slots for selected date
  const { data: availableSlots = [], isLoading: slotsLoading } = trpc.availability.getAvailableSlots.useQuery(
    { date: selectedDate },
    { enabled: !!selectedDate }
  );

  // Get calendar days
  const calendarDays = useMemo(() => {
    const year = displayMonth.getFullYear();
    const month = displayMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  }, [displayMonth]);

  const handlePrevMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0];
    onDateChange(dateStr);
  };

  const isDateInPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isDateSelected = (date: Date) => {
    if (!date) return false;
    const dateStr = date.toISOString().split("T")[0];
    return dateStr === selectedDate;
  };

  const monthName = displayMonth.toLocaleString("default", { month: "long", year: "numeric" });

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Select Date</h3>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <h4 className="text-base font-medium text-foreground">{monthName}</h4>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((date, idx) => {
            if (!date) {
              return <div key={`empty-${idx}`} />;
            }

            const isPast = isDateInPast(date);
            const isSelected = isDateSelected(date);

            return (
              <button
                key={date.toISOString()}
                onClick={() => !isPast && handleDateClick(date)}
                disabled={isPast}
                className={`
                  p-2 rounded-lg text-sm font-medium transition-colors
                  ${isPast
                    ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                    : isSelected
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border border-border text-foreground hover:bg-muted"
                  }
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Time Slots */}
      {selectedDate && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Available Times
          </h3>

          {slotsLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading available times...</p>
            </div>
          ) : availableSlots.length === 0 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-900">No availability</p>
                <p className="text-sm text-yellow-800">
                  No available time slots for {new Date(selectedDate).toLocaleDateString()}. Please choose another date.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot.timeSlot}
                  onClick={() => onTimeChange(slot.timeSlot)}
                  className={`
                    p-3 rounded-lg text-sm font-medium transition-colors
                    ${selectedTime === slot.timeSlot
                      ? "bg-accent text-accent-foreground"
                      : "bg-background border border-border text-foreground hover:bg-muted"
                    }
                  `}
                >
                  {slot.timeSlot}
                </button>
              ))}
            </div>
          )}

          {selectedDate && selectedTime && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-900">
                <span className="font-medium">Selected:</span> {new Date(selectedDate).toLocaleDateString()} at {selectedTime}
              </p>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
