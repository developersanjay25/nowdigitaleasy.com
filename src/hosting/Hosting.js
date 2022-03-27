import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../headerfooter/Footer'
import Header from '../headerfooter/Header'
import './hosting.css'
import Offers from './Offers'

function Hosting() {
  return (
    <>
    <Header />
    <div className='hosting-container-1'>
        <Typography variant='h1'>XXL Web Hosting Sale</Typography>
        <Typography variant='h1' style={{fontWeight:'800 !important'}}>149.00</Typography>
        <Typography variant='p'>Get a free domain and lifetime SSL for ₹149.00/mo with a 4-year subscription.</Typography>
        <br />
        <Button variant='contained'>Get Started</Button>
    </div>

    <Grid container justifyContent='center'>

    <Grid item md={3} sm={12} xs={12} >
    <Offers />
    </Grid>

    
    <Grid item md={3} sm={12} xs={12}>
    <Offers />
    </Grid>

    
    <Grid item md={3} sm={12} xs={12}>
    <Offers />
    </Grid>

    </Grid>

    <Footer />
    </>
  )
}

export default Hosting