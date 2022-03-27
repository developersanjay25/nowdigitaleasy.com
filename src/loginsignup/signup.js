import { Alert, Button, Checkbox, Snackbar, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { cartt, invoiceidd, preloaderr, stepperstepp, yearss } from '../atoms/orderpage';
import { useRecoilState } from 'recoil';

function Signup() {
    const [data , setData] =useState({
        firstName : {
            err : false,
            errtext : '',
            data : ''
        },
        lastName : {
            err : false,
            errtext : '',
            data : ''
        },
        email : {
            err : false,
            errtext : '',
            data : ''
        },
        password : {
            err : false,
            errtext : '',
            data : ''
        },
        address : {
            err : false,
            errtext : '',
            data : ''
        },
        city : {
            err : false,
            errtext : '',
            data : ''
        },
        state : {
            err : false,
            errtext : '',
            data : ''
        },
        postcode : {
            err : false,
            errtext : '',
            data : ''
        },
        country : 'in',
        phonenumber : {
            err : false,
            errtext : '',
            data : ''
        } ,
    });
    const [clientid , setClientid] = useState();
    const [cart , setCart] = useRecoilState(cartt);
    const [year , setYears] = useRecoilState(yearss);
    const [stepperstep , setStepperStep] = useRecoilState(stepperstepp);
    const [invoiceid , setSetinvoiceid] = useRecoilState(invoiceidd);
    const [preloader,setPreloader] = useRecoilState(preloaderr);
    const [Snackbaropen,setSnackbaropen] = useState({
      seviority : '',
      open : false,
      message : ''
    })

    const signupcss = {
      backgroundColor : 'white',
      padding : '20px',
      width : '400px',
      // margin : '20px',
      textAlign : 'center'
    }


    console.log(data)

    const signup = () => {

      setPreloader(true);

      if(!data.firstName.data){
            setData(state => ({...state , firstName : ({...state.firstName , err : true , errtext : 'Enter first name'})}));
      }
      else{
        setData(state => ({...state , firstName : ({...state.firstName , err : false , errtext : ''})}));
      }
      if(!data.lastName.data){
        setData(state => ({...state , lastName : ({...state.lastName , err : true , errtext : 'Enter last name'})}));
      }
      else{
        setData(state => ({...state , lastName : ({...state.lastName , err : false , errtext : '' })}));
      }

      if(!data.email.data){
        setData(state => ({...state , email : ({...state.email , err : true , errtext : 'Enter Valid email'})}));
      }
      else{
        setData(state => ({...state , email : ({...state.email , err : false , errtext : ''})}));
      }

      if(!data.password.data){
        setData(state => ({...state , password : ({...state.password , err : true , errtext : 'Enter password'})}));
      }
      else{
        setData(state => ({...state , password : ({...state.password , err : false , errtext : ''})}));
      }

      if(!data.address.data){
        setData(state => ({...state , address : ({...state.address , err : true , errtext : 'Enter Address'})}));
      }
      else{
        setData(state => ({...state , address : ({...state.address , err : false , errtext : ''})}));
      }

      if(!data.city.data){
        setData(state => ({...state , city : ({...state.city , err : true , errtext : 'Enter city'})}));
      }
      else{
        setData(state => ({...state , city : ({...state.city , err : false , errtext : ''})}));
      }
      if(!data.state.data){
        setData(state => ({...state , state : ({...state.state , err : true , errtext : 'Enter State'})}));
      }
      else{
        setData(state => ({...state , state : ({...state.state , err : false , errtext : ''})}));
      }

      if(!data.postcode.data){
        setData(state => ({...state , postcode : ({...state.postcode , err : true , errtext : 'Enter Postcode'})}));
      }
      else{
        setData(state => ({...state , postcode : ({...state.postcode , err : false , errtext : ''})}));
      }

      if(data.phonenumber.data.length === 10){
        setData(state => ({...state , phonenumber : ({...state.phonenumber , err : false , errtext : ''})}));
      }
      else{
        setData(state => ({...state , phonenumber : ({...state.phonenumber , err : true , errtext : 'Enter Phone number'})}));
      }



        axios.defaults.params =  {
            'action' : 'AddClient',
            'username' : 'drtRhPBjT6DRgioybheFOpPgfFKLPxOt',
            'password' : 'phmxeN4UIiytvM36FsMUrQlQvgk4Jjce',
            'accesskey' : 'ONEiaaxin_123',
            'firstname' : data.firstName.data,
            'lastname' : data.lastName.data,
            'email' : data.email.data,
            'address1' : data.address.data,
            'city' : data.city.data,
            'state' : data.state.data,
            'postcode' : data.postcode.data,
            'country' : 'IN',
            'phonenumber' : data.phonenumber.data,
            'password2' : data.password.data,
            'responsetype' : 'json',
          }
        const url = `https://www.nowdigitaleasy.com/includes/api.php`
        
        axios.post(url).then((data) => {
                console.log(data);

                if(data.data.result == 'success'){
                    setClientid(data.data.clientid)
                }
                else if(data.data.result == 'error'){
                  setSnackbaropen({open : true , message : data.data.message, seviority : 'error'});
                  setPreloader(false)
              }

        }).catch((err) => {
            console.log(err.response);
            setPreloader(false);

        });
    }


    // place order
    var domain= [],domaintype = [],regperiod = [];

    useEffect(() => {

      cart.map((item,index) => {
          domain.push(item.domain);
          domaintype.push('register');
          regperiod.push(year[index])
      })


      const url = `https://www.nowdigitaleasy.com/includes/api.php`
      
      axios.defaults.params =  {
          'action' : 'addorder',
          'username' : 'drtRhPBjT6DRgioybheFOpPgfFKLPxOt',
          'password' : 'phmxeN4UIiytvM36FsMUrQlQvgk4Jjce',
          'accesskey' : 'ONEiaaxin_123',
          'clientid' : clientid,
          'domain' : domain,
          'domaintype' : domaintype,
          'regperiod' : regperiod,
          'nameserver1' : 'ns1.demo.com',
          'nameserver2' : 'ns2.demo.com',
          'paymentmethod' : 'razorpay',
          'responsetype' : 'json',
      };

      if(clientid){
          axios.get(url).then((data) => {
              console.log(data);
              if(data.data.result == "success"){
                  console.log('success');
                  setSetinvoiceid(data.data.invoiceid);
                  setStepperStep(state => state+1);
                  setPreloader(false);
              }
          }).catch((err) => {
              console.log(err);
              setPreloader(false);
              setPreloader(false);
          })     
      }

  },[clientid])

   // Snackbar
   const handleClose = (event) => {
    setSnackbaropen(state => ({...state, open : false}));
  };

  return (
    <div className='signup' style={signupcss}>

        <Snackbar open={Snackbaropen.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={Snackbaropen.seviority} sx={{ width: '100%' }}>
            {Snackbaropen.message}
            </Alert>
        </Snackbar>
  
        <br />
        <TextField fullWidth error={data.firstName.err} helperText={data.firstName.errtext} onChange={e => setData(state => ({ ...state ,firstName : ({...state.firstName , data : e.target.value})}) )} style={{backgroundColor:'white'}} label='First name'/>
        <br />
        <TextField fullWidth error={data.lastName.err} helperText={data.lastName.errtext} onChange={e => setData(state =>({ ...state ,lastName : ({...state.lastName , data : e.target.value})}) )} style={{backgroundColor:'white'}} label='Last name'/>
        <br />
        <TextField fullWidth error={data.email.err} helperText={data.email.errtext} onChange={e => setData(state => ({ ...state ,email : ({...state.email , data : e.target.value})}) )} style={{backgroundColor:'white'}} label='Email'/>
        <br />
        <TextField fullWidth error={data.phonenumber.err} helperText={data.phonenumber.errtext} onChange={e => setData(state => ({ ...state ,phonenumber : ({...state.phonenumber , data : e.target.value})}) )} style={{backgroundColor:'white'}} label='Phone number'/>
        <br />
        <TextField fullWidth error={data.password.err} helperText={data.password.errtext} onChange={e => setData(state => ({ ...state ,password : ({...state.password , data : e.target.value})}) )} style={{backgroundColor:'white'}} label='Password'/>
        <br />
        <TextField fullWidth error={data.address.err} helperText={data.address.errtext} onChange={e => setData(state => ({ ...state ,address : ({...state.address , data : e.target.value})}) )} style={{backgroundColor:'white'}} label='Address'/>
        <br />
        <TextField fullWidth error={data.city.err} helperText={data.city.errtext} onChange={e => setData(state => ({ ...state ,city : ({...state.city , data : e.target.value})}))} style={{backgroundColor:'white'}} label='City'/>
        <br />
        <TextField fullWidth error={data.state.err} helperText={data.state.errtext} onChange={e => setData(state => ({ ...state ,state : ({...state.state , data : e.target.value})}))} style={{backgroundColor:'white'}} label='State'/>
        <br />
        <TextField fullWidth error={data.postcode.err} helperText={data.postcode.data} onChange={e => setData(state =>({...state , postcode : ({...state.state , postcode : e.target.value})}) )} style={{backgroundColor:'white'}} label='Post code'/>
        <br />
        <Button onClick={signup} variant='contained'>Create an account</Button>
        <br />
        <Typography><Checkbox /> I confirm that I am over 18 and accept the Terms and conditions</Typography>
    </div>
  )
}

export default Signup