import { Grid, Typography } from '@mui/material'
import React from 'react'
import './googletestimonials.css'

function GoogleTestimonials() {
  return (
    <div className='google-testimonials'>
        <Typography variant='h2'>Find Out What We Can Do For You</Typography>

        <div className='google-testimonials-box-flex'>
        
        <Grid container  justifyContent='space-around' alignContent='space-between' spacing={5} style={{margin:'0px'}}>


        <Grid item md={4} sm={6}>
            <Typography variant='h3' className='head-google-testimonials'>Free Consultation</Typography>
            <Typography variant='h4'>Evaluating all the benefits of moving your buisness to google workspace can be large task.
                 We have experience with all sorts of businesses in determining what a cloud migration implies in terms of their
                  unique business requirements.</Typography>
        </Grid>


        <Grid item md={4} sm={6}>
            <Typography variant='h3' className='head-google-testimonials'>Set up & Configuration</Typography>
            <Typography variant='h4'>You may not have enough time to set up your web domain, Google workspace (previously G Suite) user accounts, 
            or user policies. This is something that our team can do swiftly for you.</Typography>
       </Grid>

        
       <Grid item md={4} sm={6}>
            <Typography variant='h3' className='head-google-testimonials'>Email Migration</Typography>
            <Typography variant='h4'>With the aid of migration tools and services, 
            all of your essential business files may be easily migrated to G suite.</Typography>
        </Grid>

        <Grid item md={4} sm={6}>
            <Typography variant='h3' className='head-google-testimonials'>Free Consultation</Typography>
            <Typography variant='h4'>Evaluating all the benefits of moving your buisness to google workspace can be large task.
                 We have experience with all sorts of businesses in determining what a cloud migration implies in terms of their
                  unique business requirements.</Typography>
        </Grid>

        <Grid item md={4} sm={6}>
            <Typography variant='h3' className='head-google-testimonials'>Training</Typography>
            <Typography variant='h4'>Add, create, delete and edit all your Google Slides, Docs and Sheets in real time. 
            All the changes will be reflected within the team members at the same time and we will assit you in this process.</Typography>
        </Grid>

        <Grid item md={4} sm={6}>
            <Typography variant='h3' className='head-google-testimonials'>Support</Typography>
            <Typography variant='h4'>Get support with G Suite anytime you need it. 
            We have a team of professionals that have hands on the wizards at Google.</Typography>
        </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default GoogleTestimonials