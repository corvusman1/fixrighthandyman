import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimeSlotSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute of ['00', '30']) {
      if (hour === 17 && minute === '30') continue;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour > 12 ? hour - 12 : hour;
      slots.push(`${hour12}:${minute} ${ampm}`);
    }
  }
  return slots;
};

export const TimeSlotSelect = ({ value, onValueChange }: TimeSlotSelectProps) => {
  const timeSlots = generateTimeSlots();

  return (
    <div>
      <label className="block text-sm font-medium mb-2">Preferred Time</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Select a time" />
        </SelectTrigger>
        <SelectContent className="bg-white border shadow-lg">
          {timeSlots.map((slot) => (
            <SelectItem 
              key={slot} 
              value={slot}
              className="hover:bg-gray-100"
            >
              {slot}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};