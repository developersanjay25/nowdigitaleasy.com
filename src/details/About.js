import { Typography } from '@mui/material'
import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about-us'>
        <Typography variant='h3' color='primary'>ABOUT US</Typography>

        <Typography variant='h3'>
        The main goal of NowDigitalEasy is to bring customer satisfaction to a new level. We will also strive to offer the best equipment on the market with the best support staff. We believe family and support are #1. We believe that if your web site goes down it takes away from your family time, your time that you could be updating or marketing your web site. In short NowDigitalEasy goals are to lessen the load on the web master and/or small business owner. This way he and/or she can spend more time doing things other than worrying about their website.
        </Typography>

        <br />

        <Typography variant='h3' color='primary'>WHY CHOOSE NOWDIGITALEASY?</Typography>

        <br />

        <Typography variant='h3'><span className='head-about'>Quality: </span> When it comes to providing a quality service for our clients to place their information on the Web, we take no short cuts. From our equipment, to our staff, there is no substitute for quality. We use what we sell. Our Web Site is served off our main Web server using a One Plan Package</Typography>
    
        <br />

        <Typography variant='h3'><span className='head-about'>Support: </span> We believe that support should be a priority situation, not second rate. Each support calls or mails we receive will be settled within 24 Hrs of time. Our support options are quite possibly unmatched.</Typography>
        
        <br />

        <Typography variant='h3'><span className='head-about'>NowDigitalEasy Vision: </span> At NowDigitalEasy we know where we are going and that is to the top of hosting technology. We will never fail to achieve the goals of being a leader in the web hosting industry. With the goals of growing into our own data center, to offer the client a continuous satisfaction of knowing that they are with a stable, secure, and quality webhost. NowDigitalEasy believes that we can rise to the top of the web hosting industry through quality and support.</Typography>
        
        <br />
        <Typography variant='h3'><span className='head-about'>Our Aim: </span> It is our aim to satisfy each and every one of our customers. If you are happy with your current service share your experience with others, so they may have the same great experiences as you.</Typography>
        <br />
        <Typography variant='h3'><span className='head-about'>Our Policy: </span> Dedicated to providing new and updated features as they 
        become available while maintaining a cost effective pricing structured by not having artificial extra charges and costly overheads.</Typography>
</div>
  )
}

export default About