"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function InteractiveSkills() {
  const [progress, setProgress] = useState(0);

  // 🔥 20 fixed positions around box (px offsets)
  const icons = [
    { x: -600, y: -200 }, { x: -500, y: -50 }, { x: -700, y: -60 },
    { x: -600, y: 80 }, { x: 500, y: 40 }, { x: 620, y: 100 },

    { x: 600, y: -80 }, { x: 450, y: -200 },

    { x: -400, y: -200 }, { x: -250, y: -250 }, { x: -100, y: -200 },
    { x: 100, y: -200 }, { x: 250, y: -250 }, { x: 480, y: 200 },

    { x: -500, y: 200 }, { x: -350, y: 230 }, { x: -200, y: 250 },
    { x: -50, y: 220 }, { x: 130, y: 250 },

    { x: 300, y: 220 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skill-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let value = (windowHeight - rect.top) / windowHeight;
      value = Math.max(0, Math.min(1, value));

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skill-section"
      className="relative isolate py-50 overflow-hidden 
     "
    >
      {/* 🔥 CENTER BOX */}
      <div className="max-w-2xl mx-auto text-center relative z-20">
        <div className="p-10 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-semibold">
            Recruiting?
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Advertise your jobs to millions of users and search skilled workers instantly.
          </p>

          <button className="mt-5 bg-primary cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-500">
            Start Recruiting Now
          </button>
        </div>
      </div>

      {/* 🔥 ICONS */}
      {icons.map((pos, i) => {
        // 👉 subtle inward movement (only 20–25%)
        const moveFactor = 0.25 * progress;

        const x = pos.x * (1 - moveFactor);
        const y = pos.y * (1 - moveFactor);

        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 z-10"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${0.9 + progress * 0.1})`,
              transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div
              className={`flex items-center justify-center 
                ${i % 3 === 0 ? "w-20 h-20" : "w-14 h-14"}
                bg-white dark:bg-gray-900 
                border border-gray-200 dark:border-gray-700 
                rounded-xl shadow-md`}
            >
              <Image
                src="/images/work-hire-logo.png"
                alt="skill"
                width={30}
                height={30}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}