import { createTheme } from '@mui/material/styles';
import './theme.css';

let theme = createTheme({
  palette: {
    primary: {
      main: '#000E9C',
    },
    secondary: {
      main: '#05CC19',
    },
  },typography: {
    fontFamily: ['Roboto Condensed'],
    h1 : {
        fontSize : '40px',
        // lineHeight : '72px',
        fontWeight : '700',
        fontFamily: ['Roboto Condensed'],
        },
    h2 : {
        fontSize : '26px',
        fontWeight : '600',
        fontFamily: ['Roboto Condensed'],  
    },
    h3:{
      fontSize : '17px',
      fontFamily: ['Roboto Condensed'],
      fontWeight : '600',
    },
    
    h4:{
      fontSize : '15px',
      fontFamily: ['Roboto Condensed'],
      // fontWeight : '600',
    },
    p: {
        fontSize : '14px',
        fontFamily: ['Roboto Condensed'],
        letterSpacing : '1px'
    }
  },
});


theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default theme;