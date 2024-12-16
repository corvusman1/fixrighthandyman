import { MapPin } from "lucide-react";

const areas = [
  {
    name: "Uptown Charlotte",
    description: "Serving the heart of Charlotte including Trade & Tryon, First Ward, and Fourth Ward",
    image: "https://images.unsplash.com/photo-1611578735000-6c5f7ca16b86", // Beautiful shot of Charlotte skyline at sunset
  },
  {
    name: "South Charlotte",
    description: "Coverage throughout Ballantyne, SouthPark, and Myers Park",
    image: "https://images.unsplash.com/photo-1567198602547-c29f8cd7dbe3", // SouthPark area with modern architecture
  },
  {
    name: "Lake Norman Area",
    description: "Serving Huntersville, Cornelius, and Davidson",
    image: "https://images.unsplash.com/photo-1505232530843-7e94d7faac25", // Beautiful Lake Norman waterfront
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