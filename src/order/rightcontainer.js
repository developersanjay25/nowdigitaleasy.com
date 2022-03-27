import { Button, Grow, TextField, Typography, Zoom } from "@mui/material"
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartt, stepperstepp, totalamountt, yearss } from "../atoms/orderpage";
import RightCard from "./rightcard"
import * as icons from '@mui/icons-material'
import { ThemeProvider , createTheme } from '@mui/material/styles';
import axios from "axios";
import { red } from "@mui/material/colors";



// Theme
const theme = createTheme({
    palette: {
        primary:{
            main : '#ffffff'
        },
      secondary: {
            main: '#0050d7'
      }
    }
  });

function RightContainer(props){
    const [cart, setCart] = useRecoilState(cartt);
    const [years, setYears] = useRecoilState(yearss);
    const [stepperstep, setStepperStep] = useRecoilState(stepperstepp);
    const [totalamount,setTotalamount] = useRecoilState(totalamountt);
    const [promocode,setPromocode] = useState();
    const [promocoderesdata,setPromocoderesdata] = useState([]);
   

    useEffect(() => {
        var url = 'https://www.nowdigitaleasy.com/includes/api.php?action=getpromotions&password=phmxeN4UIiytvM36FsMUrQlQvgk4Jjce&username=drtRhPBjT6DRgioybheFOpPgfFKLPxOt&accesskey=ONEiaaxin_123&responsetype=json'
        axios.get(url).then((data) => {
            setPromocoderesdata(data.data.promotions.promotion);
            console.log(data.data.promotions.promotion)
        }).catch((err) => {
          console.log(err);
        })
    },[]);

    function promocodecheck(e) {
        promocoderesdata.map((item) => {
            if(e.target.value == item.code){
              setPromocode(e.target.value);
              console.log('promo',e.target.value)
            }
            else{
              console.log('promo empty');
              // setPromocode('');
            }
        });
    }


    function applypromocode(domain,price){
        let reducedcost;
        if(promocode){
            var splitdomain = domain.split('.')[1];
            
          
          promocoderesdata.map((item) => {
            console.log('requires',item.appliesto,splitdomain)
            let startdate = new Date(item.startdate);
            let expirydate = new Date(item.expirationdate);
            let today = new Date();

            if(startdate <= today && expirydate >= today){
            if(item.appliesto.split('.')[1] != null && item.appliesto.split('.')[1] == splitdomain){
                reducedcost = (Number(item.value) / 100) * Number(price);
                Updateamount(); 
                console.log('promo',reducedcost);
            }
          }
          else{
            // alert('expired')
            console.log('expired')
          }
        });
      }
      return reducedcost ? reducedcost.toFixed(2) : price;
    }


    const {pricing} = props;

    // =================================Update Total Amount======================================================
    useEffect(() => {
       Updateamount();
    },[cart,years])

    function Updateamount(){
      var amount = 0;

      cart.map((item,index) => {
        console.log(pricing[item.domain.split('.')[1]].register[years[index] ? years[index] : 1])
        let price = pricing[item.domain.split('.')[1]].register[years[index]];
        let reducedcost;
        var splitdomain = item.domain.split('.')[1];
        promocoderesdata.map((item) => {
          console.log('requires',item.appliesto,splitdomain)
          let startdate = new Date(item.startdate);
          let expirydate = new Date(item.expirationdate);
          let today = new Date();

          if(startdate > today && expirydate < today){
          if(item.appliesto.split('.')[1] == splitdomain){
              reducedcost = (Number(item.value) / 100) * Number(price);
              console.log('promo',reducedcost);
          }
        }
        
      });

      amount += reducedcost ? Number(reducedcost) : Number(price);
        
      });

      setTotalamount(amount.toFixed(2));
    }

  return (
    <Grow in={cart ? true : false}>
        <div>
  <div className="right" style={{backgroundColor:'rgba(15, 34, 231, 0.08)'}}>
  <RightCard applypromocode={applypromocode} pricing={pricing}/>
  </div>
  
  <ThemeProvider theme={theme}>
    <br/>
    
    <input type='text' placeholder="Coupen Code" className="coupen-code" onChange={promocodecheck}/>

<div className='right-conatiner-flex'>
  <Typography className='flex-basis'>Price <span style={{fontSize:'12px'}}>ex. Taxes /1st year</span></Typography>
  <Typography>Rs.{totalamount}</Typography>
  </div>


  <div className='right-conatiner-flex'>
  <Typography variant='h5'>Total</Typography>
  <Typography variant='h5'>Rs.{totalamount}</Typography>
  </div>
  </ThemeProvider>

  <input type='text' onClick={(e) => setStepperStep(1)} color="secondary" className='cutomised_order-btn' value='Continue Order'/>
  </div>
  </Grow>)
}

export default RightContainer