import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { TimeSlotSelect } from "./TimeSlotSelect";
import { ContactInfo } from "./ContactInfo";

export const ContactForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Format the date for email
    const formattedDate = date ? date.toLocaleDateString() : 'Not specified';
    
    try {
      const response = await fetch('https://formspree.io/f/xqkornbv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          preferredDate: formattedDate,
          preferredTime: time || 'Not specified',
          message
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon!",
        });
        // Clear form
        setName("");
        setPhone("");
        setEmail("");
        setDate(undefined);
        setTime("");
        setMessage("");
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <ContactInfo />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input 
                placeholder="Your name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input 
                type="tel" 
                placeholder="Your phone number" 
                required 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input 
              type="email" 
              placeholder="Your email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
          {date && <TimeSlotSelect value={time} onValueChange={setTime} />}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea 
              placeholder="Tell us about your project" 
              required 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};