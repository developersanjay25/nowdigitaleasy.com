import { ThemeProvider } from '@emotion/react';
import { Button, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { cartt, pricingg, stepperstepp, totalamountt, yearss } from '../atoms/orderpage';
import './cart_step2.css'
import theme from '../theme'
import * as icons from '@mui/icons-material'

function Cart2() {
    
    const [cart,setCart] = useRecoilState(cartt);
    const [pricing,setPricingdata] = useRecoilState(pricingg);
    const [years,setYears] = useRecoilState(yearss);
    const [stepperstep,setStepperStep] = useRecoilState(stepperstepp);
    const [totalamount,setTotalamount] = useRecoilState(totalamountt);
    
    function applypromocode(domain,price){
        console.log('pricing',years)
        let reducedcost;
        return reducedcost ? reducedcost.toFixed(2) : price;
    }

    // =================================Update Total Amount======================================================
    useEffect(() => {
      Updateamount();
   },[cart,years])

   const Updateamount = () => {
    var amount = 0;
    
      
    cart.map((item,index) => {
      if(item.type == 'g-workspace'){
        amount  += Number(item.price);
      }
      else
      {
      let price = pricing[item.domain.split('.')[1]].register[years? years[index] : 1];
      let reducedcost;
 
       amount += reducedcost ? Number(reducedcost) : Number(price);
      }
    });
    // console.log('price',pricing[item.domain.split('.')[1]].register[years[index] ? years[index] : 1]);
    
    setTotalamount(amount.toFixed(2));
    }
   
     //  =======================================Delete items on click=============================================================
    function deleteitems(e){
      let cartt = [...cart];
      cartt.splice(e,1);
      setCart(cartt);
      var temp = [...years]
      temp.splice(e, 1);
      setYears(temp);
    }


  return (
    <ThemeProvider theme={theme}>
    <div className='cart-2'>
    <Typography variant='h3' style={{textAlign:'center'}}>Order Summary</Typography>
    <br />
    <Divider />
    <br />

    {cart.map((arr,ind) => {
    if(arr.type){
      return <div className='final-cart'>
      <div>
      <Typography variant='h4'>Google Workspace ({arr.name})<IconButton onClick={() => deleteitems(ind)}> <icons.CancelOutlined fontSize='small' /></IconButton></Typography>
      <Typography variant='h4'>{arr.name} ( for {arr.domainforgwork})</Typography>
      </div>

      <div>
          <Typography variant='h3'>{arr.price}</Typography>
      </div>
      </div>
    }
    else{
    return <div className='final-cart'>
        <div>
        <Typography variant='h4'>Domain Registration<IconButton onClick={() => deleteitems(ind)}> <icons.CancelOutlined fontSize='small' /></IconButton></Typography>
        <Typography variant='h4'>{arr.domain}</Typography>
        </div>

    <div>
        <Typography variant='h3'>₹ {applypromocode(arr.domain,pricing[arr.domain.split('.')[1]].register[years[ind]])}</Typography>
    </div>
    </div>
    }
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
      {(window.location.pathname == '/cart' || window.location.pathname == '/domain') ? <Button variant='contained' onClick={() => window.location.href = (window.location.pathname == '/domain') ? '/cart' : '/login'} fullWidth>Checkout Now</Button> : <></>}
    
    <br />
    <br />

    <Typography variant='p' style={{textAlign :'center'}}>By checking out you agree with our TOS  We will process your personal data for the fulfillment of your order and other purposes as per our Privacy Policy This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</Typography>
</div>
</ThemeProvider>
)
}

export default Cart2