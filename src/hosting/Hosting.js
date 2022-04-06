import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../headerfooter/Footer'
import Header from '../headerfooter/Header'
import './hosting.css'
import Offers from './Offers'
import gimage from '../images/g-suite-header.webp'
import { useRecoilState } from 'recoil'
import {opendialogg , hostingdialogstepp } from '../atoms/hostingatoms'
import HostingOrder from './hosting-order'
import CheckAlreadydomain from '../Google-workspace/Check-already-have-domain'
import ExistingDomain from './ExistingDomain'
import TestimonialsHosting from './TestimonialsHosting'

function Googleworkspace() {
  const [open, setOpen] = useRecoilState(opendialogg);

    const handleClose = () => {
      setOpen(state => ({open : false}));
      };

  return (
    <>
    <Header />

    <Dialog
        fullWidth
        maxWidth = 'md'
        open={open.open}
        onClose={handleClose}
      >
        <DialogTitle>Google Workspace</DialogTitle>
        <DialogContent>
          <DialogContentText style={{overflow:'hidden'}}>
            
          </DialogContentText>
         </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>CLose</Button>
        </DialogActions>
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

    <Grid container justifyContent='center'>

    <Grid item md={3} sm={12} xs={12} >
    <Offers />
    </Grid>

    
    <Grid item md={3} sm={12} xs={12}>
    <Offers />
    </Grid>

    
    <Grid item md={3} sm={12} xs={12}>
    <Offers />
    </Grid>

    </Grid>

    <TestimonialsHosting />
    <Footer />
    </>
  )
}

export default Googleworkspace