import { Button, emphasize, Grid, Typography } from '@mui/material'
import React from 'react'
import webhosting from '../images/Man performs system maintenance of the device from a laptop.png'
import mailimage from '../images/Woman with laptop sends mail around the world.png'

function Moredetails() {
  return (
    <div className='more-details'>
        
      <Typography variant='h1' > More tools to grow your Business.</Typography>
      <Typography variant='p' >We’re known for domains, but check out other essentials to take your business further online.</Typography>
    
        <Grid container>
        
        <Grid item md={6} sm={12}>
        <div className='web-hosting-box'>
                <img src={webhosting} className='home-page-images'/>
                <Typography variant='h2'>Web Hosting</Typography>
                <br />
                <Typography variant='p'>Whether you want hosting for one or 100 websites, we’ve got plans to keep everything running in peak form.</Typography>
        <br />
        <Typography variant='h3' >As low as</Typography>
        <br />
        <Typography variant='h2' >₹ 99.00 per user/mo</Typography>

        <br />
        <Button variant='outlined'>Explore plans</Button>
        </div>
        </Grid>

{/* ================================================================Email ===================================================== */}
        <Grid item md={6} sm={12}>
        <div className='web-hosting-box'>
                <img src={mailimage} className='home-page-images'/>
                <Typography variant='h2'>Proffessional Email</Typography>
                <br/>
                <Typography variant='p'>Show customers you’re a pro with an email address that matches your domain. Get Professional Email today.</Typography>
        <br />
        <Typography variant='h3' >As low as</Typography>
        <br />
        <Typography variant='h2' >₹ 29.00 per user/mo</Typography>

        <br />
        <Button variant='outlined'>Explore plans</Button>
        </div>
        </Grid>

        </Grid>
    </div>
  )
}

export default Moredetails