import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Typography } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil';
import {opendialogg} from '../atoms/hostingatoms';

function Offers() {

    const [open, setOpen] = useRecoilState(opendialogg);


    function addtocart() {
        setOpen(state => ({open : true}));
    }

  return (
    <div>
        
        
        <Paper elevation={3} className='offers-card'>
            <div>
                <Typography variant='h2'>Single Web Hosting</Typography>
                <Typography variant='h3'>Ideal solution for beginners</Typography>
            </div>

            <br />
            <br />
            <br />
                <Typography color='primary' variant='h3' ><del>₹349.00</del> &nbsp; <span className='text-with-background'>Save 68%</span></Typography>
            <br />    
                <Typography color='primary' variant='h1' >69.00 <span style={{fontSize:'18px'}}>/mo</span></Typography>
            <br />
                <Button onClick={addtocart} className='add-to-cart' variant='contained'>Add to cart</Button>
            <br />
            <br />
                <Typography color='primary' variant='h3' >₹159.00/mo when you renew</Typography>

                <div className='offers-content'>
                    <Typography variant='h3'>1 Website</Typography>
                    <Typography variant='h3'>30 GB SSD Storage</Typography>
                    <Typography variant='h3'>~10000 Visits Monthly </Typography>
                    <Typography variant='h3'>1 Email Account</Typography>
                    <Typography variant='h3'>Free SSL (₹855.00 value) </Typography>
                    <Typography variant='h3'>Free Domain</Typography>
                    <Typography variant='h3'>100 GB Bandwidth</Typography>
                    <Typography variant='h3'>Managed WordPress </Typography>
                </div>
        </Paper>
    </div>
  )
}

export default Offers