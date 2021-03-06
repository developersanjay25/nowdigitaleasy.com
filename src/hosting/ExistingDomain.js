import { Button, Slide, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { g_emailCart, hostingdialogstepp } from '../atoms/hostingatoms';
import { cartt } from '../atoms/orderpage';

function ExistingDomain() {
    const [stepper,setStepper] = useRecoilState(hostingdialogstepp);
    const [emailCart, setEmailCart] = useRecoilState(g_emailCart);
    const [cart, setCart] = useRecoilState(cartt);
    const [error,setError] = useState(false);
 
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

    function validate(e){
        if(e.target.value.split('.')[1]){
            setEmailCart(state => ({...state, domainforgwork : e.target.value}))
        }
        else{

        }
    }

    return (
    <Slide in={(stepper == 2)} direction="left">
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <div>www.<TextField variant='standard' error={error} onChange={(e) => setEmailCart(state => ({...state, domainforgwork : e.target.value}))}/></div>
    <br />
    <Button variant='outlined' onClick={addemailtocart}>Continue</Button>
    </div>
    </Slide>
    )
}

export default ExistingDomain