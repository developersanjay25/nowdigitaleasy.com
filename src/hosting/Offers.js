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
                <Typography variant='h2' color='primary' style={{textTransform:'uppercase'}}>{data.name}</Typography>
                <Typography variant='h3'>Ideal solution for beginners</Typography>
            </div>
            <div className='offers-content'>
                    <Typography variant='h3'>✓ 30 GB SSD Storage</Typography>
                    <Typography variant='h3'>✓ 1 Website</Typography>
                    <Typography variant='h3'>~ 10000 Visits Monthly  </Typography>
                    <Typography variant='h3'>✓ 1 Email Account</Typography>
                    <Typography variant='h3'>✓ Free SSL (₹855.00 value) </Typography>
                    <Typography variant='h3'>✓ Free Domain</Typography>
                    <Typography variant='h3'>✓ 100 GB Bandwidth</Typography>
                    <Typography variant='h3'>✓ Managed WordPress </Typography>
            </div>
           <br />    
                <Typography color='primary' variant='h1' >{data.pricing.INR.annually} <span style={{fontSize:'18px'}}>/mo</span></Typography>
                <Typography color='primary' variant='body2' ><del>₹ {(data.pricing.INR.annually * 60 / 100).toFixed(2)}</del></Typography>

            <br />
                <Button onClick={() => addtocart(data.pid)} className='add-to-cart' variant='contained'>Add to cart</Button>
            <br />
            <br />
                <Typography color='primary' variant='h3' >₹{data.pricing.INR.annually}/yr when you renew</Typography>

            </>
            
                :  <Skeleton sx={{ bgcolor: '#f7f7f7' }} variant="rectangular" width={220} height={600} animation='wave'/>}
                </Paper>
    </div> 
  )
}

export default Offers
