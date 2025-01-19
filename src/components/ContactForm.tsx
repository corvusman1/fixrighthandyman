import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { TimeSlotSelect } from "./TimeSlotSelect";
import { ContactInfo } from "./ContactInfo";

type FormData = {
  name: string;
  phone: string;
  email: string;
  date?: Date;
  time: string;
  message: string;
};

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    time: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mkgglqje', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preferredDate: formData.date?.toLocaleDateString() || 'Not specified'
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon!",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          time: "",
          message: ""
        });
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
                name="name"
                placeholder="Your name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input 
                name="phone"
                type="tel" 
                placeholder="Your phone number" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input 
              name="email"
              type="email" 
              placeholder="Your email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Preferred Date</label>
            <Calendar
              mode="single"
              selected={formData.date}
              onSelect={(date) => setFormData(prev => ({ ...prev, date }))}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
          </div>
          {formData.date && (
            <TimeSlotSelect 
              value={formData.time} 
              onValueChange={(time) => setFormData(prev => ({ ...prev, time }))} 
            />
          )}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea 
              name="message"
              placeholder="Tell us about your project" 
              required 
              value={formData.message}
              onChange={handleChange}
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