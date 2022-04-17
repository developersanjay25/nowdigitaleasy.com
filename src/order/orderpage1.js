import {Stepper,Step,StepLabel, Grid, Typography,TextField, Button} from '@mui/material';
import './orderpage.css'
import * as icons from '@mui/icons-material'
import { ThemeProvider , createTheme } from '@mui/material/styles';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {useRecoilState,atom} from 'recoil'
import RightCard from './rightcard';
import { addedtocartt, alldomains, cartt, exactdomainn, preloaderr, pricingg, yearss } from '../atoms/orderpage';
import Card from './cartfordomains'
import RightContainer from './rightcontainer';
import Cartdummy from './cartdummy';
import axios from 'axios'
import Cart2 from './Cart-2';




// Theme
const theme = createTheme({
    palette: {
        primary:{
            main : '#000E9C '
        },
      secondary: {
            main: '#000000'
      }
    },
    typography : {
      fontFamily : 'Source Sans Pro,Segoe UI,sans-serif',
      fontWeight : '500',
      color: '#00185e',
      h4 : {
        fontWeight : '500'
      },
      h5 : {
        fontWeight : '500'
      }
    }
  });
    

const Orderdomain = (props) => {
  const[alldomain,setAllDomain] = useRecoilState(alldomains);
  const[cart,setCart] = useRecoilState(cartt);
  const [exactdomain,setExactdomain] = useRecoilState(exactdomainn);
  const [pricingdata,setPricingdata] = useRecoilState(pricingg);

        return(<>
        <ThemeProvider theme={theme}>
   

      <Grid container className='background' spacing={8}>

{/* =========================================================Left container ================================================ */}
          <Grid item md={8} sm={11} xs={10}>
              <div className='left-container'>
                  <Typography variant='h4' color='primary'>Results</Typography>
                {(alldomain.length || exactdomain.length) ? <div>
                <br />
                <Typography variant='h5' color='primary'>Exact Domain you Searched</Typography>
                <br />
                 <Card  pricing={pricingdata} alldomain={exactdomain} /> 
                
                </div> : <Typography>Loading...</Typography>}
              </div>
          </Grid>
         
{/* =========================================================right container ================================================ */}
          
          <Grid item md={4} sm={12} xs={12}>
              <div className='right-container'>
              <Typography variant='subtitle1' style={{fontWeight:'bold'}}>Your Selection </Typography>
            
              {cart.length ? <Cart2/> : <Cartdummy /> }
          
          
           </div>
          </Grid>
      </Grid>
      </ThemeProvider>
        </>)
}

    
export default Orderdomain;