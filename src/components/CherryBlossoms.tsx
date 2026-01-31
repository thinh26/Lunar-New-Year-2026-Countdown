import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import gsap from 'gsap';

const PETAL_COUNT = 30;

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const CherryBlossoms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<Petal[]>([]);

  useEffect(() => {
    petalsRef.current = Array.from({ length: PETAL_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 8,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * 360,
    }));

    const petalElements = containerRef.current?.querySelectorAll('.petal');

    petalElements?.forEach((petal, index) => {
      const petalData = petalsRef.current[index];

      gsap.set(petal, {
        left: `${petalData.x}%`,
        top: '-50px',
        rotation: petalData.rotation,
      });

      const timeline = gsap.timeline({ repeat: -1, delay: petalData.delay });

      timeline.to(petal, {
        top: '110%',
        duration: petalData.duration,
        ease: 'none',
      });

      gsap.to(petal, {
        x: `${Math.sin(index * 0.5) * 100}px`,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(petal, {
        rotation: `+=${360 + Math.random() * 360}`,
        duration: 4 + Math.random() * 4,
        repeat: -1,
        ease: 'none',
      });
    });
  }, []);

  return (
    <Box ref={containerRef} className="cherry-blossoms">
      {petalsRef.current.map((petal) => (
        <Box
          key={petal.id}
          className="petal"
          sx={{
            position: 'absolute',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: 'radial-gradient(ellipse at center, #FFB7C5 0%, #FF69B4 50%, #FF1493 100%)',
              borderRadius: '50% 0% 50% 0%',
              opacity: 0.7,
              boxShadow: '0 0 8px rgba(255, 105, 180, 0.6)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(90deg)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(ellipse at center, #FFB7C5 0%, #FF69B4 50%, #FF1493 100%)',
                borderRadius: '50% 0% 50% 0%',
                opacity: 0.8,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CherryBlossoms;
