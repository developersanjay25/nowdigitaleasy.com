import React from 'react'
import './testimonialshosting.css'
import Vector0  from '../images/vectorshosting/Vector0.png'; 
import vector1  from '../images/vectorshosting/Vector1.png'; 
import vector2  from '../images/vectorshosting/Vector2.png'; 
import vector3  from '../images/vectorshosting/Vector3.png'; 
import vector4  from '../images/vectorshosting/Vector4.png'; 
import vector5  from '../images/vectorshosting/Vector5.png'; 
import vector6  from '../images/vectorshosting/Vector6.png'; 
import vector7  from '../images/vectorshosting/Vector7.png'; 
import vector8  from '../images/vectorshosting/Vector8.png'; 
import vector from '../images/vectorshosting/Vector.png'; 
import mansitting from '../images/vectorshosting/young man in orange headphones sitting at green table and using computer.png'; 

import { Stack, Typography } from '@mui/material';

function TestimonialsHosting() {
  return (
<>
<Stack style={{backgroundColor : '#1642c6' , color:'white'}} paddingTop={2} textAlign='center'>
<Typography  variant='h2'>WHY YOU CHOOSE NOWDIGITALEASY ?</Typography>
</Stack>
<div className='testimonials-hosting'>
        <div className='container-hosting'>
            <img src={Vector0} className='img-vector'/>
            <Typography variant='h3' gutterBottom>FREE DOMAIN</Typography>
            <Typography variant='h4'>Register a new domain or manage your existing ones in one place.</Typography>
        </div>

        <div className='container-hosting'>
            <img src={vector} className='img-vector'/>
            <Typography variant='h3' gutterBottom>FREE MIGRATION</Typography>
            <Typography variant='h4'>Transfer entire website to nowdigitaleasy without any downtime for Free.</Typography>
        </div>
    
        <div className='container-hosting'>
            <img src={vector2} className='img-vector'/>
            <Typography variant='h3' gutterBottom>FREE BACKUPS</Typography>
            <Typography variant='h4'>Server side malware scanner to spot the malware affections.</Typography>
        </div>


        <div className='container-hosting'>
            <img src={vector3} className='img-vector'/>
            <Typography variant='h3' gutterBottom>Server Malware Scanner</Typography>
            <Typography variant='h4'>Server side malware scanner to spot the malware affections.</Typography>
          </div>
    
        <div className='container-hosting'>
            <img src={vector4} className='img-vector'/>
            <Typography variant='h3' gutterBottom>SUPER FAST SSD</Typography>
            <Typography variant='h4'>Super-fast website that loads 300% faster than usual HDD websites.</Typography>
        </div>

        <div className='container-hosting'>
            <img src={vector5} className='img-vector'/>
            <Typography variant='h3' gutterBottom>99.99% Uptime</Typography>
            <Typography variant='h4'>Super-fast website that loads 300% faster than usual HDD websites.</Typography>
        </div>

        <div className='container-hosting'>
            <img src={vector6} className='img-vector'/>
            <Typography variant='h3'>360° Security</Typography>
            <Typography variant='h4'>A full time security surveillance to your website</Typography>
        </div>

        <div className='container-hosting'>
            <img src={vector7} className='img-vector'/>
            <Typography variant='h3'>EXCLUSIVE SUPPORT</Typography>
            <Typography variant='h4'>Our expert Customer care support team responds you within 90 seconds.</Typography>
        </div>

      
    </div>
  
  </>)
}

export default TestimonialsHosting