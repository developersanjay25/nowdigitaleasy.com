import { Button, Paper, Stack, Typography, Grid, Divider } from '@mui/material'
import React from 'react'

const planlist = [
     [
     {'type' : 'Fan Page Creation',applicable : true},
     {'type' : 'Wall Page Design',applicable : true}, 
     {'type' : 'Profile Content Writing', applicable : true}, 
     {'type' : 'Daily Postings 2',applicable : true},
     {'type' : 'Daily Shares 2',applicable : true},  
     {'type' : 'Keyword Based Content for Postings',applicable : true}, 
     {'type' : 'Photo Album',applicable : true}, 
     {'type' : 'Video Uploads',applicable : false}, 
     {'type' : 'Facebook Quiz / Polls ',applicable : false}, 
     {'type' : 'Monitor Activity 2 X per day',applicable : true},
     {'type' : 'Deleting of unwanted spam',applicable : true},
     {'type' : 'Research and like relevant pages',applicable : true},
     {'type' : 'Ad management (spent extra)',applicable : true},
     {'type' : 'Fortnightly Reporting',applicable : true},
     ],
    [
        {'type' : 'Fan Page Creation',applicable : true},
        {'type' : 'Wall Page Design',applicable : true}, 
        {'type' : 'Profile Content Writing', applicable : true}, 
        {'type' : 'Daily Postings 2',applicable : true},
        {'type' : 'Daily Shares 2',applicable : true},  
        {'type' : 'Keyword Based Content for Postings',applicable : true}, 
        {'type' : 'Photo Album',applicable : true}, 
        {'type' : 'Video Uploads',applicable : true}, 
        {'type' : 'Facebook Quiz / Polls ',applicable : true}, 
        {'type' : 'Monitor Activity 2 X per day',applicable : true},
        {'type' : 'Deleting of unwanted spam',applicable : true},
        {'type' : 'Research and like relevant pages',applicable : true},
        {'type' : 'Ad management (spent extra)',applicable : true},
        {'type' : 'Fortnightly Reporting',applicable : true},
    ],
    [
        {'type' : 'Fan Page Creation',applicable : true},
        {'type' : 'Wall Page Design',applicable : true}, 
        {'type' : 'Profile Content Writing', applicable : true}, 
        {'type' : 'Daily Postings 2',applicable : true},
        {'type' : 'Daily Shares 2',applicable : true},  
        {'type' : 'Keyword Based Content for Postings',applicable : true}, 
        {'type' : 'Photo Album',applicable : true}, 
        {'type' : 'Video Uploads',applicable : false}, 
        {'type' : 'Facebook Quiz / Polls ',applicable : false}, 
        {'type' : 'Monitor Activity 2 X per day',applicable : true},
        {'type' : 'Deleting of unwanted spam',applicable : true},
        {'type' : 'Research and like relevant pages',applicable : true},
        {'type' : 'Ad management (spent extra)',applicable : true},
        {'type' : 'Fortnightly Reporting',applicable : true},
    ]
]

    const pricelist = [
        {planname : 'FACEBOOK PAGE STANDARD',price : '₹22,500'},
        {planname : 'FACEBOOK PAGE PREMIUM',price : '₹35,500'},
        {planname : 'GOOGLE PAGE STANDARD',price : '₹22,500'},
    ]

function PlanandPrice() {
  return (
    <>
        <Stack alignItems='center'>
            <Typography variant='h2'>Put an end to stab-in-the-dark advertising</Typography>
        </Stack>

        <Grid container maxWidth={1100} padding={2} spacing={3} margin='auto'>
        {planlist.map((item,ind) => {
           return <Grid key={'plan1'+ind} item md={4} sm={4} xs={6}>
                <Plan planlist1={item} ind={ind}/>
            </Grid>
        })}
        </Grid>
    </>
  )
}

export default PlanandPrice


const Plan = (props) => {
    const {ind,planlist1} = props
    return <Paper spacing={2} elevation={2}>
        <Stack alignItems='center' padding={2} spacing={2}>
        <Typography variant='h2'>{pricelist[ind].planname}</Typography>
        <Typography color='primary' variant='h3'>{pricelist[ind].price} <span style={{color:'gray'}}>INR</span></Typography>
        <Typography variant='h3'>+ GST / Month</Typography>
        <Button variant='contained' color='secondary' disableElevation style={{color:'white',borderRadius:'20px'}}>get started</Button>
        </Stack>

        <Divider variant='middle'/>

        <Stack textAlign='left' alignItems='flex-start' padding={2} spacing={1}>
        {planlist1.map((item,ind) => {
            return <Typography key={'planlist1'+ind}>{item.applicable ? '✔️' : '❌'} {item.type}</Typography>
        })}
        </Stack>

    </Paper>
}