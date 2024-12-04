import { Tv, PackageOpen, Wrench, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "TV Mounting",
    description: "Professional TV mounting service for all types of walls",
    icon: Tv,
    price: "from $79",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  },
  {
    title: "Furniture Assembly",
    description: "Expert assembly of all types of furniture",
    icon: PackageOpen,
    price: "from $69",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
  {
    title: "General Repairs",
    description: "Quick fixes for various household issues",
    icon: Wrench,
    price: "from $59",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5",
  },
  {
    title: "Installation Services",
    description: "Installation of various household items",
    icon: Hammer,
    price: "from $49",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
];

export const Services = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};