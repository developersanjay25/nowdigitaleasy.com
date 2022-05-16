import { Button, emphasize, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import webhosting from '../images/Man performs system maintenance of the device from a laptop.png'
import Moredetailsbox from './Moredetailsbox'
import hosting from '../images/homepage/hosting.png'
import trackeye from '../images/homepage/trackeye.png'
import ndeconnect from '../images/homepage/ndeconnect.png'
import personalmail from '../images/homepage/personalmail.png'

function Moredetails() {
  let data = [
    {
    image : hosting,
    name : 'web hosting',
    content : 'Shared Web Hosting is the perfect hosting solution for websites and businesses with limited technical expertise.'
    },
    {
      image : personalmail,
      name : 'proffessional email',
      content : 'G-suite Business tools to help you communicate , colobarate and increase overall efficiency at rates you’ve never experienced before.'
      },
    {
      image : trackeye,
      name : 'TRACK EYE',
      content : 'Trackeye is a Field Employee Monitoring software which keeps an eye on employers daily allotted tasks'
    },
    {
      image : ndeconnect,
      name : 'nde connect',
      content : 'Experience our IT Managed Services incorparated with latest IT Resources.'
    },
  ]


  return (
    <div className='more-details'>
        
      <Typography variant='h1' > More tools to grow your Business.</Typography>
      <Typography variant='p' >We’re known for domains, but check out other essentials to take your business further online.</Typography>
    
      <br />
      <Grid container spacing={1}>
        
        {data.map((item,index) => {
        return <Grid key={'moretools'+index} item md={3} sm={4} xs={6}>
        <Moredetailsbox image={item.image} planname={item.name} content={item.content}/>
        </Grid>
        })}

      </Grid>
      <br />
      </div>
  )
}

export default Moredetails