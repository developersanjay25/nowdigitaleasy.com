import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import './footer.css'
import logo from '../images/logo.png'
import * as icons from '@mui/icons-material';
import visa from '../images/VISA.png';
import rupay from '../images/Rupay.png';
import Mastercard from '../images/Mastercard.png';
import theme from '../theme'
import { ThemeProvider } from '@mui/private-theming';

function Footer() {
  return (
    <ThemeProvider theme={theme}>
    <div className='footer'>
        <div >
            <Grid container alignItems='center' justifyContent='left' className='helptab'>

            <Grid item md={4} sm={12} xs={12}>
            <Typography variant='h2' className='help-head' style={{letterSpacing:'3px'}}>24/7 Customer Care</Typography>
            <Typography variant='h3'>Get expert advice anytime for anything you need</Typography>
            </Grid>

            <div className='sub-cat'>    
            <a href="tel:+919876543210" className='icons'><icons.PhoneAndroid  className='icons'/></a>

            <div className='help-head-content'>
            <Typography className='heading' style={{letterSpacing:'3px'}}>Phone</Typography>
            <Typography variant='head2'>Us Anytime</Typography>
            </div>

            </div>
            
            <div className='sub-cat'>
            <a href="tel:+919894111975" className='icons'><icons.ChatOutlined className='icons'/></a>
            
            <div className='help-head-content'>
            <Typography className='heading' style={{letterSpacing:'3px'}}>Chat</Typography>
            <Typography variant='head2'>Live with Us</Typography>
            </div>

            </div>

            <div className='sub-cat'>
            <a href="mailto:digital@nowdigitaleasy.com" className='icons'><icons.EmailOutlined className='icons'/></a>
            <div className='help-head-content'>
            <Typography className='heading' style={{letterSpacing:'3px'}}>Email</Typography>
            <Typography variant='head2'>Advanced Support</Typography>
            </div>
            </div>
            </Grid>
        </div>

        <div className='black-footer'>
 
            <br />

            <div >

            <Grid container justifyContent='center'>

            <Grid item md={4} sm={9} xs={9} padding={2} paddingLeft={0}>
            <img src={logo} style={{height:'73px'}}/>
            <br /><Typography variant='p'>We are a web hosting company with a mission to help everyone who goes online succeed.</Typography>
            <Typography variant='p'>We accomplish this by continuously developing server technology, giving</Typography>
            <Typography variant='p'>expert assistance, and ensuring a flawless online website hosting experience.</Typography>
           
            <div className='payment'>
                    <img src={visa} className='payment-icons'/>
                    <img src={rupay} className='payment-icons'/>
                    <img src={Mastercard} className='payment-icons'/>
            </div>

            </Grid>

            <Grid item md={8} sm={12} xs={12} className='all-footer'>
                
            <div className='vertical-list'>
                <Typography variant='h3' gutterBottom>Company</Typography>
              
                <li><Typography onClick={() => window.location.href = '/about/'} variant='h4'>About</Typography></li>
                <li><Typography onClick={() => window.location.href = 'https://nowdigitaleasy.com/blog/'} variant='h4'>Blog</Typography></li>
                <li><Typography  onClick={() => window.location.href = '/privacy-policy/'} variant='h4'>Privacy Policy</Typography></li>
                <li><Typography  onClick={() => window.location.href = '/termsandconditions'} variant='h4' >Terms and Condition</Typography></li>        
            </div>



            <div className='vertical-list'>
                <Typography variant='h3' gutterBottom>Domain</Typography>
              
                <li><Typography variant='h4' onClick={() => window.location.href='/domain'}>Domain Registration</Typography></li>
                <li><Typography variant='h4' onClick={() => window.location.href='/domain'}>Domain Transfer</Typography></li>
                <li><Typography variant='h4' onClick={() => window.location.href='/domain'}>Domain Renewal</Typography></li>
                <li><Typography variant='h4' >ICANN Registrant Educational Materials</Typography></li>
            </div>
        

            <div className='vertical-list'>
                <Typography variant='h3' gutterBottom>Products</Typography>
              
                <li><Typography onClick={() => window.location.href = '/hosting/'} variant='h4'>Hosting</Typography></li>
                <li><Typography onClick={() => window.location.href = '/google-workspace'} variant='h4'>G suite</Typography></li>
                <li><Typography variant='h4'>Track eye</Typography></li>
                <li><Typography variant='h4'>Nowdigitaleasy Connect</Typography></li>
            
            </div>


            <div className='vertical-list'>
                <Typography variant='h3' gutterBottom>Support</Typography>

                <li><Typography variant='h4' onClick={() => window.location.href = 'https://app.nowdigitaleasy.com/'}>Open Tickets</Typography></li>
                <li><Typography variant='h4' onClick={() => window.location.href = 'https://app.nowdigitaleasy.com/'}>Network status</Typography></li>
                <li><Typography variant='h4' onClick={() => window.location.href = 'https://app.nowdigitaleasy.com/'}>Knowledgebase</Typography></li>
                <li><Typography variant='h4' onClick={() => window.location.href = 'https://app.nowdigitaleasy.com/'}>Downloads</Typography></li>
            </div>

           
            </Grid>

            </Grid>

            </div>
        </div>
    </div>
    </ThemeProvider>
  )
}

export default Footer