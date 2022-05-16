import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import './googletestimonials.css'
import consultation from '../images/googleworkspace/consultation.png'
import setupandconfig from '../images/googleworkspace/setupandconfig.png'
import mailmigration from '../images/googleworkspace/mailmigration.png'
import training from '../images/googleworkspace/training.png'
import support from '../images/googleworkspace/support.png'

function GoogleTestimonials() {
        const data = [
          {
            img : consultation,
            heading : 'FREE CONSULTATION',
            content : `Evaluating all the benefits of moving your buisness to google workspace can be large task. 
            We have experience with all sorts of businesses in determining what a cloud migration implies in terms of their unique business requirements.`
          },
          {
            img : setupandconfig,
            heading : 'set up and configure',
            content : `You may not have enough time to set up your web domain, 
            Google workspace (previously G Suite) user accounts, or user policies.
             This is something that our team can do swiftly for you.`
          },
          {
            img : mailmigration,
            heading : 'Email migration',
            content : `With the aid of migration tools and services, all of your essential business files may be easily migrated to G suite.`
          },
          {
            img : training,
            heading : 'training',
            content : `Add, create, delete and edit all your Google Slides, Docs and Sheets in real time. 
            All the changes will be reflected within the team members at the same time and we will assit you in this process.`
          },
          {
            img : support,
            heading : 'Support',
            content : `Get support with G Suite anytime you need it. We have a team of professionals that have hands on the wizards at Google.`
          },
        ]      


  return (
    <div className='google-testimonials'>
        <Typography variant='h2'>Find Out What We Can Do For You</Typography>

        <div className='google-testimonials-box-flex'>
        
        <Grid container alignContent='space-between' spacing={5} style={{margin:'0px'}}>

        {data.map((item,index) => {
       return <Grid item md={4} sm={6} xs={12} key={'testimonial'+index}>
       <Card img={item.img} heading={item.heading} content={item.content}/>
       </Grid>
        })}

        </Grid>
        </div>
    </div>
  )
}

export default GoogleTestimonials

function Card(props) {
    const {img, heading} = props
  
    return <Stack 
    width='100%' 
    alignItems='center' 
    textAlign='left'
    spacing={1}>
      <img src={img} height={100} width={100} style={{objectFit:'cover'}}/>   
      <Typography sx={{textTransform:'capitalize'}} variant='h3'>{heading}</Typography> 
    <Typography>{props.content}</Typography>
    </Stack>
  }
  