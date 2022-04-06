import { Button, Slide, Typography } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil';
import { hostingdialogstepp } from '../atoms/hostingatoms';

function CheckAlreadydomain() {
  const [stepperstep, setStepperStep] = useRecoilState(hostingdialogstepp);

  const center ={
      display : 'flex',
      justifyContent : 'center'
  }
  return (
    <Slide in={(stepperstep == 1)} direction="left">
    <div>
        <Typography variant='h2'>Do you already own a Domain Name?</Typography>
        <br />
        <div style={center}>
        <Button variant='contained' onClick={() => setStepperStep(2)}>yes</Button>&nbsp;&nbsp;
        <Button variant='contained'>no</Button>
        </div>
    </div>
    </Slide>
  )
}

export default CheckAlreadydomain