import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Check, X } from "lucide-react";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

interface AvailabilityManagerProps {
  onClose?: () => void;
}

export function AvailabilityManager({ onClose }: AvailabilityManagerProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availabilityMap, setAvailabilityMap] = useState<Record<string, boolean>>({});

  // Queries
  const { data: availability, isLoading } = trpc.availability.get.useQuery(
    { date: selectedDate },
    { enabled: !!selectedDate }
  );

  // Mutations
  const setAvailabilityMutation = trpc.availability.set.useMutation({
    onSuccess: () => {
      // Refetch availability for the selected date
      if (selectedDate) {
        // The query will automatically refetch due to the mutation invalidation
      }
    },
  });

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setAvailabilityMap({});
  };

  const handleToggleSlot = (timeSlot: string) => {
    setAvailabilityMap((prev) => ({
      ...prev,
      [timeSlot]: !prev[timeSlot],
    }));
  };

  const handleSaveSlot = (timeSlot: string) => {
    if (!selectedDate) return;

    const isAvailable = availabilityMap[timeSlot] ?? false;
    setAvailabilityMutation.mutate({
      date: selectedDate,
      timeSlot,
      isAvailable,
    });
  };

  const getSlotStatus = (timeSlot: string) => {
    if (availabilityMap[timeSlot] !== undefined) {
      return availabilityMap[timeSlot];
    }

    const existingSlot = availability?.find((a) => a.timeSlot === timeSlot);
    return existingSlot?.isAvailable === 1;
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-accent" />
          <h3 className="text-xl font-bold text-foreground">Manage Availability</h3>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">Select Date</label>
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          className="w-full"
        />
      </div>

      {selectedDate && (
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Available Time Slots for {selectedDate}
          </h4>

          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Loading availability...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {TIME_SLOTS.map((timeSlot) => {
                const isAvailable = getSlotStatus(timeSlot);
                const isModified = availabilityMap[timeSlot] !== undefined;

                return (
                  <div key={timeSlot} className="flex flex-col gap-2">
                    <div
                      className={`p-3 rounded-lg border-2 transition cursor-pointer ${
                        isAvailable
                          ? "border-accent bg-accent/10"
                          : "border-border bg-muted"
                      } ${isModified ? "ring-2 ring-yellow-400" : ""}`}
                      onClick={() => handleToggleSlot(timeSlot)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{timeSlot}</span>
                        {isAvailable ? (
                          <Check className="w-4 h-4 text-accent" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>

                    {isModified && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleSaveSlot(timeSlot)}
                        disabled={setAvailabilityMutation.isPending}
                        className="text-xs"
                      >
                        {setAvailabilityMutation.isPending ? "Saving..." : "Save"}
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Tip:</strong> Click on a time slot to toggle availability, then click "Save" to update.
              Green slots are available, gray slots are unavailable.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
