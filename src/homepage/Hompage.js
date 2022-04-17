import { Divider, Grid, Grow, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import './homepage.css'
import Moredetails from './Moredetails'
import {addedtocartt, alldomains, cartt, exactdomainn, preloaderr, pricingg, yearss} from '../atoms/orderpage'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import Card from '../order/cartfordomains'
import Orderdomain from '../order/orderpage1'

function Hompage() {
  const[cart,setCart] = useRecoilState(cartt);
  const [domaininput,setDomaininput] = useState();
  const [searched ,setSearched] = useState(false);
  const [exactdomain,setExactdomain] = useRecoilState(exactdomainn);
  const [pricingdata,setPricingdata] = useRecoilState(pricingg);
  const [addedtocart,setItemAddedtocart] = useRecoilState(addedtocartt);
  const [years,setYears] = useRecoilState(yearss);
  const [preloader,setPreloader] = useRecoilState(preloaderr);
  const domainref = useRef(null);
  

  useEffect(() => {
    // setPreloader(true);
    // Api for pricing
    let url = 'https://www.nowdigitaleasy.com/includes/api.php?identifier=drtRhPBjT6DRgioybheFOpPgfFKLPxOt&secret=phmxeN4UIiytvM36FsMUrQlQvgk4Jjce&accesskey=ONEiaaxin_123&action=GetTLDPricing&responsetype=json&suffix=usd&code=inr'
     
    axios.get(url).then((data) => {
        setPricingdata(data.data.pricing)
        console.log(data.data.pricing.com.register);
        setPreloader(false);
    }).catch((err) => {
      console.log(err);
    })
  },[])

    var searchthisdomains = ['.in','.com','.org','.biz'];



    console.log(pricingdata)

    console.log('years',years)

    useEffect(() => {
      if(years.length < cart.length){
        for(let i=0; i<cart.length;i++){
          setYears(state => [...state,1])
          console.log('years');
        }
    }

    },[cart])

    

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

    function search() {
      // Go daddy api call for domain availability
      setExactdomain([])
      setSearched(true)
      var splitted = domaininput.split('.');

      //==================================================Scroll to searched domain======================================================
      domainref.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
      
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

// ==================================================================== enter Key to search ======================================================
    function handleKeyDown(e) {
      if (e.key === 'Enter') {
        search();
      }
    }


  return (
      <div>

    <div className='search-container'>
      <Typography variant='h1'>Bring your Business online with a .com</Typography>
      <Typography variant='h2'>As low as ₹ 499.00* /1st year.</Typography>
      <br />
      
      <Grid container 
        alignItems="center"
        justifyContent="center">
  
        <Grid item md={7}  sm={8} xs={8}>
          <input type='text' onChange={(e) => {setDomaininput(e.target.value);}} onKeyDown={handleKeyDown} className='search-box' placeholder='Search your domain here'/>
        </Grid>
      <Grid item md={1} sm={1} xl={1}>
      <input type='button'  onClick={search} value='search' className='search-btn'/>
      </Grid>
      </Grid>
      
      <div className='below-search'>

      <div className='below-search-content'>
      <Typography variant='h3'>.in</Typography>
      <Typography variant='h3'>&#x20B9; 499</Typography>
      </div>
      

      <div className='below-search-content'>
      <Typography variant='h3'>.com</Typography>
      <Typography variant='h3'>&#x20B9; 679</Typography>
      </div>

  
      <div className='below-search-content'>    
      <Typography variant='h3'>.online</Typography>
      <Typography variant='h3'>&#x20B9; 75</Typography>
      </div>

      
      <div className='below-search-content'>
      <Typography variant='h3'>.live</Typography>
      <Typography variant='h3'>&#x20B9; 272.00</Typography>
      </div>


      <div className='below-search-content'>
      <Typography variant='h3'>.store</Typography>
      <Typography variant='h3'>&#x20B9; 75</Typography>
      </div>

      <div>
      <Typography variant='h3'>.info</Typography>
      <Typography variant='h3'>&#x20B9; 75</Typography>
      </div>
      
      </div>
    
    <br/>

    <Typography variant='p'>As low Prices shown are for first year only. Limit 1 per customer. Other discounts available, see cart for final pricing.</Typography>
    </div>

      <div ref={domainref}>

       {searched ? <Orderdomain pricingdata={pricingdata} exactdomain = {exactdomain}/> : <></>}
       </div>

    <Moredetails />
 </div>
  )
}

export default Hompage