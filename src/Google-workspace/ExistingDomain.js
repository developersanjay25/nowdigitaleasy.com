import { Button, Divider, InputAdornment, Slide, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system';
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
    {/* <Stack alignItems='center' 
    divider={<Divider flexItem />}>
     */}
     <Box>
    <TextField variant='outlined' fullWidth error={error} 
    // label='Enter your Domain'
     InputProps={{
        startAdornment: (
            <InputAdornment position="start">
          WWW.
        </InputAdornment>
    )
    }}
    onChange={(e) => setEmailCart(state => ({...state, domainforgwork : e.target.value}))}/>
    <br />
    <br />

    <Divider flexItem style={{position:'absolute',width:'100%',left:0}}/>

    <Stack justifyContent='flex-end' alignItems='flex-end' paddingTop={2}>
    <Button variant='contained' onClick={addemailtocart}>Continue</Button>
    </Stack>
    {/* </Stack> */}
    </Box>
    </Slide>
    )
}

export default ExistingDomain