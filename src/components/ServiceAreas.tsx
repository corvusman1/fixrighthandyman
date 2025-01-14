import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const serviceLocations = [
  { name: "Downtown", position: [34.0522, -118.2437] },
  { name: "Beverly Hills", position: [34.0736, -118.4004] },
  { name: "Santa Monica", position: [34.0195, -118.4912] },
];

export const ServiceAreas = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Service Areas</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div style={{ height: "500px", width: "100%" }}>
              <MapContainer
                center={[34.0522, -118.2437]}
                zoom={11}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {serviceLocations.map((location, index) => (
                  <Marker key={index} position={location.position as [number, number]}>
                    <Popup>{location.name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Areas We Serve</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceLocations.map((location, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{location.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};