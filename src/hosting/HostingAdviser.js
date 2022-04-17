import { Button, Typography } from '@mui/material'
import React from 'react'
import hosting from '../images/offer-hosting.svg'
import offersupport from '../images/support-logo.webp'
import seosupport from '../images/seo-logo.webp'
import './hostingadvisor.css'

function HostingAdviser() {
  return (
    <>
    <div className='hosting-adisor'>
            <img src={hosting} />

            <div className='vertical-list'>
                    <Typography variant='h2'>Web Hosting + Domain</Typography>
                    <Typography variant='h4' gutterBottom>All-in-one starting from only <b>₹69.00/mo.</b></Typography>
                    <Button color='primary' href='/hosting' variant='contained' disableElevation>Select Hosting plan</Button>
            </div>

            <Typography className='save-text-hosting' variant='p'>save 60%</Typography>
    </div>
    <br/>
    <Support />
    <br/>
    <Seo />
    </>
  )
}

function Support(){
    return <div className='hosting-support'>
            <img src={offersupport} height={'60px'} width={'60px'} style={{marginRight : '30px'}}/>
            <div>
            <Typography variant='h3' className='text-support'>Get help <b>first</b> with <b>Priority support</b></Typography>
            <Typography variant='h4' className='text-support'>Starting from only <b>₹109.00/mo</b></Typography>
            <Button variant='outlined'>Get Priority support</Button>
    </div></div>
}


function Seo(){
    return <div className='hosting-support'>
            <img src={seosupport} height={'60px'} width={'60px'} style={{marginRight : '30px'}}/>
            <div>
            <Typography variant='h3' className='text-support'>Setup and streamline <b>your SEO</b> effortlessly with SEO toolkit</Typography>
            <Typography variant='h4' className='text-support'>Starting from only <b>₹705.00/mo</b></Typography>
            <Button variant='outlined'>Get Seo Toolkit PRO</Button>
        </div></div>
}

export default HostingAdviser