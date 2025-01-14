import { ServiceArea } from "./ServiceArea";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const areas = [
  {
    name: "Uptown Charlotte",
    description: "Serving the heart of Charlotte including Trade & Tryon, First Ward, and Fourth Ward",
    image: "https://images.unsplash.com/photo-1611605645802-c21be743c321?q=80&w=2070&auto=format&fit=crop",
    position: { lat: 35.2271, lng: -80.8431 }
  },
  {
    name: "South Charlotte",
    description: "Coverage throughout Ballantyne, SouthPark, and Myers Park",
    image: "https://images.unsplash.com/photo-1578762356925-f72517ce6dc4?q=80&w=2069&auto=format&fit=crop",
    position: { lat: 35.1487, lng: -80.8328 }
  },
  {
    name: "Lake Norman Area",
    description: "Serving Huntersville, Cornelius, and Davidson",
    image: "https://images.unsplash.com/photo-1572731422118-f4b3183fe1fa?q=80&w=2074&auto=format&fit=crop",
    position: { lat: 35.4875, lng: -80.8501 }
  },
];

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 35.2271,
  lng: -80.8431
};

export const ServiceAreas = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  return (
    <section className="py-24 bg-accent" id="service-areas">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve</h2>
        
        {/* Map Section */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              {areas.map((area) => (
                <Marker
                  key={area.name}
                  position={area.position}
                  onClick={() => setSelectedArea(area.name)}
                  title={area.name}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <ServiceArea key={area.name} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
};