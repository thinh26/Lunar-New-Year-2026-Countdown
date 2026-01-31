import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Container, CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import theme from './theme/theme';
import { useCountdown } from './hooks/useCountdown';
import CountdownDisplay from './components/CountdownDisplay';
import Fireworks from './components/Fireworks';
import FireHorseZodiac from './components/FireHorseZodiac';
import FortuneMessages from './components/FortuneMessages';
import BlessingFeature from './components/BlessingFeature';
import './styles/App.scss';

function App() {
  const { t } = useTranslation();
  const timeLeft = useCountdown();
  const [showFinale, setShowFinale] = useState(false);

  useEffect(() => {
    if (timeLeft.isFinished && !showFinale) {
      setShowFinale(true);
    }
  }, [timeLeft.isFinished, showFinale]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-container">
        <Fireworks isFinale={showFinale} />
        {/* <LanguageSwitcher /> */}

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 800,
                mb: 4,
                background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 50%, #D4170A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
              }}
            >
              {t('app.title')}
            </Typography>

            {showFinale ? (
              <Box sx={{ textAlign: 'center', my: 8 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #D4170A 0%, #FFD700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 2,
                  }}
                >
                  {t('app.finalMessage')}
                </Typography>
              </Box>
            ) : (
              <CountdownDisplay timeLeft={timeLeft} />
            )}

            <FireHorseZodiac />

            <FortuneMessages />

            <BlessingFeature />

            <Box sx={{ textAlign: 'center', mt: 6, pb: 4 }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#FFFFFF',
                  opacity: 0.7,
                }}
              >
                {t('app.countdownTo')}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
