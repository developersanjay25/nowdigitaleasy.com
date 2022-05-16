import { Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { GSuitedataa, gsuiteprice, g_emailCart, hostingdialogstepp, opendialogg } from '../atoms/hostingatoms';
// import './Gsuite-order.css'
import axios from 'axios';
import { Box } from '@mui/system';

function HostingOrder() {
  const [stepperstep, setStepperStep] = useRecoilState(hostingdialogstepp);
  const [emailCart, setEmailCart] = useRecoilState(g_emailCart);
  const [gprice, setGPrice] = useRecoilState(gsuiteprice);
  const [open, setopen] = useRecoilState(opendialogg);
  const [GName, setGName] = useState();
  const [GSuitedata, setGSuitedata] = useRecoilState(GSuitedataa);
  
  const [emailcounterr, setemailcounterr] = useState(false)

  useEffect(() => {

    // =======================================Changing default gsuit details to hosting details======================================
    setEmailCart(state => ({...state ,mailcount : 1,type : 'hosting'}));

    const findingindex = (arr) => {  
            return arr.pid == open.pid;
          }
  
      let productarr = GSuitedata.product;
      console.log(productarr[productarr.findIndex(findingindex)].pid)

      setGPrice(productarr[productarr.findIndex(findingindex)].pricing['INR']);
      setGName(productarr[productarr.findIndex(findingindex)].name);

      setEmailCart(state => ({...state,name : productarr[productarr.findIndex(findingindex)].name , pid : productarr[productarr.findIndex(findingindex)].pid}))
},[])


    useEffect(() => {
      let price = Number(gprice[emailCart.duration]);
      setEmailCart(state => ({...state ,price : price}));
    },[emailCart.mailcount,emailCart.duration,gprice])

    
    

  return (<>
    <div className='gsuite-order'>
    
    <div className='vertical-list'>
        <Typography variant='h3'><b>Services</b></Typography>
        <br />
        <Typography variant='h3'><b>{GName}</b></Typography>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Price</b></Typography>
        <br />
        <Typography variant='h3'>Rs.{gprice.annually}/acc/month</Typography>
        <Typography variant='p'><del>Rs.{gprice.annually * 1.5}/acc/month</del></Typography>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Duration</b></Typography>
        <br />
        
                <select onChange={(e) => setEmailCart(state => ({...state, duration : e.target.value}))} className="dropdown-hosting">
                    <option value={'annually'}>Annually</option>
                    {/* <option value={'monthly'}>Monthly</option> */}
                </select>
    </div>

    <Stack padding={1.5}>
        <Typography variant='h3'><b>Total</b></Typography>
        <br />
        <Typography variant='h3'>₹ {emailCart.price}</Typography>   
    </Stack>

    </div>
    <Divider style={{position:'absolute',left:0,width:'100%'}}/>

    <Stack alignItems='flex-end' paddingTop={2}>
            <Button  style={{textAlign:'center'}} variant='contained' onClick={() => {if(!emailcounterr){setStepperStep(1)}}}>Buy now</Button>
    </Stack>
    </>
  )
}

export default HostingOrder