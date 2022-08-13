import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#5F506B',
    },
    secondary: {
      main: '#76949F',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;