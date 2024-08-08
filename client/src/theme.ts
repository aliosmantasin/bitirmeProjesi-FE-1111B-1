import { createTheme } from '@mui/material/styles';
import {  grey } from '@mui/material/colors';

const theme = createTheme({
  direction: 'rtl',

  palette: {
    primary: {
      main: '#222222', //black
    },
    secondary: {
      main: '#ffffff', //white #e22e2c
    },

    text: {
      primary: grey[700],
    },
  },




});

export default theme;
