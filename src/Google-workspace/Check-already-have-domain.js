import { Button, Divider, Slide, Stack, Typography } from '@mui/material'
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

        <Divider style={{position:'absolute', width:'100%', left:0}}/>
      
      <Stack direction='row' spacing={2} marginTop={2} justifyContent='flex-end'>
        <Button variant='contained' onClick={() => setStepperStep(2)}>yes</Button>
        <Button variant='contained' onClick={() => setStepperStep(3)}>no</Button>
      </Stack>

    </div>
    </Slide>
  )
}

export default CheckAlreadydomain