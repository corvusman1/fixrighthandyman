import { MapPin } from "lucide-react";

const areas = [
  {
    name: "Los Angeles",
    description: "Serving all of LA County including Downtown, Hollywood, and the Valley",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0",
  },
  {
    name: "Orange County",
    description: "Coverage throughout OC including Irvine, Newport Beach, and Anaheim",
    image: "https://images.unsplash.com/photo-1564391504991-8e4e99257360",
  },
  {
    name: "San Diego",
    description: "From La Jolla to Downtown and everywhere in between",
    image: "https://images.unsplash.com/photo-1538097304804-2a1b932466a9",
  },
];

export const ServiceAreas = () => {
  return (
    <div className="py-24 bg-accent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div key={area.name} className="relative group overflow-hidden rounded-lg">
              <img
                src={area.image}
                alt={area.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                </div>
                <p className="text-white/90 text-sm">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};