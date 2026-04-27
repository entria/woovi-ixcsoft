'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#133A6F',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;
