import { useState } from "react";
import { Camera, Image as ImageIcon } from "lucide-react";

export default function EditorialImage({
  src,
  alt = "Editorial visual",
  className = "",
  aspectRatio = "aspect-[4/5]",
  showSlotHint = false,
  slotPath = "",
  overlayText = "",
  priority = false,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#F0EADF] border border-[#B7A58D]/30 transition-all duration-500 group ${aspectRatio} ${className}`}
    >
      {!hasError && src ? (
        <>
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03] ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Subtle loading shimmer before load */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#E9DDCB]/40 animate-pulse flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-muted/70 font-mono">Loading image...</span>
            </div>
          )}
        </>
      ) : (
        /* Editorial Fallback Placeholder */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F8F5EF] via-[#E9DDCB]/40 to-[#F0EADF]">
          <div className="w-12 h-12 rounded-full bg-[#FFFFFF]/80 border border-[#B7A58D]/30 flex items-center justify-center text-[#89847D] mb-3 shadow-sm">
            <Camera className="w-5 h-5 stroke-[1.5]" />
          </div>
          <p className="text-sm font-serif italic text-charcoal/90 mb-1">{alt}</p>
          {slotPath && (
            <span className="inline-block mt-2 px-2.5 py-1 text-[11px] font-mono tracking-tight text-[#89847D] bg-white/70 border border-[#B7A58D]/25 rounded-md">
              {slotPath}
            </span>
          )}
          {showSlotHint && (
            <p className="text-[10px] text-muted tracking-wider uppercase mt-2">
              Ready for high-res upload
            </p>
          )}
        </div>
      )}

      {/* Optional Editorial Tag Overlay */}
      {overlayText && (
        <div className="absolute bottom-3 left-3 bg-[#24221F]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase text-[#F8F5EF] border border-[#B7A58D]/30 pointer-events-none">
          {overlayText}
        </div>
      )}

      {/* Subtle Fine Inner Border Accent */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#24221F]/5 group-hover:ring-[#B7A58D]/40 transition-all duration-300" />
    </div>
  );
}

