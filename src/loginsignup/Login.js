import { Typography , TextField , Button, Snackbar, Alert, Paper} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { cartt, invoiceidd, preloaderr, snackbarr, stepperstepp, yearss } from '../atoms/orderpage';
import { Satellite } from '@mui/icons-material';

function Login() {
    const [data,setData] = useState({
        email : {
            data : '',
            err : false,
            errtext : ''
        },
        password : {
            data : '',
            err : false,
            errtext : ''
        }
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
      });
    const [logged ,setLogin] = useState(false);
    const url = `https://www.nowdigitaleasy.com/includes/api.php`


    const login = () => {
        setPreloader(true);
        // if(data.email)
        console.log(data)
        
        
        axios.defaults.params =  {
            'action' : 'ValidateLogin',
            'username' : 'drtRhPBjT6DRgioybheFOpPgfFKLPxOt',
            'password' : 'phmxeN4UIiytvM36FsMUrQlQvgk4Jjce',
            'accesskey' : 'ONEiaaxin_123',
            'responsetype' : 'json',
            'email' : `${data.email.data}`,
            'password2' : data.password.data 
        };


        if(!data.email.data){
            setData(state  => ({...state,email : ({...data.email , err : true, errtext : 'Enter a valid email'})} ))
        }
        else{
            setData(state  => ({...state,email : ({...data.email , err : false, errtext : ''})} ))
        }

        if(!data.password.data){
            setData(state  => ({...state,password : ({...data.password , err : true , errtext : 'Enter password'})} ))
        }
        else {
            setData(state  => ({...state,password : ({...data.password , err : false, errtext : ''})} ))
        }

        axios.get(url).then((data) => {
            console.log(data);
            if(data.data.result == 'success'){
                setLogin(true);
            }
            else if(data.data.result == 'error'){
                setSnackbaropen({open : true , message : data.data.message, seviority : 'error'});
                setPreloader(false)
            }
        }).catch((err) => {
            console.log(err.response);
        });


        }

// =====================================================Get client id=========================================================================
useEffect(() => {

    axios.defaults.params =  {
        'action' : 'GetUsers',
        'username' : 'drtRhPBjT6DRgioybheFOpPgfFKLPxOt',
        'password' : 'phmxeN4UIiytvM36FsMUrQlQvgk4Jjce',
        'accesskey' : 'ONEiaaxin_123',
        'responsetype' : 'json',
        'search' : `${data.email.data}`,
    };

    if(logged){
    axios.get(url).then((data) => {
            console.log(data);
            if(data.data.result == "success"){
            setClientid(data.data.users[0].clients[0].id)
            console.log(data.data.users[0].clients[0].id);
        }
    } ).catch((err) => {
        console.log(err);
        setPreloader(false);
    })     
}
},[logged])


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
       <div className='login'>

        <Snackbar open={Snackbaropen.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={Snackbaropen.seviority} sx={{ width: '100%' }}>
            {Snackbaropen.message}
            </Alert>
        </Snackbar>

        <TextField  fullWidth error={data.email.err} helperText={data.email.errtext} onChange={e => setData({...data , email : ({data : e.target.value})})} style={{backgroundColor:'white'}} label='Email' type='email'/>
        <br />
        <TextField  fullWidth error={data.password.err} helperText={data.password.errtext} onChange={e => setData({...data , password : ({ data  : e.target.value})})}  style={{backgroundColor:'white'}} label='pasword' type='password'/>
        <br />
        <Button onClick={login} variant='contained'>Login</Button>
    </div>
  )
}

export default Login