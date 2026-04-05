import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  autoplayDelay?: number;
}

export const CoverFlowCarousel: React.FC<ImageGalleryProps> = ({
  images,
  autoplayDelay = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [images.length, isTransitioning]);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(goToNext, autoplayDelay);
    return () => clearInterval(interval);
  }, [isHovered, autoplayDelay, goToNext]);

  const currentImage = images[currentIndex];

  return (
    <div 
      className="relative w-full h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative flex-1 min-h-[200px] md:min-h-[280px] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
        {/* Image with fade transition */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 text-slate-800 dark:text-white" />
        </button>
        
        <button
          onClick={goToNext}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 text-slate-800 dark:text-white" />
        </button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white text-xs font-medium drop-shadow-lg truncate">
            {currentImage.alt}
          </p>
          {currentImage.category && (
            <span className="text-white/70 text-[10px] font-mono uppercase tracking-wider">
              {currentImage.category}
            </span>
          )}
        </div>
      </div>

      {/* Bottom: Dots + Counter */}
      <div className="flex items-center justify-between mt-3 px-1">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-4 h-1.5 bg-indigo-500' 
                  : 'w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 hover:bg-indigo-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
          <div className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-yellow-500' : 'bg-green-500 animate-pulse'}`} />
        </div>
      </div>
    </div>
  );
};
