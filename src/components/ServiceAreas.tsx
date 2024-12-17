import { ServiceArea } from "./ServiceArea";

const areas = [
  {
    name: "Uptown Charlotte",
    description: "Serving the heart of Charlotte including Trade & Tryon, First Ward, and Fourth Ward",
    image: "/lovable-uploads/32518525-eb17-46b2-aa32-33e7ceb7bee0.png",
  },
  {
    name: "South Charlotte",
    description: "Coverage throughout Ballantyne, SouthPark, and Myers Park",
    image: "/lovable-uploads/35dd1983-c349-4723-a2ab-51c28151e21f.png",
  },
  {
    name: "Lake Norman Area",
    description: "Serving Huntersville, Cornelius, and Davidson",
    image: "/lovable-uploads/9de0834b-309d-4a61-b654-57a8c75e8e72.png",
  },
];

export const ServiceAreas = () => {
  return (
    <section className="py-24 bg-accent" id="service-areas">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <ServiceArea key={area.name} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
};