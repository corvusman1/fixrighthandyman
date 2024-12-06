import { Tv, PackageOpen, Wrench, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const services = [
  {
    title: "TV Mounting",
    description: "Professional TV mounting service for all types of walls",
    icon: Tv,
    price: "from $79",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    subcategories: ["TV Wall Mount Installation", "TV Setup & Calibration", "Cable Management", "Sound System Setup"]
  },
  {
    title: "Furniture Assembly",
    description: "Expert assembly of all types of furniture",
    icon: PackageOpen,
    price: "from $69",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    subcategories: ["IKEA Furniture", "Office Furniture", "Bedroom Sets", "Outdoor Furniture"]
  },
  {
    title: "General Repairs",
    description: "Quick fixes for various household issues",
    icon: Wrench,
    price: "from $69",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5",
    subcategories: ["Door Repairs", "Drywall Repairs", "Cabinet Hardware", "Minor Plumbing"]
  },
  {
    title: "Installation Services",
    description: "Installation of various household items",
    icon: Hammer,
    price: "from $69",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    subcategories: ["Shelving Installation", "Mirror Mounting", "Light Fixture Installation", "Door Installation"]
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="py-24 bg-white" id="services">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
              <div 
                className="relative h-48"
                onClick={() => setSelectedService(selectedService === service.title ? null : service.title)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
                {selectedService === service.title && (
                  <div className="mt-4 space-y-2">
                    {service.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to="contact"
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
          ))}
        </div>
      </div>
    </div>
  );
};