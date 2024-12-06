import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    url: "/lovable-uploads/9643c678-0bfc-442e-a631-3a673bac146d.png",
    title: "TV Mounting",
    category: "TV Installation"
  },
  {
    url: "/lovable-uploads/35271171-bdd1-4f40-80dd-b94f58b7a365.png",
    title: "TV and Sound Bar Installation",
    category: "TV Installation"
  },
  {
    url: "/lovable-uploads/2bde28bd-a359-4e65-9ad3-78eb0c60da3f.png",
    title: "Bedroom Furniture Assembly",
    category: "Furniture Assembly"
  },
  {
    url: "/lovable-uploads/5dcb4c6c-cbcb-429a-9c97-9fc1caa3b587.png",
    title: "Garage Storage Installation",
    category: "Installation Services"
  },
  {
    url: "/lovable-uploads/806ebba4-28bc-4402-a406-a40035c076a8.png",
    title: "Door Installation",
    category: "General Repairs"
  }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredImages = filter
    ? galleryImages.filter(img => img.category === filter)
    : galleryImages;

  const handlePrevious = () => {
    setSelectedImage(current => 
      current === 0 ? filteredImages.length - 1 : current! - 1
    );
  };

  const handleNext = () => {
    setSelectedImage(current => 
      current === filteredImages.length - 1 ? 0 : current! + 1
    );
  };

  return (
    <div className="py-24 bg-white" id="gallery">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full ${
              filter === null ? 'bg-primary text-white' : 'bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('TV Installation')}
            className={`px-4 py-2 rounded-full ${
              filter === 'TV Installation' ? 'bg-primary text-white' : 'bg-gray-100'
            }`}
          >
            TV Installation
          </button>
          <button
            onClick={() => setFilter('Furniture Assembly')}
            className={`px-4 py-2 rounded-full ${
              filter === 'Furniture Assembly' ? 'bg-primary text-white' : 'bg-gray-100'
            }`}
          >
            Furniture Assembly
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.url}
              className="relative aspect-video cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};
