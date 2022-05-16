import { Divider, Grid, Grow, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import './homepage.css'
import {addedtocartt, alldomains, cartt, exactdomainn, preloaderr, pricingg, yearss} from '../atoms/orderpage'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import Orderdomain from '../order/orderpage1'
import Header from '../headerfooter/Header'

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
      <Header />

    <div className='search-container'>
      <Typography variant='h1' color='secondary'>FIND DOMAIN NAME TO FIT YOUR BRAND</Typography>
      <Typography variant='h2'>SEARCH AND REGISTER DOMAIN FROM <span color='secondary'>₹ 399</span></Typography>
      <br />
      
      <Grid container
         alignItems="center"
         justifyContent="center">
  
        <Grid item md={7} sm={8} xs={8}>
          <input type='text' onChange={(e) => {setDomaininput(e.target.value);}} onKeyDown={handleKeyDown} className='search-box' placeholder='Search your domain here'/>
        </Grid>
      <Grid item md={1} sm={1} xl={1}>
      <input type='button'  onClick={search} value='Search' className='search-btn'/>
      </Grid>

      </Grid>
      
        <Stack direction='row' spacing={2} 
        flexWrap='wrap'
        divider={<Divider orientation='vertical' style={{backgroundColor:'white'}} flexItem/>}
        margin={2}
        justifyContent='center'
        >

          <Stack>
            <Typography variant='body'>.in</Typography>
            <Typography variant='body'>₹499.00</Typography>
          </Stack>


          <Stack>
            <Typography variant='body'>.co.in</Typography>
            <Typography variant='body'>₹399.00</Typography>
          </Stack>


          <Stack>
            <Typography variant='body'>.com</Typography>
            <Typography variant='body'>₹749.00</Typography>
          </Stack>


          <Stack>
            <Typography variant='body'>.net</Typography>
            <Typography variant='body'>₹799.00</Typography>
          </Stack>

          <Stack>
            <Typography variant='body'>.org</Typography>
            <Typography variant='body'>₹999.00</Typography>
          </Stack>
        </Stack>

    <Typography variant='p'>As low Prices shown are for first year only. Limit 1 per customer. Other discounts available, see cart for final pricing.</Typography>
    </div>

      <div ref={domainref}>

       {searched ? <Orderdomain pricingdata={pricingdata} exactdomain = {exactdomain}/> : <></>}
       </div>

    
 </div>
  )
}

export default Hompage