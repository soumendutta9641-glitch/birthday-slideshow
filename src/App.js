import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BirthdayRoastForSamu() {
  const slides = [
    { type: "text", content: "Oye Samu… Happy Birthday re pagol! 🥳😂" },
    { type: "image", src: "IMG-20240710-WA0013 - Copy.jpg", caption: "Chhoto belar hero look re dada 🤣" },
    { type: "text", content: "Ki obostha re dada? Mala ghurau naki?" },
    { type: "image", src: "IMG-20240710-WA0014 - Copy.jpg", caption: "Eta ki hairstyle chilo bol to? 😂" },
    { type: "text", content: "Sotti tui ekta pagol… ekhon just upgrade hoyechis!" },
    { type: "image", src: "IMG-20250816-WA0014 - Copy.jpg", caption: "Tor mojar smile ekhono same ache re 😎" },
    { type: "text", content: "Gali chara amader bondhutto complete hobe na 🤬😂" },
    { type: "image", src: "IMG-20250816-WA0016.jpg", caption: "Dekh re, mota hoye gechish toktu 😏" },
    { type: "text", content: "Mone ache oi din… jaadui memory chhilo!" },
    { type: "image", src: "IMG-20250816-WA0017.jpg", caption: "Full on hero pose, kintu IQ 0 🤣" },
    { type: "image", src: "IMG-20250816-WA0018.jpg", caption: "Chhobi dekhlei bojha jay tui asli pagol!" },
    { type: "text", content: "Party ta kobe dibi bol 😏🍻" },
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="p-6 text-center"
        >
          {slide.type === "text" && (
            <p className="text-xl font-bold text-gray-800 whitespace-pre-line">
              {slide.content}
            </p>
          )}
          {slide.type === "image" && (
            <div>
              <img
                src={slide.src}
                alt="samu memory"
                className="mx-auto rounded-xl shadow-lg border-4 border-white"
              />
              <p className="mt-3 text-lg text-gray-700 font-medium">
                {slide.caption}
              </p>
            </div>
          )}
        </motion.div>

        {/* Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full shadow"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            className="px-4 py-2 bg-green-600 text-white rounded-full shadow"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
