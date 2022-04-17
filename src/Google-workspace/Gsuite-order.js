import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { GSuitedataa, gsuiteprice, g_emailCart, hostingdialogstepp, opendialogg } from '../atoms/hostingatoms';
import './Gsuite-order.css'
import axios from 'axios';

function HostingOrder() {
  const [stepperstep, setStepperStep] = useRecoilState(hostingdialogstepp);
  const [emailCart, setEmailCart] = useRecoilState(g_emailCart);
  const [gprice, setGPrice] = useRecoilState(gsuiteprice);
  const [open, setopen] = useRecoilState(opendialogg);
  const [GName, setGName] = useState();
  const [GSuitedata, setGSuitedata] = useRecoilState(GSuitedataa);
  
  const [emailcounterr, setemailcounterr] = useState(false)

  useEffect(() => {
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
      let price = Number(gprice[emailCart.duration]) * emailCart.mailcount;
      setEmailCart(state => ({...state ,price : price}));
    },[emailCart.mailcount,emailCart.duration,gprice])

    const emailcountvalidation = (e) => {
      
      if(e.target.value <= 0 || e.target.value > 300){
          setemailcounterr(true);
          setEmailCart(state => ({...state ,mailcount : e.target.value}));
      }
      else{
        setemailcounterr(false);
        setEmailCart(state => ({...state ,mailcount : e.target.value}));
      }
    }

  return (<>
    <div className='gsuite-order'>
    
    <div className='vertical-list'>
        <Typography variant='h3'><b>PlanName</b></Typography>
        <br />
        <Typography variant='h3'><b>{GName}</b></Typography>
        <Typography variant='p'><b>{GName}</b></Typography>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>No of Accounts</b></Typography>
        <br />
        <TextField  InputProps={{ inputProps: { min: 1, max: 300 } }} error={emailcounterr}
     size='small' type="number" value={emailCart.mailcount} onChange={emailcountvalidation}/>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Price</b></Typography>
        <br />
        <Typography variant='h3'>Rs.{gprice.monthly}/acc/month</Typography>
        <Typography variant='p'><del>Rs.{gprice.monthly * 1.5}/acc/month</del></Typography>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Duration</b></Typography>
        <br />
        
                <select onChange={(e) => setEmailCart(state => ({...state, duration : e.target.value}))} className="dropdown-hosting">
                    <option value={'annually'}>Annually</option>
                    <option value={'monthly'}>Monthly</option>
                </select>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Total</b></Typography>
        <br />
        <Typography variant='h3'>{emailCart.price}</Typography>   
    </div>

    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
            <Button  style={{textAlign:'center'}} variant='contained' onClick={() => {if(!emailcounterr){setStepperStep(1)}}}>Buy now</Button>
    </div>
    </>
  )
}

export default HostingOrder