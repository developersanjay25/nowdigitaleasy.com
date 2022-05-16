import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import marketting from '../images/marketting/marketting.png'

function Container1() {
  return (<>
    <div style={{backgroundColor:'#1642C6',color:'white'}}>
        <Grid container>
        
        <Grid item md={8} sm={8} xs={12} spacing={2} padding={6}>
        
        <Stack spacing={2} alignItems='flex-start'>
        <Typography variant='h4'>PPC Services</Typography>
        <Typography variant='h1'>Pay-per-click <br />is the trick.</Typography>
        <Typography variant='h2'>Get your paid ads working as hard as you do with help from a PPC expert.</Typography>

        <Button variant='contained' color="secondary" style={{color:'white'}}>Request a call</Button>

        <Typography variant='h3'>Or call use now</Typography>
        <Typography variant='h2'>+91-9894111975</Typography>
        </Stack>

        </Grid>
        
        </Grid>
    </div>

    <Stack alignItems={'flex-end'} marginTop={'-250px'}>
     <img src={marketting} height={400} />
    </Stack>
    
    </>
  )
}

export default Container1