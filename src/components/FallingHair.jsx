import React, { useEffect, useState } from 'react';

const HAIR_PATHS = [
  {
    path: "M 2,2 C 10,8 1.1,18 12,28 C 0.9,18 9.9,8 2,2 Z",
    rootX: 2,
    rootY: 2
  },
  {
    path: "M 18,2 C 2.1,6 18.1,15 4,23 C 3.9,15 17.9,6 18,2 Z",
    rootX: 18,
    rootY: 2
  },
  {
    path: "M 5,2 Q 15.1,12 5,23 Q 14.9,12 5,2 Z",
    rootX: 5,
    rootY: 2
  },
  {
    path: "M 12,2 C 4.1,10 16.1,16 8,28 C 7.9,16 3.9,10 12,2 Z",
    rootX: 12,
    rootY: 2
  }
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
      const opacity = 0.5 + Math.random() * 0.4; // 50% to 90% opacity
      const swayDuration = 4 + Math.random() * 4; // 4s to 8s sway
      const pathObj = HAIR_PATHS[pathIndex];

      return {
        id: i,
        startX,
        duration,
        delay,
        scale,
        path: pathObj.path,
        rootX: pathObj.rootX,
        rootY: pathObj.rootY,
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
            <circle
              cx={hair.rootX}
              cy={hair.rootY}
              r="0.8"
              fill="currentColor"
            />
            <path
              d={hair.path}
              fill="currentColor"
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
