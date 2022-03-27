import { Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import './fulldomainprotection.css' 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRecoilState } from 'recoil';
import { stepperstepp } from '../atoms/orderpage';

function FullDomainProtection() {
    const [radiovalue, setRadiovalue] = useState('');
    const [stepperstep, setStepperStep ] = useRecoilState(stepperstepp);


    const handleChange = (e) => {
            setRadiovalue(e.target.value);
            console.log(e.target.value)
    }

    const nextstep = (e) => {
        setStepperStep(state => state+1);
    } 

  return (
    <div className='full-domain-protection'>
        <div>
            <br />
            <Grid container spacing={5}>
            <Grid item md={8}>
            <Typography variant='h2'>170,000 times every year.</Typography>
            <Typography variant='p'>That’s how often criminals attempt to steal domains. If your business is built on your domain, you need protection. We highly recommend Full Domain Protection, but it is an optional feature.</Typography>
            
            <RadioGroup
                name="controlled-radio-buttons-group"
                value={radiovalue}
                onChange={handleChange}
            >

                {/* ==========================================================================Full Domain protection======================================================================== */}
                <div style={{display:'flex',justifyContent:'space-between'}}>
                
                <div style={{width : '50%'}}>
                <FormControlLabel value="full-domain-protection" control={<Radio />} label="Full Domain Protection" />
                <br />
                
                <ul>
                    <li><Typography variant='p'>Prevents hackers from stealing your domain or making any other unauthorized changes.</Typography></li>​
                    <li><Typography variant='p'>Requires your approval via 2-factor verification for vital changes like deleting or transferring a domain.</Typography></li>
                </ul>

                </div>

                <Typography variant='h3'>250 R.s Domain/year</Typography>
                </div>


                {/* ==========================================================================Ultimate Domain protection======================================================================== */}

                <div style={{display:'flex',justifyContent:'space-between'}}>
                
                <div style={{width : '50%'}}>
                <FormControlLabel value="ultimate-protection" variant='h2' control={<Radio/>} label="Ultimate Domain Protection" />
                <br />
                
                <ul>
                    <li><Typography variant='p'>Everything in Full Domain Protection, plus</Typography></li>​
                    <li><Typography variant='p'>Hold on to your domain name for an extra 90 days if your credit card or your billing method expires.</Typography></li>
                </ul>
                
                </div>


                <Typography variant='h3'>250 R.s Domain/year</Typography>
                </div>


                {/* ==========================================================================No Thanks======================================================================== */}
                <FormControlLabel value="no-thanks" variant='h2' control={<Radio/>} label="No Thanks" />
            </RadioGroup>

            <br />
            
            
    {/* ==========================================================================Email matches domain======================================================================== */}
        <Typography variant='h2'>Create an email address that matches your domain.</Typography>
        <Typography variant='p'>Look professional and build trust with a custom email address like You@theclaz.com</Typography>

        <br />
        <br />

        <div>
        <Typography variant='p' style={{width : '200px'}}>10GB per mailbox</Typography><br />
        <Typography variant='p' style={{width : '200px'}}> Industry-leading spam and virus protection</Typography><br />
        <Typography variant='p' style={{width : '200px'}}> Works with Outlook, Apple Mail and other clients</Typography><br />
        </div>

        <br />
        <Typography variant='p' style={{width : '200px'}}> As low as ₹ 29.00/mo</Typography>

        <RadioGroup
                name="controlled-radio-buttons-group"
                value={radiovalue}
                onChange={handleChange}
            >
                <FormControlLabel value="proffessional-email" control={<Radio />} label="Professional Email ₹ 29 per / mon" />
                <FormControlLabel value="nothanks" control={<Radio />} label="No Thanks" />
        </RadioGroup>
        </Grid>


        <Grid item md={1}>
        </Grid>

        <Grid item md={3}>
        <div className='continue-cart-2'>
            <Button variant='contained' onClick={nextstep} endIcon={<ShoppingCartIcon />} >Continue Cart</Button>
        </div>
        </Grid>

        </Grid>
        </div>
    </div>
  )
}

export default FullDomainProtection