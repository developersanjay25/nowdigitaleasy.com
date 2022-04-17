import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Footer from '../headerfooter/Footer'
import Header from '../headerfooter/Header'
import './hosting.css'
import Offers from './Offers'
import gimage from '../images/g-suite-header.webp'
import { useRecoilState } from 'recoil'
import {dialogsizee, GSuitedataa, hostingdialogstepp, opendialogg} from '../atoms/hostingatoms'
import CheckAlreadydomain from './Check-already-have-domain'
import ExistingDomain from './ExistingDomain'
import HostingOrder from './Gsuite-order'
import Domainavailability from './Domainavailability'
import GoogleTestimonials from './GoogleTestimonials';
import axios from 'axios';

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
  const [stepperstep, setStepperStep] = useRecoilState(hostingdialogstepp);
  const [Dialogsize, setDialogSize] = useRecoilState(dialogsizee);
  const [GSuitedata, setGSuitedata] = useRecoilState(GSuitedataa);

    const handleClose = () => {
        setOpen(state => ({...state,open : false}));
    };

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

    console.log(GSuitedata);
    
  return (
    <>
    <Header />

    <Dialog
        fullWidth
        maxWidth = {Dialogsize}
        width = 'fit-content'
        open={open.open}
        onClose={handleClose}
      >
        <DialogTitle>Google Workspace</DialogTitle>
        <DialogContent style={{overflowX:'hidden'}}>
          <DialogContentText>
          {getstep(stepperstep)}
          </DialogContentText>
         </DialogContent>
      </Dialog>

    <div className='hosting-container-1'>
      <Grid container justifyContent='center'>
        
        {/* ==========================================================================Left headings=========================================== */}
        <Grid item md={4} sm={10} xs={10} >
        <div className='g-heading'>
        <br />
        <Typography variant='h1' color='primary' className='g-workspace-h1'>Google Workspace: Everything you need to get anything done</Typography>
        <br />
        <Typography variant='h3' color="primary" className='g-workspace-h1'>It’s the best way to create, communicate, and collaborate. Familiar tools; fewer distractions; more time to make things happen.</Typography>
        <br />
        <Button variant='contained' className='g-getting-start' href='/login'>15-days free trial</Button>
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
    <Offers data={GSuitedata.product[1]}/>
    </Grid>

    
    <Grid item md={4} sm={6} xs={12}>
    <Offers data={GSuitedata.product[2]}/>
    </Grid>

    
    <Grid item md={4} sm={6} xs={12}>
    <Offers data={GSuitedata.product[3]}/>
    </Grid>

    </Grid>
    
    <GoogleTestimonials />
    
    <Footer />
    </>
  )
}

export default Googleworkspace