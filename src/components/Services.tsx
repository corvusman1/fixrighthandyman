import { Tv, PackageOpen, Wrench, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "TV Mounting",
    description: "Professional TV mounting service for all types of walls",
    icon: Tv,
    price: "from $79",
  },
  {
    title: "Furniture Assembly",
    description: "Expert assembly of all types of furniture",
    icon: PackageOpen,
    price: "from $69",
  },
  {
    title: "General Repairs",
    description: "Quick fixes for various household issues",
    icon: Wrench,
    price: "from $59",
  },
  {
    title: "Installation Services",
    description: "Installation of various household items",
    icon: Hammer,
    price: "from $49",
  },
];

export const Services = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
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