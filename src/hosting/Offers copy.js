import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil';
import {opendialogg} from '../atoms/hostingatoms';

function Offers(props) {

    const [open, setOpen] = useRecoilState(opendialogg);


    function addtocart(pid) {
        setOpen(state => ({...state,open : true,pid:pid}));
    }

    const data = props.data;
     return (
         <div>
        <Paper elevation={3} className='offers-card'>
        {data ?<> <div>
                <Typography variant='h2'>{data.name}</Typography>
                <Typography variant='h3'>Ideal solution for beginners</Typography>
            </div>

            <br />
            <br />
            <br />
                <Typography color='primary' variant='h3' ><del>₹ {(data.pricing.INR.monthly * 60 / 100).toFixed(2)}</del> &nbsp; <span className='text-with-background'>Save 68%</span></Typography>
            <br />    
                <Typography color='primary' variant='h1' >{data.pricing.INR.monthly} <span style={{fontSize:'18px'}}>/mo</span></Typography>
            <br />
                <Button onClick={() => addtocart(data.pid)} className='add-to-cart' variant='contained'>Add to cart</Button>
            <br />
            <br />
                <Typography color='primary' variant='h3' >₹{data.pricing.INR.monthly}/mo when you renew</Typography>

                <div className='offers-content'>
                    <Typography variant='h3'>1 Website</Typography>
                    <Typography variant='h3'>30 GB SSD Storage</Typography>
                    <Typography variant='h3'>~10000 Visits Monthly  </Typography>
                    <Typography variant='h3'>1 Email Account</Typography>
                    <Typography variant='h3'>Free SSL (₹855.00 value) </Typography>
                    <Typography variant='h3'>Free Domain</Typography>
                    <Typography variant='h3'>100 GB Bandwidth</Typography>
                    <Typography variant='h3'>Managed WordPress </Typography>
                </div></>
            
                :  <Skeleton sx={{ bgcolor: '#f7f7f7' }} variant="rectangular" width={250} height={600} animation='wave'/>}
                </Paper>
    </div> 
  )
}

export default Offers