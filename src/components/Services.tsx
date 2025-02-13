import { useState, memo } from "react";
import { Tv, PackageOpen, Wrench, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-scroll";

const services = [
  {
    title: "TV Mounting",
    description: "Professional TV mounting service for all types of walls",
    icon: Tv,
    price: "from $89",
    image: "/lovable-uploads/9643c678-0bfc-442e-a631-3a673bac146d.png",
    subcategories: ["TV Wall Mount Installation", "TV Setup & Calibration", "Cable Management", "Sound System Setup"]
  },
  {
    title: "Furniture Assembly",
    description: "Expert assembly of all types of furniture",
    icon: PackageOpen,
    price: "$50/hour",
    image: "/lovable-uploads/2bde28bd-a359-4e65-9ad3-78eb0c60da3f.png",
    subcategories: ["IKEA Furniture", "Office Furniture", "Bedroom Sets", "Outdoor Furniture"]
  },
  {
    title: "General Repairs",
    description: "Quick fixes for various household issues",
    icon: Wrench,
    price: "$50/hour",
    image: "/lovable-uploads/806ebba4-28bc-4402-a406-a40035c076a8.png",
    subcategories: ["Door Repairs", "Drywall Repairs", "Cabinet Hardware", "Minor Plumbing"]
  },
  {
    title: "Installation Services",
    description: "Installation of various household items",
    icon: Hammer,
    price: "$50/hour",
    image: "/lovable-uploads/5dcb4c6c-cbcb-429a-9c97-9fc1caa3b587.png",
    subcategories: ["Shelving Installation", "Mirror Mounting", "Light Fixture Installation", "Door Installation"]
  }
];

const ServiceCard = memo(({ 
  service, 
  isSelected, 
  onSelect 
}: { 
  service: typeof services[0], 
  isSelected: boolean, 
  onSelect: () => void 
}) => (
  <Card className="hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
    <div 
      className="relative h-48"
      onClick={onSelect}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-4 left-4">
        <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
          <service.icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
    <CardHeader>
      <CardTitle>{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="font-semibold text-primary">{service.price}</p>
      {isSelected && (
        <div className="mt-4 space-y-2">
          {service.subcategories.map((subcategory) => (
            <Link
              key={subcategory}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="block p-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
            >
              {subcategory}
            </Link>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
));

ServiceCard.displayName = "ServiceCard";

export const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="py-24 bg-white" id="services">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              isSelected={selectedService === service.title}
              onSelect={() => setSelectedService(selectedService === service.title ? null : service.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};