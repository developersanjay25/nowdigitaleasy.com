import { Button, Paper } from '@mui/material';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { invoiceidd, preloaderr, totalamountt } from '../atoms/orderpage';
import axios from 'axios'
import paymentproceed from '../images/Double Tick.png'
import Typography from '@mui/material/Typography';
import razorpay from '../images/razorpay.png'
import paypal from '../images/paypal.png'

function Proceedtopay() {

    const [totalamount,setTotalamount] = useRecoilState(totalamountt);
    const [invoiceid , setSetinvoiceid] = useRecoilState(invoiceidd);
    const [perloader , setPreloader] = useRecoilState(preloaderr);
    const [paymentprosssed , setpaymentprossed] = useState(false);
    
    
function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

    async function displayRazorpay(data) {
  
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
  
        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }
  
  
        // creating a new order    
        const options = {
          key: "rzp_test_LlNbRaLp6AdCf2", // Enter the Key ID generated from the Dashboard
          amount: totalamount * 100,
          currency: 'INR',
          name: "Iaaxin Tech Labs.",
          description: "Test Transaction",
          order_id:data.id,
          handler: async function (response) {
            console.log(response)  
            
            function getdate() {

              var now = new Date();

              var datetime = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

              return datetime;
            }
            console.log(invoiceid)
            console.log(response.razorpay_payment_id)
            setPreloader(true);

            var url = 'https://www.nowdigitaleasy.com/includes/api.php';

            const params =  {
              'action' : 'AddInvoicePayment',
              'username' : 'drtRhPBjT6DRgioybheFOpPgfFKLPxOt',
              'password' : 'phmxeN4UIiytvM36FsMUrQlQvgk4Jjce',
              'accesskey' : 'ONEiaaxin_123',
              'responsetype' : 'json',
              'invoiceid' : invoiceid,
              'transid' : response.razorpay_payment_id,
              'gateway' : 'razorpay',
              'date' : getdate(),
              'responsetype' : 'json',
          };
            axios.defaults.params = params
  
          console.log(params)
          axios.get(url).then((data) => {
                  console.log(data);
                  setPreloader(false);
                  setpaymentprossed(true);      
          } ).catch((err) => {
              console.log(err);
               setPreloader(false)
          })     
           
          },
          prefill: {
            name: "Iaaxin",
            email: "Iaaxin@Iaaxin.com",
            contact: "+911111111111",
          },
          notes: {
            address: "Iaaxin Tech Labs",
          },
          theme: {
            color: "#61dafb",
          },
        };
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
  }

  const paymentcss = {
    width : '100%',
    height : 'fit-content',
    display : 'flex',
    textAlign:'center',
    alignItems : 'center',
    flexDirection : 'column'
  }

  const paymentbtn ={
    margin:'10px',
  }

  return (
    <div style={{backgroundColor:'#fafafa',width:'70%'}}>
        <br />
        <br />

        {paymentprosssed ?  
        
        <div style={paymentcss}>
        <img src={paymentproceed} />
        <br />
        <Typography variant='h2'>Thanks for your Order</Typography>
        </div>

        : <div style={{textAlign:'left'}}>
          <Paper elevation={2} style={{padding:'20px'}}>
          <Typography variant='h2'>PLEASE CHOOSE YOUR PREFERRED METHOD OF PAYMENT.</Typography>
          <Button variant='outlined' style={paymentbtn} onClick={displayRazorpay}><img src={razorpay} height='70'/></Button>
         
          <Button variant='outlined' style={paymentbtn} onClick={displayRazorpay}><img src={paypal} height='70' width='126px'/></Button>
          </Paper>
          </div>
          }
        <br />
        <br />
    </div>
  )
}

export default Proceedtopay