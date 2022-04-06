import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { g_emailCart, hostingdialogstepp } from '../atoms/hostingatoms';
import './hosting-order.css'

function HostingOrder() {
  const [stepperstep, setStepperStep] = useRecoilState(hostingdialogstepp);
  const [emailCart, setEmailCart] = useRecoilState(g_emailCart);

  console.log(emailCart)

  return (<>
    <div className='hosting-order'>
    
    <div className='vertical-list'>
        <Typography variant='h3'><b>PlanName</b></Typography>
        <br />
        <Typography variant='h3'><b>Business Starter</b></Typography>
        <Typography variant='p'><b>Business Starter</b></Typography>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>No of Accounts</b></Typography>
        <br />
        <TextField size='small' type="number" onChange={(e) => setEmailCart(state => ({...state ,mailcount : e.target.value}))}/>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Price</b></Typography>
        <br />
        <Typography variant='h3'>Rs.88/acc/month</Typography>
        <Typography variant='p'><del>Rs.146/acc/month</del></Typography>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Duration</b></Typography>
        <br />
        
                <select onChange={(e) => setEmailCart(state => ({...state, duration : e.target.value}))} className="dropdown-hosting">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
    </div>

    <div className='vertical-list'>
        <Typography variant='h3'><b>Total</b></Typography>
        <br />
        <Typography variant='h3'>Rs.5256.00</Typography>
       
    </div>

    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
              <Button  style={{textAlign:'center'}} variant='contained' onClick={() => setStepperStep(1)}>Buy now</Button>
    </div>
    </>
  )
}

export default HostingOrder