import { MapPin } from "lucide-react";

const areas = [
  {
    name: "Uptown Charlotte",
    description: "Serving the heart of Charlotte including Trade & Tryon, First Ward, and Fourth Ward",
    image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?q=80&w=1000", // Charlotte skyline
  },
  {
    name: "South Charlotte",
    description: "Coverage throughout Ballantyne, SouthPark, and Myers Park",
    image: "https://images.unsplash.com/photo-1571080648416-3fda23702c51?q=80&w=1000", // SouthPark area
  },
  {
    name: "Lake Norman Area",
    description: "Serving Huntersville, Cornelius, and Davidson",
    image: "https://images.unsplash.com/photo-1580483046931-aaba29b81601?q=80&w=1000", // Lake Norman
  },
];

export const ServiceAreas = () => {
  return (
    <div className="py-24 bg-accent">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div key={area.name} className="relative group overflow-hidden rounded-lg shadow-lg">
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