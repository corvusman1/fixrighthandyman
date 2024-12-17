import { MapPin } from "lucide-react";
import { memo } from "react";

interface ServiceAreaProps {
  name: string;
  description: string;
  image: string;
}

export const ServiceArea = memo(({ name, description, image }: ServiceAreaProps) => {
  return (
    <div 
      className="relative group overflow-hidden rounded-lg shadow-lg h-64"
      role="region"
      aria-label={`Service area: ${name}`}
    >
      <img
        src={image}
        alt={`${name} area`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 flex flex-col justify-end p-6">
        <div className="flex items-center gap-2 text-white mb-2">
          <MapPin className="w-5 h-5 flex-shrink-0" />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
});

ServiceArea.displayName = "ServiceArea";