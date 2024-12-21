"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Star {
  x: number;
  y: number;
  size: number;
}

export default function NotFoundPage() {
  const [stars, setStars] = useState<Star[]>([]);
  const router = useRouter();

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    }));
    setStars(newStars);
  }, []);

  const handleBackClick = (): void => {
    router.back();
  };

  return (
    <div className="py-[20px] w-full h-full">
      <div className="rounded-xl bg-gray-950 h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
        {/* Stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
        {/* Main content */}
        <div className="text-center z-10">
          <div className="p-8 rounded-lg max-w-md mx-auto">
            <h2 className="text-6xl sm:text-8xl font-black text-yellow-400 mb-6">
              DON&apos;T
            </h2>
            <h2 className="text-6xl sm:text-8xl font-black text-yellow-400 mb-6">
              PANIC
            </h2>
            <div className="space-y-6 flex flex-col justify-between">
              <p className="text-gray-200 font-medium sm:text-lg">
                Uh-oh, looks like the Vogons demolished this page to construct a
                hyperspace bypass.
              </p>
              <button
                className="bg-red-500 text-white sm:text-lg p-2 rounded-xl"
                onClick={handleBackClick}
              >
                Return to Familiar Galactic Coordinates
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes twinkle {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
          }
          @keyframes hover {
            0%,
            100% {
              transform: translateY(0) rotate(45deg);
            }
            50% {
              transform: translateY(-10px) rotate(45deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
