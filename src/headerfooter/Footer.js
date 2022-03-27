import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import './footer.css'
import logo from '../images/logo.png'
import * as icons from '@mui/icons-material';
import visa from '../images/VISA.png';
import rupay from '../images/Rupay.png';
import Mastercard from '../images/Mastercard.png';

function Footer() {
  return (
    <div className='footer'>
        <div >
            <Grid container alignItems='center' className='helptab'>

            <Grid item md={4} sm={12} xs={12}>
            <Typography variant='h2' className='help-head' style={{letterSpacing:'3px'}}>24/7 Customer Care</Typography>
            <Typography variant='h3'>Get expert advice anytime for anything you need</Typography>
            </Grid>

            <div className='sub-cat'>    
            <icons.PhoneAndroid className='icons'/>

            <div className='help-head-content'>
            <Typography className='heading' style={{letterSpacing:'3px'}}>Phone</Typography>
            <Typography variant='head2'>Us Anytime</Typography>
            </div>

            </div>
            
            <div className='sub-cat'>
            <icons.ChatOutlined className='icons'/>
            
            <div className='help-head-content'>
            <Typography className='heading' style={{letterSpacing:'3px'}}>Chat</Typography>
            <Typography variant='head2'>Live with Us</Typography>
            </div>

            </div>

            <div className='sub-cat'>
                <icons.EmailOutlined className='icons'/>
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

            <Grid item md={4} sm={9} xs={9}>
            <img src={logo} style={{height:'73px'}}/>
            <br /><Typography variant='p'>We are a web hosting company with a mission to help everyone who goes online succeed.</Typography>
            <br /><Typography variant='p'>We accomplish this by continuously developing server technology, giving</Typography>
            <br /><Typography variant='p'>expert assistance, and ensuring a flawless online website hosting experience.</Typography>
           
            <div className='payment'>
                    <img src={visa} className='payment-icons'/>
                    <img src={rupay} className='payment-icons'/>
                    <img src={Mastercard} className='payment-icons'/>
            </div>

            </Grid>

            <Grid item md={7} sm={12} xs={12} className='all-footer'>
            <div className='vertical-list'>
                <Typography variant='h3'>Company</Typography>
              
                <li><Typography variant='h4'>About</Typography></li>
                <li><Typography variant='h4'>Affilated</Typography></li>
                <li><Typography variant='h4'>Blogs</Typography></li>
                <li><Typography variant='h4'>Track eye</Typography></li>
                <li><Typography variant='h4'>Privacy Policy</Typography></li>
                <li><Typography variant='h4'>Terms and services</Typography></li>
                
            </div>


            <div className='vertical-list'>
                <Typography variant='h3'>Support</Typography>
              
                <li><Typography variant='h4'>Domain Policy</Typography></li>
                <li><Typography variant='h4'>Pricing</Typography></li>
                <li><Typography variant='h4'>Register Domains</Typography></li>
                <li><Typography variant='h4'>Renew Domains</Typography></li>
                <li><Typography variant='h4'>Transfer Domain</Typography></li>
                <li><Typography variant='h4'>Whole Domain</Typography></li>
                
            </div>

            
            <div className='vertical-list'>
                <Typography variant='h3'>Products</Typography>
              
                <li><Typography variant='h4'>Dedicated Server</Typography></li>
                <li><Typography variant='h4'>Email Hosting</Typography></li>
                <li><Typography variant='h4'>Hosting Manager</Typography></li>
                <li><Typography variant='h4'>Linux Server</Typography></li>
                <li><Typography variant='h4'>Web Hosting</Typography></li>
                <li><Typography variant='h4'>Hosting</Typography></li>
                
            </div>

            <div className='vertical-list'>
                <Typography variant='h3'>Information</Typography>
              
                <li><Typography variant='h4'>Email Marketing</Typography></li>
                <li><Typography variant='h4'>Logo Design</Typography></li>
                <li><Typography variant='h4'>Web Analytics</Typography></li>
                <li><Typography variant='h4'>Web Design</Typography></li>
                <li><Typography variant='h4'>Faq</Typography></li>
                <li><Typography variant='h4'>Contact</Typography></li>
                
            </div>
            </Grid>

            </Grid>

            </div>
        </div>
    </div>
  )
}

export default Footer