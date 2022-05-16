import { Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './testimonials.css'
import lifeserver from '../images/homepage/lifetimeserver.png'
import support from '../images/homepage/support.png'
import security from '../images/homepage/security.png'
import backup from '../images/homepage/backup.png'
import ssl from '../images/homepage/ssl.png'
import gurantee from '../images/homepage/gurantee.png'

// This is not testimonials testimonials movied to ConnectWithMember
function Testimonials() {
  const data = [
    {
      img : support,
      heading : '24x7 SUPPORT',
      content : 'Our hosting experts are available round-the-clock to help you via phone, chat or email with any web hosting queries.'
      },
    {
      img : gurantee,
      heading : '45 DAY GUARNTEE',
      content : 'We understand your website is vital for your business. All our web hosting plans come with a promise of 99.9% uptime.'
    },
    {
      img : lifeserver,
      heading : '99.9% UPTIME',
      content : 'We understand your website is vital for your business. All our web hosting plans come with a promise of 99.9% uptime.'
    },
    {
      img : ssl,
      heading : 'FREE SSL',
      content : 'Our hosting experts are available round-the-clock to help you via phone, chat or email with any web hosting queries.'
    },
    {
      img : backup,
      heading : 'FREE BACKUP',
      content : 'Regular automatic full backups for Free to eliminate data loss.'
    },
    {
      img : security,
      heading : 'FREE SECURITY',
      content : 'Our hosting experts are available round-the-clock to help you via phone, chat or email with any web hosting queries.'
    }
  ]
  
  return (
    <div className='testimonials-home'>
       <Typography variant='h2'>ADVANTAGE FOR WEB HOSTING IN INDIA</Typography>
       <br />
       <br />

       <Grid container spacing={3} justifyContent='center'>

      {data.map((item,index) => {
       return <Grid item md={4} sm={6} xs={12} key={'testimonial'+index} height={250}>
       <Card img={item.img} heading={item.heading} content={item.content}/>
       </Grid>
      })}
      
       </Grid>
    </div>
  )
}

export default Testimonials

function Card(props) {
  const {img, heading} = props

  return <Stack 
  width='100%' 
  alignItems='center' 
  textAlign='left'
  spacing={1}>
    <img src={img} height={100} width={100} style={{objectFit:'cover'}}/>   
    <Typography variant='h3'>{heading}</Typography> 
    <Typography>
     {props.content}
    </Typography>
  </Stack>
}