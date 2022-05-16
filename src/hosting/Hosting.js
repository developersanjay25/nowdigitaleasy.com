import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Footer from '../headerfooter/Footer'
import Header from '../headerfooter/Header'
import './hosting.css'
import Offers from './Offers'
import gimage from '../images/g-suite-header.webp'
import { useRecoilState } from 'recoil'
import {opendialogg , hostingdialogstepp, GSuitedataa } from '../atoms/hostingatoms'
import HostingOrder from './hosting-order'
import CheckAlreadydomain from '../Google-workspace/Check-already-have-domain'
import ExistingDomain from './ExistingDomain'
import TestimonialsHosting from './TestimonialsHosting'
import Domainavailability from './Domainavailability'
import axios from 'axios'
import * as icons from '@mui/icons-material';

const getstep = (step) => {
  switch(step){
    case 0:
      return <HostingOrder />
    case 1:
      return <CheckAlreadydomain />
    case 2:
      return <ExistingDomain />
    case 3:
      return <Domainavailability />
  }
} 


function Googleworkspace() {
  const [open, setOpen] = useRecoilState(opendialogg);
  const [hostingstep, setHostingstep] = useRecoilState(hostingdialogstepp);
  const [GSuitedata, setGSuitedata] = useRecoilState(GSuitedataa);

    const handleClose = () => {
      setOpen(state => ({...state, open : false}));
      setHostingstep(0)
      };


// =================================================================Getting Hosting data==================================================
      useLayoutEffect(() => {
        const params = {
          identifier:'drtRhPBjT6DRgioybheFOpPgfFKLPxOt',
          secret:'phmxeN4UIiytvM36FsMUrQlQvgk4Jjce',
          accesskey:'ONEiaaxin_123',
          action:'Getproducts',
          responsetype:'json'
        }
      
        axios.get('https://www.nowdigitaleasy.com/includes/api.php',{params})
        .then((data) => {
            console.log('products',data.data.products.product);
            setGSuitedata(data.data.products);
        })
        .catch((err) => {
          console.log(err.message)
        })
      },[])
  

  return (
    <>
    <Header />

    <Dialog
        fullWidth
        maxWidth = 'md'
        open={open.open}
        onClose={handleClose}
      >
        
        <DialogTitle sx={{backgroundColor:'#1642c6',color:'white'}}>
         <Stack direction='row' justifyContent='space-between' alignItems='center'> 
            <Typography variant='h3' sx={{textTransform:'uppercase'}}>Hosting</Typography>
            <IconButton style={{color:'white'}} onClick={handleClose}><icons.Close /></IconButton>
         </Stack>
          </DialogTitle>
        
        <Divider />

        <DialogContent>
          <DialogContentText style={{overflow:'hidden'}}>
              {getstep(hostingstep)}
          </DialogContentText>
         </DialogContent>
      </Dialog>

    <div className='hosting-container-1'>
      <Grid container justifyContent='center'>
        
        {/* ==========================================================================Left headings=========================================== */}
        <Grid item md={12} sm={10} xs={10} paddingLeft={4}>
        <div className='g-heading'>
        <Typography variant='h1' color='primary' className='g-workspace-h1'>EXPERIANCE POWERFUL WEB HOSTING</Typography>
        <br />
        <Typography variant='h2' color="primary" className='g-workspace-h1' gutterBottom>Shared | VPS | Dedicated | Reseller Hosting</Typography>
        <Typography variant='h3' color="primary" className='g-workspace-h1'>G-suite Business tools to help you communicate , colobarate and increase overall efficiency at rates you’ve never experienced before.</Typography>
        <br />
        <Stack direction='row' spacing={2}>
        <Button variant='contained' color='primary'>View Products</Button>
        <Button variant='contained' color='secondary' sx={{color:'white'}}>Chat Now</Button>
        </Stack>
        </div>
        </Grid>
        

        {/* ==========================================================================Right headings=============================================================== */}
        {/* <Grid item md={6} sm={10} xs={10}>
          <img src={gimage} className='g-right-image'/>
       </Grid> */}
       </Grid>
    </div>

   
    <Grid container justifyContent='center' maxWidth={'100%'}>
    <Grid item md={3} sm={6} xs={12} >
    <Offers data={GSuitedata.product[4]}/>
    </Grid>

    
    <Grid item md={3} sm={6} xs={12}>
    <Offers data={GSuitedata.product[5]}/>
    </Grid>

    
    <Grid item md={3} sm={6} xs={12}>
    <Offers data={GSuitedata.product[6]}/>
    </Grid>


    <Grid item md={3} sm={6} xs={12}>
    <Offers data={GSuitedata.product[6]}/>
    </Grid>
    </Grid>
    

    <TestimonialsHosting />
    <Footer />
    </>
  )
}

export default Googleworkspace