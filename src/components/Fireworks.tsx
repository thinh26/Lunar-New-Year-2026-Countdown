import { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

interface Particle {
  id: string;
  x: number;
  y: number;
  color: string;
}

interface FireworksProps {
  isFinale?: boolean;
}

const COLORS = [
  "#D4170A",
  "#FFD700",
  "#FF4842",
  "#FFED4E",
  "#FF1493",
  "#00CED1",
];

const Fireworks = ({ isFinale = false }: FireworksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const createFirework = useCallback(
    (x: number, y: number) => {
      const particleCount = isFinale ? 50 : 30;
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: `${Date.now()}-${i}`,
          x,
          y,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }

      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => !newParticles.find((np) => np.id === p.id)),
        );
      }, 2000);
    },
    [isFinale],
  );

  const launchFirework = useCallback(() => {
    const x = 20 + Math.random() * 60;
    const y = 20 + Math.random() * 40;
    createFirework(x, y);
  }, [createFirework]);

  useEffect(() => {
    if (isFinale) {
      const finaleInterval = setInterval(launchFirework, 300);
      setTimeout(() => {
        clearInterval(finaleInterval);
      }, 10000);
      return () => clearInterval(finaleInterval);
    } else {
      intervalRef.current = setInterval(launchFirework, 4000);
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isFinale, launchFirework]);

  useEffect(() => {
    particles.forEach((particle) => {
      const element = document.getElementById(particle.id);
      if (element) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        gsap.fromTo(
          element,
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          },
          {
            x: tx,
            y: ty,
            scale: 0,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
          },
        );
      }
    });
  }, [particles]);

  return (
    <Box ref={containerRef} className="fireworks">
      {particles.map((particle) => (
        <Box
          key={particle.id}
          id={particle.id}
          sx={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
            pointerEvents: "none",
          }}
        />
      ))}
    </Box>
  );
};

export default Fireworks;
