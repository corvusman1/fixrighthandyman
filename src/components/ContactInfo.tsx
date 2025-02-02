import { Phone, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="flex justify-center gap-8 mb-8">
      <div className="flex items-center gap-2">
        <Phone className="h-6 w-6 text-secondary" />
        <a 
          href="tel:+19494096450" 
          className="text-xl font-bold text-foreground hover:text-secondary transition-colors"
        >
          (949) 409-6450
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-secondary" />
        <a 
          href="mailto:fixrighthandyman@gmail.com" 
          className="text-foreground hover:text-secondary transition-colors"
        >
          fixrighthandyman@gmail.com
        </a>
      </div>
    </div>
  );
};