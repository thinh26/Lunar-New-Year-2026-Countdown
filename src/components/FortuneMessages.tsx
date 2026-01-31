import { useEffect, useState, useRef } from 'react';
import { Box, Typography, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const FortuneMessages = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const fortunes = t('fortune.messages', { returnObjects: true }) as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => {
            setCurrentIndex((prev) => (prev + 1) % fortunes.length);
            gsap.fromTo(
              cardRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.5 }
            );
          },
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [fortunes.length]);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.95 },
        {
          scale: 1.02,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    }
  }, []);

  return (
    <Box className="fortune-messages" sx={{ my: 4, px: 2 }}>
      <Card
        ref={cardRef}
        sx={{
          maxWidth: '700px',
          mx: 'auto',
          p: { xs: 2, sm: 3, md: 4 },
          background: 'linear-gradient(135deg, rgba(212, 23, 10, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 215, 0, 0.3)',
          boxShadow: '0 8px 32px rgba(212, 23, 10, 0.3)',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: '#FFD700',
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          {t('fortune.title')}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: '#FFFFFF',
            lineHeight: 1.6,
            px: 1,
          }}
        >
          {fortunes[currentIndex]}
        </Typography>
      </Card>
    </Box>
  );
};

export default FortuneMessages;
