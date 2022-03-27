import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../headerfooter/Footer'
import Header from '../headerfooter/Header'
import './hosting.css'
import Offers from './Offers'
import gimage from '../images/g-suite-header.webp'

function Googleworkspace() {
  return (
    <>
    <Header />
    <div className='hosting-container-1'>
      <Grid container justifyContent='center'>
        
        {/* ==========================================================================Left headings=========================================== */}
        <Grid item md={4} sm={10} xs={10} >
        <div className='g-heading'>
        <Typography variant='h1' color='primary' className='g-workspace-h1'>Google Workspace: Everything you need to get anything done</Typography>
        <br />
        <Typography variant='h3' color="primary" className='g-workspace-h1'>It’s the best way to create, communicate, and collaborate. Familiar tools; fewer distractions; more time to make things happen.</Typography>
        <br />
        <Button variant='contained' className='g-getting-start'>start Now</Button>
        </div>
        </Grid>
        

        {/* ==========================================================================Right headings=============================================================== */}
        <Grid item md={6} sm={10} xs={10}>
          <img src={gimage} className='g-right-image'/>
       </Grid>
       </Grid>
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

export default Googleworkspace