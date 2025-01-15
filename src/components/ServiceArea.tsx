import { MapPin } from "lucide-react";
import { memo } from "react";

interface ServiceAreaProps {
  name: string;
  description: string;
  image: string;
}

export const ServiceArea = memo(({ name, description }: ServiceAreaProps) => {
  return (
    <div 
      className="relative rounded-lg shadow-lg p-6 bg-white"
      role="region"
      aria-label={`Service area: ${name}`}
    >
      <div className="flex items-center gap-2 text-primary mb-2">
        <MapPin className="w-5 h-5 flex-shrink-0" />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
});

ServiceArea.displayName = "ServiceArea";