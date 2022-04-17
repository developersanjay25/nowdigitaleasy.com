import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
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
      setOpen(state => ({open : false}));
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
        <DialogTitle>Hosting</DialogTitle>
        <DialogContent>
          <DialogContentText style={{overflow:'hidden'}}>
              {getstep(hostingstep)}
          </DialogContentText>
         </DialogContent>
      </Dialog>

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

   
    <Grid container justifyContent='center' maxWidth={'1050px'} margin={'auto'}>
    <Grid item md={4} sm={6} xs={12} >
    <Offers data={GSuitedata.product[4]}/>
    </Grid>

    
    <Grid item md={4} sm={6} xs={12}>
    <Offers data={GSuitedata.product[5]}/>
    </Grid>

    
    <Grid item md={4} sm={6} xs={12}>
    <Offers data={GSuitedata.product[6]}/>
    </Grid>

    </Grid>
    

    <TestimonialsHosting />
    <Footer />
    </>
  )
}

export default Googleworkspace