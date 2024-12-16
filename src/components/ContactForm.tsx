import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll get back to you shortly!",
    });
  };

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

  const timeSlots = generateTimeSlots();

  return (
    <div className="py-24 bg-white">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        {/* Contact Information */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Phone className="h-6 w-6 text-secondary" />
            <a href="tel:+19494096450" className="text-xl font-bold hover:text-secondary transition-colors">
              (949) 409-6450
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-secondary" />
            <a href="mailto:info@fixitfriends.com" className="hover:text-secondary">
              info@fixitfriends.com
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input type="tel" placeholder="Your phone number" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input type="email" placeholder="Your email" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Preferred Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
          {date && (
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Time</label>
              <Select value={time} onValueChange={setTime}>
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
          )}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea placeholder="Tell us about your project" required />
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};