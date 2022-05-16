import { ThemeProvider } from '@emotion/react';
import {  Button, Grid, Slide, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import { addedtocartt, alldomains, cartt, exactdomainn, pricingg, yearss } from '../atoms/orderpage';
import axios from 'axios'
import Cart2 from '../order/Cart-2';
import Cartdummy from '../order/cartdummy';
import Card from '../order/cartfordomains';
import { dialogsizee, g_emailCart, hostingdialogstepp } from '../atoms/hostingatoms';
import theme from '../theme';

function Domainavailability() {

    const[alldomain,setAllDomain] = useRecoilState(alldomains);
  const[cart,setCart] = useRecoilState(cartt);
  const [exactdomain,setExactdomain] = useRecoilState(exactdomainn);
  const [pricingdata,setPricingdata] = useRecoilState(pricingg);
  const [addedtocart,setItemAddedtocart] = useRecoilState(addedtocartt);
  const [Dialogsize, setDialogSize] = useRecoilState(dialogsizee);
  const [stepperstep, setStepperStep] = useRecoilState(hostingdialogstepp);

  
  const [domaininput,setDomaininput] = useState();
  const [searched ,setSearched] = useState(false);
  const [years,setYears] = useRecoilState(yearss);
  const domainref = useRef(null);
  const [emailCart, setEmailCart] = useRecoilState(g_emailCart);
  const [error,setError] = useState(false);

  var searchthisdomains = ['.in','.com','.org','.biz'];

  setDialogSize('lg')
  

      useEffect(() => {
        // console.log(cart);
        setEmailCart(state => ({...state, domainforgwork : cart ? (cart[cart.length-1] ? cart[cart.length-1].domain : '') : ''}));
      },[cart])

  function search() {
    // Go daddy api call for domain availability
    setExactdomain([])
    // setYears([])
    setSearched(true)
    var splitted = domaininput.split('.');

    
    // if user  gave domain also
    if(splitted[1] ){
      apicall(domaininput);
    }

    // user didn't gave domain
    else {
    searchthisdomains.map((domain,index) => {
    console.log(domain)
    var domaininputt = splitted[1] ? domaininput : domaininput + domain;
    apicall(domaininputt);
  });
  }

}

console.log(emailCart);


    const addemailtocart = () => {
      if(emailCart.domainforgwork.split('.')[1]){
      setCart(state => [...state, emailCart]); 
      window.location.href = '/cart'
      setError(false);
    }
      else{
        setError(true);
      }
    } 

// ==================================================================== enter Key to search ======================================================
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      search();
    }
  }


   // Api call
   function apicall(domaininputt){
    axios.get(`https://www.secureserver.net/api/v1/domains/1592/?pageSize=5&q=${domaininputt}`)
    .then((domain) => {
      setExactdomain(state => [...state,domain.data.exactMatchDomain]);
      setItemAddedtocart(state => [...state,{addedtocart : false}])
      console.log(domain.data)
    }).catch((err) => {
      console.log(err);
    });
  }

        return(
    <ThemeProvider theme={theme}>
        <Slide in={(stepperstep == 3)} direction="left">
        <div> 
         <Grid container 
        alignItems="center"
        justifyContent="center">
  
        <br/> 
        <br/> 
        <br/> 
        <Grid item md={3}  sm={8} xs={8}>
          <TextField type='text' fullWidth onChange={(e) => {setDomaininput(e.target.value);}} onKeyDown={handleKeyDown} placeholder='Search your domain here'/>
    
        </Grid>
      <Grid item md={1} sm={1} xl={1}>
      <input type='button'  onClick={search} value='search' className='search-btn'/>
      </Grid>
      </Grid>
        

      {exactdomain.length ?
      

      <Grid container className='background' >

{/* =========================================================Left container ================================================ */}
          <Grid item md={7} sm={11} xs={10}>
              <div className='left-container'>
                  <Typography variant='h4' color='primary'>Results</Typography>
                {(alldomain.length || exactdomain.length) ? <div>
                <br />
                <Typography variant='h5' color='primary'>Exact Domain you Searched</Typography>
                <br />
                 <Card pricing={pricingdata} alldomain={exactdomain} /> 
                
                </div> : <Typography>Loading...</Typography>}
              </div>
          </Grid>
         
         <Grid item md={1} sm={0} xs={0}>

         </Grid>

{/* =========================================================right container ================================================ */}
          <Grid item md={4} sm={12} xs={12}>
              <div className='right-container'>
              <Typography variant='subtitle1' style={{fontWeight:'bold'}}>Your Selection </Typography>
            
          {cart.length ? <Cart2/> : <Cartdummy /> }
          
          
           </div>
          </Grid>
      </Grid>
      : <></>}
          
          <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>

          <Typography>{cart.length ? cart[cart.length-1].domain : ''} Continue with this domain</Typography>
          <Button variant='contained' onClick={addemailtocart}>Continue</Button>
          </div>

    </div>
    </Slide>
    </ThemeProvider>)
}

export default Domainavailability