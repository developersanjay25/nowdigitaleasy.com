import { ThemeProvider } from '@emotion/react';
import { Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil';
import { cartt, pricingg, stepperstepp, totalamountt, yearss } from '../atoms/orderpage';
import './cart_step2.css'
import theme from '../theme'

function Cart2() {
    
    const [cart,setCart] = useRecoilState(cartt);
    const [pricing,setPricingdata] = useRecoilState(pricingg);
    const [years,setYears] = useRecoilState(yearss);
    const [stepperstep,setStepperStep] = useRecoilState(stepperstepp);
    const [totalamount,setTotalamount] = useRecoilState(totalamountt);

    
    function applypromocode(domain,price){
        let reducedcost;
        return reducedcost ? reducedcost.toFixed(2) : price;
    }

  return (
    <ThemeProvider theme={theme}>
    <div className='cart-2'>
    <Typography variant='h3' style={{textAlign:'center'}}>Order Summary</Typography>
    <br />
    <Divider />
    <br />

    {cart.map((arr,ind) => {

    return <div className='final-cart'>
        <div>
        <Typography variant='h4'>Domain Registration</Typography>
        <Typography variant='h4'>{arr.domain}</Typography>
        </div>

    <div>
    <Typography variant='h3'>₹ {applypromocode(arr.domain,pricing[arr.domain.split('.')[1]].register[years[ind]])}</Typography>
    </div>
    </div>
    })}

    <div className='final-cart'>
        <div>
        <Typography variant='h4'> SSL Certificate Activation</Typography>
      </div>

    <div>
    <Typography variant='h3'>₹ 0.00</Typography>
    </div>
    </div>

    <Divider />
    

    {/* =========================================================Total================================================= */}
    <div className='final-cart'>
        <div>
        <Typography variant='h4'>Total</Typography>
      </div>

    <div>
    <Typography variant='h3'> ₹ {totalamount}</Typography>
    </div>
</div>

    {/* =========================================================Cart button================================================= */}
      {stepperstep == 1 ? <Button variant='contained' onClick={() => setStepperStep(2)} fullWidth>Checkout Now</Button> : <></>}
    
    <br />
    <br />

    <Typography variant='p' style={{textAlign :'center'}}>By checking out you agree with our TOS  We will process your personal data for the fulfillment of your order and other purposes as per our Privacy Policy This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</Typography>
</div>
</ThemeProvider>
  )
}

export default Cart2