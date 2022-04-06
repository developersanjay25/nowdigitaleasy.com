import { Grid, Typography } from '@mui/material'
import React from 'react'
import './testimonials.css'

function Testimonials() {
  return (
    <div className='testimonials-home'>
        <Typography variant='h2'>What Our Customers Say</Typography>
        
        <div className='horizontal-testimonials'>

        <div className='home-page-testimonial-box'>
            <Typography className='text-box-testmonial'>Nowdigitaleasy is the most reliable service provider. 
                Powerful hosting features and proactive customer support makes it eat the competition. 
                It’s always been a wise decision for me to choose NowDigitalEasy as companion in my online business journey.</Typography>
        </div>

        <div className='home-page-testimonial-box'>
            <Typography className='text-box-testmonial'>Now digital Easy provides best up time servers in shared hosting. 
            In last 3 years I haven't seen any downtime in our websites. 
            Even shared hosting of hostgator is Better than VPS of many other hosting companies. Best Service.</Typography>
        </div>

        <div className='home-page-testimonial-box'>
            <Typography className='text-box-testmonial'>One of the most recognisable web hosting service provider, it is best for speed, reliability, and excellent support. 
            It provides flexible hosting & domain options in market, with plans suitable for website owners, small businesses and big enterprises.</Typography>
        </div>

        </div>
    </div>
  )
}

export default Testimonials