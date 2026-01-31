import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

const AnimatedDragon = () => {
  const dragonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dragonRef.current) return;

    const animateDragon = () => {
      const timeline = gsap.timeline({
        onComplete: () => {
          setTimeout(animateDragon, 15000);
        },
      });

      timeline
        .set(dragonRef.current, {
          left: '-200px',
          top: '20%',
          opacity: 1,
        })
        .to(dragonRef.current, {
          left: '110%',
          top: '60%',
          duration: 12,
          ease: 'sine.inOut',
        })
        .to(
          dragonRef.current,
          {
            y: '+=30',
            duration: 1.5,
            repeat: 7,
            yoyo: true,
            ease: 'sine.inOut',
          },
          0
        )
        .to(
          dragonRef.current,
          {
            rotation: '+=15',
            duration: 2,
            repeat: 5,
            yoyo: true,
            ease: 'sine.inOut',
          },
          0
        );
    };

    animateDragon();
  }, []);

  return (
    <Box
      ref={dragonRef}
      className="animated-dragon"
      sx={{
        position: 'fixed',
        width: '200px',
        height: '100px',
        pointerEvents: 'none',
        zIndex: 100,
        opacity: 0,
      }}
    >
      <svg
        width="200"
        height="100"
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dragonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4170A" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D4170A" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 10 50 Q 30 30, 50 50 T 90 50 T 130 50 T 170 50"
          stroke="url(#dragonGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        <circle cx="180" cy="50" r="15" fill="url(#dragonGradient)" filter="url(#glow)" />
        <circle cx="185" cy="45" r="4" fill="#FFD700" />
        <circle cx="185" cy="55" r="4" fill="#FFD700" />

        <path
          d="M 195 50 L 200 45 L 200 55 Z"
          fill="#D4170A"
          filter="url(#glow)"
        />

        <path
          d="M 180 35 L 185 30 L 190 35"
          stroke="#FFD700"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 180 65 L 185 70 L 190 65"
          stroke="#FFD700"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        <circle cx="50" cy="45" r="6" fill="url(#dragonGradient)" opacity="0.8" />
        <circle cx="90" cy="45" r="6" fill="url(#dragonGradient)" opacity="0.8" />
        <circle cx="130" cy="45" r="6" fill="url(#dragonGradient)" opacity="0.8" />

        <path
          d="M 40 70 Q 50 75, 60 70"
          stroke="#FFD700"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 80 70 Q 90 75, 100 70"
          stroke="#FFD700"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 120 70 Q 130 75, 140 70"
          stroke="#FFD700"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </Box>
  );
};

export default AnimatedDragon;
