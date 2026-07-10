import React, { useEffect, useState } from 'react';

const HAIR_PATHS = [
  "M 2,2 C 10,8 1,18 12,28",
  "M 18,2 C 2,6 18,15 4,23",
  "M 5,2 Q 15,12 5,23",
  "M 12,2 C 4,10 16,16 8,28"
];

const HAIR_COLORS = [
  "#d4a853", // Site Accent Gold
  "#c9944a", // Caramel
  "#e8c97a", // Wheat
  "#b08244", // Medium Copper
  "#8f622b"  // Golden Brown
];

export default function FallingHair() {
  const [hairs, setHairs] = useState([]);

  useEffect(() => {
    // Generate 35 random hair threads
    const generatedHairs = Array.from({ length: 35 }).map((_, i) => {
      const startX = Math.random() * 100; // Left percentage
      const duration = 12 + Math.random() * 15; // 12s to 27s
      const delay = Math.random() * -25; // Negative delay so they start scattered immediately
      const scale = 0.5 + Math.random() * 0.8; // 0.5x to 1.3x size
      const pathIndex = Math.floor(Math.random() * HAIR_PATHS.length);
      const color = HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)];
      const opacity = 0.2 + Math.random() * 0.45; // 20% to 65% opacity
      const swayDuration = 4 + Math.random() * 4; // 4s to 8s sway

      return {
        id: i,
        startX,
        duration,
        delay,
        scale,
        path: HAIR_PATHS[pathIndex],
        color,
        opacity,
        swayDuration
      };
    });
    setHairs(generatedHairs);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hairs.map((hair) => (
        <div
          key={hair.id}
          className="absolute"
          style={{
            left: `${hair.startX}%`,
            top: '-50px',
            animation: `hair-fall ${hair.duration}s linear infinite`,
            animationDelay: `${hair.delay}s`,
            transform: `scale(${hair.scale})`,
            opacity: hair.opacity
          }}
        >
          <svg
            width="25"
            height="35"
            viewBox="0 0 25 35"
            fill="none"
            style={{
              color: hair.color,
              animation: `hair-sway ${hair.swayDuration}s ease-in-out infinite alternate`
            }}
          >
            <path
              d={hair.path}
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes hair-fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(540deg);
            opacity: 0;
          }
        }
        @keyframes hair-sway {
          0% {
            transform: translateX(-15px) rotate(-10deg);
          }
          100% {
            transform: translateX(15px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
}
