import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-charcoal text-cream shadow-lg border border-gold/30 flex items-center justify-center hover:bg-charcoal-soft hover:scale-105 active:scale-95 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 text-champagne" />
    </button>
  );
}
