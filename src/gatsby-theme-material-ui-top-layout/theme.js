import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = responsiveFontSizes(createTheme({
  typography: {
    h1: { fontSize: '3rem' },
    h2: { fontSize: '2.5rem' },
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.25rem' },
    h5: { fontSize: '1rem' },
    h6: { fontSize: '0.875rem' },

  },
}));

export default theme;
