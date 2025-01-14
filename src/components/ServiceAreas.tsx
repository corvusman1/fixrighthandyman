import { ServiceArea } from "./ServiceArea";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngExpression } from 'leaflet';
import { useState } from 'react';

const areas = [
  {
    name: "Uptown Charlotte",
    description: "Serving the heart of Charlotte including Trade & Tryon, First Ward, and Fourth Ward",
    image: "https://images.unsplash.com/photo-1611605645802-c21be743c321?q=80&w=2070&auto=format&fit=crop",
    position: [35.2271, -80.8431] as LatLngExpression
  },
  {
    name: "South Charlotte",
    description: "Coverage throughout Ballantyne, SouthPark, and Myers Park",
    image: "https://images.unsplash.com/photo-1578762356925-f72517ce6dc4?q=80&w=2069&auto=format&fit=crop",
    position: [35.1487, -80.8328] as LatLngExpression
  },
  {
    name: "Lake Norman Area",
    description: "Serving Huntersville, Cornelius, and Davidson",
    image: "https://images.unsplash.com/photo-1572731422118-f4b3183fe1fa?q=80&w=2074&auto=format&fit=crop",
    position: [35.4875, -80.8501] as LatLngExpression
  },
];

// Fix for the default marker icon in react-leaflet
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const ServiceAreas = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const center: LatLngExpression = [35.2271, -80.8431]; // Charlotte center

  return (
    <section className="py-24 bg-accent" id="service-areas">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve</h2>
        
        {/* Map Section */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
          <MapContainer 
            center={center}
            zoom={10} 
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {areas.map((area) => (
              <Marker 
                key={area.name}
                position={area.position}
                icon={defaultIcon}
                eventHandlers={{
                  click: () => setSelectedArea(area.name),
                }}
              >
                <Popup>
                  <div className="font-semibold">{area.name}</div>
                  <div className="text-sm">{area.description}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <ServiceArea 
              key={area.name} 
              name={area.name}
              description={area.description}
              image={area.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};