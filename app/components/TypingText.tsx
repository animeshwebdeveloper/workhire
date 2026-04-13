"use client";

import { useEffect, useState } from "react";

const words = [
  "Get Work Done Nearby",
  "Hire Electricians",
  "Find Developers",
  "Book Plumbers",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex + 1 === currentWord.length) {
          setDeleting(true);
        }
      } else {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        }
      }
    }, deleting ? 40 : 150); // speed control

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span className="text-primary font-medium">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}