import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images: string[];
}

export const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={images[currentIndex]}
          alt={`Produto ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          {currentIndex + 1}/{images.length}
        </div>

        {/* Pagination dots */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
