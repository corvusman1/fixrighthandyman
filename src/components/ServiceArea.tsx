import { MapPin } from "lucide-react";

interface ServiceAreaProps {
  name: string;
  description: string;
  image: string;
}

export const ServiceArea = ({ name, description, image }: ServiceAreaProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
        <div className="flex items-center gap-2 text-white mb-2">
          <MapPin className="w-5 h-5" />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-white/90 text-sm">{description}</p>
      </div>
    </div>
  );
};