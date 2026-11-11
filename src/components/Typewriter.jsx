import { useState, useEffect } from "react";

export default function Typewriter({
  prefix = "HELLO, I'M ",
  words = ["NAVEEN PRAKASH"],
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseDelay = 3500,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timer;

    if (!isDeleting && currentText === currentWord) {
      // Word is fully typed out, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && currentText === "") {
      // Word is fully deleted, move to next word and start typing
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, currentText.length - 1)
          : currentWord.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className="inline-flex items-center text-xs uppercase tracking-widest-luxury font-medium text-charcoal/70">
      {prefix && <span>{prefix}&nbsp;</span>}
      <span className="font-semibold text-charcoal tracking-widest-luxury">
        {currentText}
      </span>
      {/* Blinking luxury typewriter cursor */}
      <span className="inline-block w-[1.5px] h-3.5 bg-bronze ml-1 animate-pulse" />
    </span>
  );
}
