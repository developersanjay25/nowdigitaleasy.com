import { Alert, Backdrop, CircularProgress, Snackbar, Step, StepLabel, Stepper } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { preloaderr, pricingg, snackbarr, stepperstepp } from '../atoms/orderpage';
import LoginSignup from '../loginsignup/Loginsignup';
import Orderdomain from './orderpage1';
import Proceedtopay from './Proceedtopay';

// Active component in stepper
function getStepcontent(activeStep) {
    switch (activeStep){
        case 0: 
            return <Orderdomain />
        case 1:
            return <LoginSignup />
        case 2:
          return <Proceedtopay />
    }
}

function Stepperwithcontent() {
    const [stepperstep,setStepperStep] = useRecoilState(stepperstepp);
    const [preloader,setPreloader] = useRecoilState(preloaderr);
    const [Snackbaropen,setSnackbaropen] = useRecoilState(snackbarr);
    const [pricingdata,setPricingdata] = useState(pricingg);



    const steps = [
        'Select',
        'Sign in',
        'Payment',
      ];


      // Snackbar
      const handleClose = (event) => {
        setSnackbaropen(state => ({...state, open : false}));
      };
    
  return (
      <>
    <div className='stepper'>

{/* Backdrop */}
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={preloader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* <Snackbar open={Snackbaropen.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={Snackbaropen.seviority} sx={{ width: '100%' }}>
          {Snackbaropen.message}
        </Alert>
      </Snackbar> */}

    {/* ======================================================Stepper========================================================== */}
          <Stepper activeStep={stepperstep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

    </div>
        {getStepcontent(stepperstep)}
    </>
  )
}

export default Stepperwithcontent