import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-accent">
      {/* Contact Bar */}
      <div className="bg-background/90 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-end gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <a href="tel:+1234567890" className="text-sm hover:text-secondary">
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <a href="mailto:info@fixitfriends.com" className="text-sm hover:text-secondary">
                info@fixitfriends.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5"
            alt="Handyman Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Professional Handyman Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert TV mounting, furniture assembly, and more. Quality service guaranteed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Book Now
              </Button>
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};