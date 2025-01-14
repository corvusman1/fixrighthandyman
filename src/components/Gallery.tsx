import { useState, useCallback, memo } from "react";
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

const GalleryImage = memo(({ image, index, onClick }: { 
  image: typeof galleryImages[0], 
  index: number, 
  onClick: (index: number) => void 
}) => (
  <div
    className="relative aspect-video cursor-pointer group"
    onClick={() => onClick(index)}
  >
    <img
      src={image.url}
      alt={image.title}
      className="w-full h-full object-cover rounded-lg transition-transform group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{image.title}</h3>
        <p className="text-sm">{image.category}</p>
      </div>
    </div>
  </div>
));

GalleryImage.displayName = "GalleryImage";

const FilterButton = memo(({ active, onClick, children }: {
  active: boolean,
  onClick: () => void,
  children: React.ReactNode
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition-colors ${
      active ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'
    }`}
  >
    {children}
  </button>
));

FilterButton.displayName = "FilterButton";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredImages = filter
    ? galleryImages.filter(img => img.category === filter)
    : galleryImages;

  const handlePrevious = useCallback(() => {
    setSelectedImage(current => 
      current === 0 ? filteredImages.length - 1 : current! - 1
    );
  }, [filteredImages.length]);

  const handleNext = useCallback(() => {
    setSelectedImage(current => 
      current === filteredImages.length - 1 ? 0 : current! + 1
    );
  }, [filteredImages.length]);

  const handleFilterChange = useCallback((newFilter: string | null) => {
    setFilter(newFilter);
    setSelectedImage(null);
  }, []);

  return (
    <div className="py-24 bg-white" id="gallery">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <FilterButton
            active={filter === null}
            onClick={() => handleFilterChange(null)}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === 'TV Installation'}
            onClick={() => handleFilterChange('TV Installation')}
          >
            TV Installation
          </FilterButton>
          <FilterButton
            active={filter === 'Furniture Assembly'}
            onClick={() => handleFilterChange('Furniture Assembly')}
          >
            Furniture Assembly
          </FilterButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={image.url}
              image={image}
              index={index}
              onClick={setSelectedImage}
            />
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={handlePrevious}
              className="absolute left-4 text-white hover:text-gray-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-gray-300"
              aria-label="Next image"
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