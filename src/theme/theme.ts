import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D4170A',
      light: '#FF4842',
      dark: '#9B0000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFED4E',
      dark: '#C7A600',
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A0505',
    },
    error: {
      main: '#FF5252',
    },
    warning: {
      main: '#FFA726',
    },
    info: {
      main: '#29B6F6',
    },
    success: {
      main: '#66BB6A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFD700',
    },
  },
  typography: {
    fontFamily: '"Google Sans Flex", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: 500,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
      fontWeight: 500,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
      fontWeight: 500,
      letterSpacing: '0.0075em',
    },
    body1: {
      fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
      letterSpacing: '0.00938em',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 'clamp(0.8125rem, 1.25vw, 0.875rem)',
      letterSpacing: '0.01071em',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
          fontWeight: 600,
          padding: '12px 24px',
          boxShadow: '0 4px 16px rgba(212, 23, 10, 0.3)',
          transition: 'all 0.3s ease',
          '@media (max-width: 600px)': {
            padding: '10px 20px',
          },
          '&:hover': {
            boxShadow: '0 6px 24px rgba(212, 23, 10, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          background: 'linear-gradient(135deg, rgba(26, 5, 5, 0.9) 0%, rgba(10, 10, 10, 0.8) 100%)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
          },
          '& .MuiInputLabel-root': {
            fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
        },
      },
    },
  },
});

export default theme;
