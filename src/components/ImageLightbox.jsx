import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageLightbox({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onNavigate) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight" && onNavigate) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#24221F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar with Caption & Close Button */}
      <div
        className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between text-[#F8F5EF] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-xl">
          <p className="text-xs uppercase font-mono tracking-widest text-[#B7A58D]">
            Image {currentIndex + 1} of {images.length}
          </p>
          {currentItem.caption && (
            <p className="text-sm font-serif italic text-white/90 line-clamp-1 mt-0.5">
              {currentItem.caption}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors focus:outline-none"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Frame */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.url}
          alt={currentItem.caption || "Project gallery image"}
          className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />
      </div>

      {/* Previous & Next Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}

