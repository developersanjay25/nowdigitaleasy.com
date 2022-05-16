import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
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
import GWorkspaceOrder from './Gsuite-order'
import square from '../images/googleworkspace/square.png'
import meet from '../images/googleworkspace/meet.png'
import sheet from '../images/googleworkspace/sheet.png'
import sheet2 from '../images/googleworkspace/sheet (2).png'
import gmail from '../images/googleworkspace/gmail.png'
import googleworkspace from '../images/googleworkspace/workspace.png'
import drive from '../images/googleworkspace/drive.png'
import { Box } from '@mui/system'
import * as icons from '@mui/icons-material'

import access from '../images/googleworkspace/gsuite/access.png'
import control from '../images/googleworkspace/gsuite/control.png'
import connect from '../images/googleworkspace/gsuite/connect.png'
import create from '../images/googleworkspace/gsuite/create.png'
import Faq from './Faq'

const getstep = (step) => {
  switch(step){
    case 0:
      return <GWorkspaceOrder />
    case 1:
      return <CheckAlreadydomain />
    case 2:
      return <ExistingDomain />
    case 3:
      return <Domainavailability />
  }
} 

const blueboxcontent = [
  {
  img : connect,
  heading : 'Connect',
  content : 'G suite connects you to your colleagues and business associates wherever they are.'
},
{
  img : create,
  heading : 'Create',
  content : 'G suite provides you all the tools needed to bring your project to life.'
},
{
  img : access,
  heading : 'Access',
  content : 'G suite store all your files have easy access to them always'
},
{
  img : control,
  heading : 'Control',
  content : 'G suite manage all your users, devices, and data so that you can have full control over your business.'
}
]

function Googleworkspace() {
  const [open, setOpen] = useRecoilState(opendialogg);
  const [stepperstep, setStepperStep] = useRecoilState(hostingdialogstepp);
  const [Dialogsize, setDialogSize] = useRecoilState(dialogsizee);
  const [GSuitedata, setGSuitedata] = useRecoilState(GSuitedataa);

    const handleClose = () => {
        setOpen(state => ({...state,open : false}));
        setStepperStep(0);
        setDialogSize('md')
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
    <div className='gsuit'>
    <Header />

    <Dialog
        fullWidth
        maxWidth = {Dialogsize}
        width = 'fit-content'
        open={open.open}
        onClose={handleClose}
      >
        <DialogTitle sx={{backgroundColor:'#1642c6',color:'white'}}>
         <Stack direction='row' justifyContent='space-between' alignItems='center'> 
            <Typography variant='h3' sx={{textTransform:'uppercase'}}>Google Workspace - configuration</Typography>
            <IconButton style={{color:'white'}} onClick={handleClose}><icons.Close /></IconButton>
         </Stack>
          </DialogTitle>
        
        <Divider />
        <DialogContent style={{overflowX:'hidden'}}>
          <DialogContentText>
          {getstep(stepperstep)}
          </DialogContentText>
         </DialogContent>
      </Dialog>

    <div className='hosting-container-1'>
      <Grid container justifyContent='center'>
        
        {/* ==========================================================================Left headings=========================================== */}
        <Grid item md={5} sm={10} xs={10} >
        <div className='g-heading'>
        <br />

        <Stack direction='row' spacing={2}>
            <img src={square} height={50} width={50}/>
            <img src={meet} height={50} width={50}/>
            <img src={drive} height={50} width={50}/>
            <img src={gmail} height={50} width={50}/>
        </Stack>

        <Typography variant='h2' color='primary' className='g-workspace-h1'>G-suite Business tools to help you communicate , 
        colobarate and increase overall efficiency at rates you’ve never experienced before.</Typography>
        <br />
        <Typography variant='h3' color="primary" className='g-workspace-h1'>An innovative way for organizations to achieve more flexibility 
        and employees to feel like they can conquer anything!</Typography>
        <br />
        <Button variant='contained' className='g-getting-start' href='/login'>start free trial</Button>
        </div>
        </Grid>
        

        {/* ==========================================================================Right headings=============================================================== */}
        <Grid item md={6} sm={10} xs={10}>
          <img src={googleworkspace} className='g-right-image'/>
       </Grid>
       </Grid>
    </div>


        {/*================================================== Choose plan box =====================================================*/}
  <Box 
  component={Stack} 
  sx={{
  background:"linear-gradient(to right, #1642c6 ,#1642C6,  #0B2163)",
  color:'white',
  alignItems:'center',
  textAlign:'center'}}
  paddingTop='20px'
  >
    
    <Typography variant='h2' gutterBottom>CHOOSE YOUR PLAN .TRY IT FREE FOR 14 DAYS </Typography>
    <Typography variant='h3' maxWidth={'90%'}>Lowest Google WorkSpace Price Guaranteed. 30 Days Money Back. No Questions Asked. We Accept Payment Via Online and Bank Transfers.
Instant Activation. Free Setup. Free Migration</Typography>

    <Grid container 
    justifyContent='center' 
    // maxWidth={'1050px'} 
    margin={'auto'}
    >
    <Grid item md={3} sm={6} xs={12} >
    <Offers data={GSuitedata.product[1]}/>
    </Grid>

    
    <Grid item md={3} sm={6} xs={12}>
    <Offers data={GSuitedata.product[2]}/>
    </Grid>

    
    <Grid item md={3} sm={6} xs={12}>
    <Offers data={GSuitedata.product[3]}/>
    </Grid>


    <Grid item md={3} sm={6} xs={12}>
    <Offers data={GSuitedata.product[3]}/>
    </Grid>

    </Grid>
    
    <Box width={'98%'} textAlign='left'>
    <ul>
      <Stack spacing={1}>
        <li><Typography variant='subtitle1'>Business Starter, Business Standard and Business Plus plans can be purchased for a maximum of 300 users. There is no minimum or maximum user limit for Enterprise plans.</Typography></li>
        <li><Typography variant='subtitle1'>Google Workspace customers may have access to additional features for a limited promotional period.</Typography></li>
        <li><Typography variant='subtitle1'>Offer available to new Google Workspace customers only. This introductory price is only available for the first 20 users added, for 12 months. Standard pricing will apply to all 
        users after 12 months. Customers may cancel at any time.</Typography></li>
        <li><Typography variant='subtitle1'>Google will provide an initial 5 TB of pooled storage for each user. Customers who want additional storage can request it as needed by contacting Google Support.</Typography></li>
        </Stack>
      </ul>
      </Box>

    </Box>


    {/*================================================ Try Google workspace ================================================*/}
    <Box padding={2} container={Stack} textAlign='center'>
      <Typography variant='h2' gutterBottom>Try Google Workspace for free</Typography>
      <Typography variant='h3' gutterBottom>See why millions of businesses love and rely on Google Workspace for their business needs.Try Google Workspace for free</Typography>
      <br />
      <Button color='primary' 
      sx={{color:'white',borderRadius:'20px'}}
      disableElevation
      variant='contained'
      >Get started</Button>
    </Box>

    <Box  sx={{backgroundColor:'#1642C6',color:'white'}} padding={'30px 0px'}>
    <Grid container  spacing={1} width={'95%'} justifyContent='center' margin={'auto'}>
      {blueboxcontent.map((item,ind) => {
       return <Grid item md={3} sm={3} xs={4} key={'box2'+ind}><BluebackContainerbox img={item.img} heading={item.heading} content={item.content}/></Grid>
      })}
    </Grid>
    </Box>
    <GoogleTestimonials />
    <Faq />
    <Footer />
    </div>
  )
}

export default Googleworkspace


const BluebackContainerbox = (props) => {
  const {img,heading,content} = props;
  return <Stack spacing={2} justifyContent='center' alignItems={'center'}>
  <img src={img} height={50} width={50}/>

  <Typography variant='h2'>{heading}</Typography>
  <Typography variant='body1'>{content}</Typography>
  </Stack>
}