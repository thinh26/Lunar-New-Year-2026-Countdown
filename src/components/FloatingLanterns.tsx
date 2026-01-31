import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

const LANTERN_COUNT = 8;

interface Lantern {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingLanterns = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lanternsRef = useRef<Lantern[]>([]);

  useEffect(() => {
    lanternsRef.current = Array.from({ length: LANTERN_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 40 + Math.random() * 40,
    }));

    const lanternElements = containerRef.current?.querySelectorAll('.lantern');

    lanternElements?.forEach((lantern, index) => {
      const lanternData = lanternsRef.current[index];

      gsap.set(lantern, {
        left: `${lanternData.x}%`,
        bottom: '-100px',
      });

      const timeline = gsap.timeline({ repeat: -1, delay: lanternData.delay });

      timeline.to(lantern, {
        bottom: '110%',
        duration: lanternData.duration,
        ease: 'none',
      });

      gsap.to(lantern, {
        x: `${Math.sin(index) * 30}px`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(lantern, {
        rotation: Math.sin(index) * 10,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      const glowElement = lantern.querySelector('.lantern-glow');
      if (glowElement) {
        gsap.to(glowElement, {
          opacity: 0.6 + Math.random() * 0.4,
          duration: 1 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });
  }, []);

  return (
    <Box ref={containerRef} className="floating-lanterns">
      {lanternsRef.current.map((lantern) => (
        <Box
          key={lantern.id}
          className="lantern"
          sx={{
            position: 'absolute',
            width: `${lantern.size}px`,
            height: `${lantern.size * 1.4}px`,
            pointerEvents: 'none',
          }}
        >
          <Box
            className="lantern-body"
            sx={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(180deg, #D4170A 0%, #8B0000 50%, #D4170A 100%)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              position: 'relative',
              boxShadow: '0 0 20px rgba(212, 23, 10, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-8%',
                left: '35%',
                width: '30%',
                height: '10%',
                background: '#8B4513',
                borderRadius: '50%',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8%',
                left: '30%',
                width: '40%',
                height: '15%',
                background: '#FFD700',
                borderRadius: '50%',
                boxShadow: '0 0 10px #FFD700',
              },
            }}
          >
            <Box
              className="lantern-glow"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(8px)',
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FloatingLanterns;
