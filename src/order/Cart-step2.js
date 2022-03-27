import { Button, Divider, Grid, Icon, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import './cart_step2.css'
import domainimg from '../images/domain-product.webp';
import * as icons from '@mui/icons-material'
import { alldomains, cartt, cartticon, exactdomainn, pricingg, stepperstepp, yearss } from '../atoms/orderpage';
import { useRecoilState } from 'recoil';
import Cart2 from './Cart-2';

function Cart_step2() {
    const head={
            color:'grey',
            fontWeight:'500',
            marginBottom:'10px'
    }

    const offercard = {
            backgroundColor:'#000e9c',
            color:'white',
            padding:'5px 10px',
            margin :'10px'
    }


    const [cart,setCart] = useRecoilState(cartt);
    const [pricing,setPricingdata] = useRecoilState(pricingg);
    const [years,setYears] = useRecoilState(yearss);


     // ==============================================Drop down for how much years==================================================
     const changedropdown = (e,index) => {
        setYears(years.map((item,ind) => 
          ind === index 
          ? e.target.value
          : item 
  ))
    }


    
    function applypromocode(domain,price){
        let reducedcost;
    //     if(promocode){
    //         var splitdomain = domain.split('.')[1];
            
    //       promocoderesdata.map((item) => {
    //         console.log('requires',item.appliesto,splitdomain)
    //         let startdate = new Date(item.startdate);
    //         let expirydate = new Date(item.expirationdate);
    //         let today = new Date();

    //         if(startdate <= today && expirydate >= today){
    //         if(item.appliesto.split('.')[1] != null && item.appliesto.split('.')[1] == splitdomain){
    //             reducedcost = (Number(item.value) / 100) * Number(price);
    //             Updateamount(); 
    //             console.log('promo',reducedcost);
    //         }
    //       }
    //       else{
    //         // alert('expired')
    //         console.log('expired')
    //       }
    //     });
    //   }
      return reducedcost ? reducedcost.toFixed(2) : price;
    }



  return (
    <div  className='card-step2'>
        <Typography variant='h2'>You're almost there! Complete your order</Typography>
        <br />
        <Grid container spacing={2} justifyContent='center' className='card-step2-card'>


        <Grid item md={7} sm={12} xs={12}>

        {(cart.map((arr,ind) => {    
        return <div  className='card-container'>    
        <br />
        <Typography variant='h2' style={{textAlign:'left'}}>Domain Registration</Typography>

        <div className='card-container-flex'>

        <div className='vertical-list'>
        <Typography variant='h4' style={head} className='head'>Product</Typography>
        <img src={domainimg} height='50px'/>
        <Typography variant='h4'>{arr.domain}</Typography>
        </div>

        <div className='vertical-list'>
        <Typography  variant='h4' style={head} >Period</Typography>

        <select className='drop-down-year2' value={years[ind] ? years[ind] : 1} onChange={(e) => changedropdown(e,ind)}>
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
        <Typography  variant='h4' style={head}>Price</Typography>
        
        <Typography variant='h3' style={head}><del>₹ {pricing[arr.domain.split('.')[1]].register[1] * 1.5} </del></Typography>
        <Typography variant='h3'>{'₹ ' + applypromocode(arr.domain,pricing[arr.domain.split('.')[1]].register[years[ind]])} /1st year</Typography>
        
        <Typography variant='h3' style={offercard}>78% DISCOUNT!</Typography>
        {/* <br /> */}
        <Typography variant='h3'>then ₹ {pricing[arr.domain.split('.')[1]].register[1]}/year</Typography>

        </div>    


        <div className='vertical-list'>
            <Typography  variant='h4' style={head}>subtotal</Typography>
            
            <Typography variant='h3'>₹ {applypromocode(arr.domain,pricing[arr.domain.split('.')[1]].register[years[ind]])}</Typography>
            <br />
            <Typography variant='h3' color='blue'>you save ₹ 550</Typography>
            </div>
            <IconButton className='remove-btn'><icons.DeleteOutline /></IconButton>
       </div>
       </div>
        }
         
        ))}
        
        </Grid>  
        
        <Grid item md={4} sm={6} xs={12}>
        <Cart2 />    
        </Grid>

        </Grid>  
    </div>
  )
}

export default Cart_step2