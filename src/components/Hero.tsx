import { Button } from "@/components/ui/button";
import { Phone, Mail, Wrench } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-accent">
      {/* Contact Bar */}
      <div className="bg-background/90 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-end gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-6 w-6 text-secondary" />
              <a href="tel:+19494096450" className="text-xl font-bold hover:text-secondary transition-colors">
                (949) 409-6450
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-secondary" />
              <a href="mailto:fixrighthandyman@gmail.com" className="text-sm hover:text-secondary">
                fixrighthandyman@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
            alt="Charlotte Handyman Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Wrench className="h-12 w-12 text-secondary" />
              <div className="text-4xl font-bold text-secondary">
                Fix<span className="text-primary">Right</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Charlotte's Professional Handyman Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert TV mounting, furniture assembly, and more in Charlotte, NC. Quality service guaranteed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="tel:+19494096450">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};