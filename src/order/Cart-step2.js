import { Button, Divider, Grid, Icon, IconButton, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import './cart_step2.css'
import domainimg from '../images/domain-product.webp';
import * as icons from '@mui/icons-material'
import { alldomains, cartt, cartticon, exactdomainn, pricingg, stepperstepp, yearss } from '../atoms/orderpage';
import { useRecoilState } from 'recoil';
import Cart2 from './Cart-2';
import Footer from '../headerfooter/Footer';
import Header from '../headerfooter/Header';
import HostingAdviser from '../hosting/HostingAdviser';

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

    // ===================================================Check hosting added to cart or not==========================================
    function checkhostingavailable(){
      var result = false;
      cart.map((item) =>{
        if(item.type == 'hosting'){
          result = true;
        }
      })
      return result;
    }
    
    function applypromocode(domain,price){
        let reducedcost;
    
      return reducedcost ? reducedcost.toFixed(2) : price;
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

  return (<>
      <Header/>
    <div  className='card-step2'>
      {/* ======================================Header=================================== */}

        <Typography variant='h2'>You're almost there! Complete your order</Typography>
        <br />
        <Grid container spacing={2} justifyContent='center' className='card-step2-card'>


        <Grid item md={7} sm={12} xs={12}>

        {(cart.map((arr,ind) => {    
          // =====================================================google workspace card===========================================
        if(arr.type == 'g-workspace'){
            return <div  className='card-container'>
              <Typography variant='h2' style={{textAlign:'left'}}>Google Workspace</Typography>

              <div className='card-container-flex'>

        <div className='vertical-list' style={{textAlign:'left'}}>
        <Typography variant='h3' style={head}>Google Workspace ({arr.name})</Typography>
        <Typography  variant='h4' style={{marginBottom:'10px'}}>{arr.name} ( {arr.domainforgwork} )</Typography>
        <Typography  variant='h4'>Details: {arr.mailcount} Accounts</Typography>
        </div>    


      <div className='vertical-list'>
              <Typography  variant='h3' onChange={changedropdown} value={years[ind]} style={head} >Duration</Typography>
              <Typography  variant='h4' style={{marginBottom:'10px'}}>{arr.duration}</Typography>
      </div>    

<div className='vertical-list'>
  <Typography  variant='h3' style={head} >Price</Typography>
  <Typography  variant='h3'  >₹ {arr.price}</Typography>
</div>    

    <IconButton className='remove-btn' onClick={() => deleteitems(ind)}><icons.DeleteOutline /></IconButton>
</div>

</div>
        }


        // ====================================================Hosting card======================================================
        if(arr.type == 'hosting'){
          return <div  className='card-container'>
            <Typography variant='h2' style={{textAlign:'left'}}>Hosting</Typography>

            <div className='card-container-flex'>

      <div className='vertical-list' style={{textAlign:'left'}}>
      <Typography variant='h3' style={head}>Hosting ({arr.name})</Typography>
      <Typography  variant='h4' style={{marginBottom:'10px'}}>{arr.name} ( {arr.domainforgwork} )</Typography>
      <Typography  variant='h4'>Details: {arr.mailcount} year</Typography>
      </div>    


    <div className='vertical-list'>
            <Typography  variant='h3' onChange={changedropdown} value={years[ind]} style={head} >Duration</Typography>
            <Typography  variant='h4' style={{marginBottom:'10px'}}>{arr.duration}</Typography>
    </div>    

<div className='vertical-list'>
<Typography  variant='h3' style={head} >Price</Typography>
<Typography  variant='h3'  >₹ {arr.price}</Typography>
</div>    

  <IconButton className='remove-btn' onClick={() => deleteitems(ind)}><icons.DeleteOutline /></IconButton>
</div>

</div>
      }



        // ======================================================Domain Card=======================================================
        else{
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
            <IconButton className='remove-btn' onClick={() => deleteitems(ind)}><icons.DeleteOutline /></IconButton>
       </div>
       </div>
        }
      }  
        ))}
      
      {/* =============================================showing hosting advisor when hosting not available=========================== */}
      {checkhostingavailable() ? <></> : <HostingAdviser /> }  

        </Grid>  
        
        {/* ====================================Cart=============================== */}
        <Grid item md={4} sm={6} xs={12}>
        <Cart2 />    
        </Grid>

        </Grid>  

       
    </div>
     {/* ===========================Footer===================================== */}
     <Footer />
     
     </>
  )
}

export default Cart_step2