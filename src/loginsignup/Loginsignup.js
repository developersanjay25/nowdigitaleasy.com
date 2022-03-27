import Login from './Login'
import { Button, createTheme, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import './loginsignup.css'
import { ThemeProvider } from '@emotion/react';
import Signup from './signup';
import Cart2 from '../order/Cart-2';



const theme = createTheme({
  palette: {
      primary:{
          main : '#00185e '
      },
    secondary: {
          main: '#0050d7'
    }
  },
  typography : {
    fontFamily : 'Source Sans Pro,Segoe UI,sans-serif',
    fontWeight : '500',
    color: '#00185e',
    h4 : {
      fontWeight : '500'
    },
    h5 : {
      fontWeight : '500'
    }
  }
});
  


function LoginSignup() {

  const [loginorsignup, setLoginorSugnup] = useState('login');

  return (
    <ThemeProvider theme={theme}>
    <div className='login-signup'>
    <br />
    
    <Grid container justifyContent='center' spacing={5}>
      <Grid item md={7} sm={6} xs={12} className='login-signup-container'>
      <Button style={{borderBottom : (loginorsignup == 'signup') ? '2px solid blue' : 'none',borderRadius:'0px',fontSize:'20px',padding:'5px 50px'}} onClick={() => setLoginorSugnup('signup')}>Signup</Button>
      <Button style={{borderBottom : (loginorsignup == 'login') ? '2px solid blue' : 'none',borderRadius:'0px',fontSize:'20px'}} onClick={() => setLoginorSugnup('login')}>login</Button>
  
      {loginorsignup=='login' ? <Login /> : <Signup />}
    </Grid>
    
    <Grid item md={4} sm={6} xs={12}>
      <br />
      <Cart2 />
      <br />
    </Grid>
    
    </Grid>
    {/* <Signup /> */}
  </div>
  </ThemeProvider>
  )
}

export default LoginSignup