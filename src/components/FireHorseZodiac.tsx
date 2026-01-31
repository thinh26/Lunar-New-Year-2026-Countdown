import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const FireHorseZodiac = () => {
  const { t } = useTranslation();
  const horseRef = useRef<HTMLDivElement>(null);
  const flamesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (horseRef.current) {
      gsap.to(horseRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(horseRef.current, {
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (flamesRef.current) {
      const flames = flamesRef.current.querySelectorAll('.flame');
      flames.forEach((flame, index) => {
        gsap.to(flame, {
          scale: 1.2,
          opacity: 0.6,
          duration: 0.5 + index * 0.1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }
  }, []);

  return (
    <Box className="fire-horse-zodiac" sx={{ textAlign: 'center', my: 4 }}>
      <Box sx={{ position: 'relative', display: 'inline-block' }}>
        <Box
          ref={flamesRef}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              className="flame"
              sx={{
                position: 'absolute',
                width: '40px',
                height: '60px',
                background: 'radial-gradient(ellipse at bottom, #FFD700 0%, #FF4842 50%, transparent 70%)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                filter: 'blur(4px)',
                left: `${10 + i * 12}%`,
                bottom: '10%',
                opacity: 0.8,
              }}
            />
          ))}
        </Box>

        <Box
          ref={horseRef}
          sx={{
            position: 'relative',
            zIndex: 1,
            fontSize: { xs: '80px', sm: '100px', md: '120px' },
            textShadow: '0 0 30px #FFD700, 0 0 60px #D4170A',
            filter: 'drop-shadow(0 0 20px rgba(212, 23, 10, 0.8))',
          }}
        >
          🐴
        </Box>
      </Box>

      <Typography
        variant="h3"
        sx={{
          mt: 2,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 50%, #D4170A 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none',
          px: 2,
        }}
      >
        {t('zodiac.title')}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: '#FFFFFF',
          opacity: 0.9,
          mt: 2,
          maxWidth: '600px',
          mx: 'auto',
          px: 2,
        }}
      >
        {t('zodiac.description')}
      </Typography>
    </Box>
  );
};

export default FireHorseZodiac;
