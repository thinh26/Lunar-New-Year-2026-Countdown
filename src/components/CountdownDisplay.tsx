import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { CountdownTime } from '../hooks/useCountdown';

interface CountdownDisplayProps {
  timeLeft: CountdownTime;
}

const CountdownDisplay = ({ timeLeft }: CountdownDisplayProps) => {
  const { t } = useTranslation();
  const daysRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [daysRef, hoursRef, minutesRef, secondsRef];

    refs.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { scale: 1 },
          {
            scale: 1.1,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    if (secondsRef.current) {
      gsap.fromTo(
        secondsRef.current,
        { scale: 1.2, color: '#FFD700' },
        { scale: 1, color: '#FFFFFF', duration: 0.3, ease: 'back.out' }
      );
    }
  }, [timeLeft.seconds]);

  useEffect(() => {
    if (minutesRef.current && timeLeft.seconds === 0) {
      gsap.fromTo(
        minutesRef.current,
        { scale: 1.3, color: '#FFD700' },
        { scale: 1, color: '#FFFFFF', duration: 0.4, ease: 'back.out' }
      );
    }
  }, [timeLeft.minutes, timeLeft.seconds]);

  return (
    <Box
      className="countdown-display"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 3, sm: 4, md: 6, lg: 8 },
      }}
    >
      {/* Days */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          ref={daysRef}
          sx={{
            background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.54)) drop-shadow(0 0 40px rgba(212, 23, 10, 0.36))',
          }}
        >
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontSize: { xs: '6rem', sm: '4.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {String(timeLeft.days).padStart(2, '0')}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: '#FFD700',
            fontWeight: 600,
            fontSize: { xs: '1.1rem', sm: '1rem', md: '1.2rem' },
          }}
        >
          {t('countdown.days')}
        </Typography>
      </Box>

      {/* Separator between days and hours (Desktop only) */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { sm: '4.5rem', md: '5rem', lg: '6rem' },
            fontWeight: 800,
            background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            paddingBottom: { sm: '2rem', md: '2.5rem' },
            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.54)) drop-shadow(0 0 40px rgba(212, 23, 10, 0.36))',
          }}
        >
          :
        </Typography>
      </Box>

      {/* Hours, Minutes, Seconds - Mobile: In a row, Tablet+: Continue horizontal */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: { xs: 3, sm: 4, md: 6, lg: 8 },
        }}
      >
        {/* Hours */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            ref={hoursRef}
            sx={{
              background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.54)) drop-shadow(0 0 40px rgba(212, 23, 10, 0.36))',
            }}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5rem', lg: '6rem' },
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {String(timeLeft.hours).padStart(2, '0')}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#FFD700',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
            }}
          >
            {t('countdown.hours')}
          </Typography>
        </Box>

        {/* Separator between hours and minutes */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              paddingBottom: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.54)) drop-shadow(0 0 40px rgba(212, 23, 10, 0.36))',
            }}
          >
            :
          </Typography>
        </Box>

        {/* Minutes */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            ref={minutesRef}
            sx={{
              background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.54)) drop-shadow(0 0 40px rgba(212, 23, 10, 0.36))',
            }}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5rem', lg: '6rem' },
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {String(timeLeft.minutes).padStart(2, '0')}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#FFD700',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
              textAlign: 'center',
            }}
          >
            {t('countdown.minutes')}
          </Typography>
        </Box>

        {/* Separator between minutes and seconds */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5rem', lg: '6rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
              paddingBottom: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.54)) drop-shadow(0 0 40px rgba(212, 23, 10, 0.36))',
            }}
          >
            :
          </Typography>
        </Box>

        {/* Seconds */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            ref={secondsRef}
            sx={{
              background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.54)) drop-shadow(0 0 40px rgba(212, 23, 10, 0.36))',
            }}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5rem', lg: '6rem' },
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {String(timeLeft.seconds).padStart(2, '0')}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#FFD700',
              fontWeight: 600,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
            }}
          >
            {t('countdown.seconds')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CountdownDisplay;
