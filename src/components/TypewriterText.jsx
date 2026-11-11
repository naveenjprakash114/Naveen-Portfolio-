import { useState, useEffect } from "react";

export default function TypewriterText({
  words = ["NAVEEN PRAKASH", "NAVEEN PRAKASH J", "CREATIVE TECHNOLOGIST"],
  typingSpeed = 100,
  deletingSpeed = 45,
  pauseTime = 3200,
  className = "",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex % words.length];

    let timer;

    if (!isDeleting) {
      // Typing phase
      if (currentText.length < fullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Word complete, wait pauseTime before starting deletion
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting phase
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      {/* Editorial Luxury Blinking Cursor */}
      <span
        className="inline-block w-[2.5px] h-[1em] bg-bronze ml-1.5 animate-pulse align-middle"
        aria-hidden="true"
      />
    </span>
  );
}
