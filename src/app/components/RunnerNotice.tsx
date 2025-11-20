"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  notices: string[];
}

export default function NoticeRunner({ notices }: Props) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);

  // Auto-slide
  useEffect(() => {
    if (isPlaying && notices.length > 0) {
      intervalRef.current = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % notices.length);
      }, 3500);
      return () => {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
      };
    }
  }, [isPlaying, notices.length]);

  const next = () => {
    if (notices.length > 0) {
      setIndex((prev) => (prev + 1) % notices.length);
    }
  };

  const prev = () => {
    if (notices.length > 0) {
      setIndex((prev) => (prev - 1 + notices.length) % notices.length);
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="bg-green-800 text-white py-3 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        {/* Label */}
        <span className="bg-white text-green-800 text-xs md:text-sm px-3 py-1 rounded-md font-semibold">
          NOTICE
        </span>

        {/* Notice Text */}
        {notices.length > 0 && (
          <div className="flex-1 overflow-hidden">
            <motion.p
              key={index}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="text-sm md:text-base whitespace-nowrap"
            >
              {notices[index]}
            </motion.p>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
            disabled={notices.length === 0}
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={next}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
            disabled={notices.length === 0}
          >
            <ChevronRight size={16} />
          </button>

          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
            disabled={notices.length === 0}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
