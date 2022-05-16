import { Button, Stack, Typography } from '@mui/material'
import { Box, fontWeight } from '@mui/system'
import React, { useRef } from 'react'
import mailimage from '../images/Woman with laptop sends mail around the world.png'

function Moredetailsbox(props) {
    const {planname, image} = props;
    const ref = useRef();

  return (
    <Stack spacing={2} 
    // alignItems='center'
    margin={1}
    paddingTop={2}
    ref={ref}
    style={{border:'1px solid #c7c2c2',color:'#646464'}}
    >
            <Stack alignItems='center'>
            <img src={image} height='100px' width='100px'/>    
            </Stack>

            <Typography 
            variant='body1' 
            padding={1}
            height={75}
            >{props.content}
            </Typography>
            
            <Box
            alignItems='center'
            justifyContent='stretch'
            sx={{backgroundColor:'#1642C6', color:'white', padding:'15px'}}
            >
                <Typography variant='h3' sx={{ textTransform: 'uppercase'}}>{planname}</Typography>
            </Box>

            <Stack alignItems='left' textAlign='left'>
                <ul>
                    <li><Typography variant='body2'>lorel ipssdskljjghkg jfgfhgf  jfkfghdh</Typography></li>
                    <li><Typography  variant='body2'>lorel ipssdskljjghkg jfgfhgf  jfkfghdh</Typography></li>
                    <li><Typography  variant='body2'>lorel ipssdskljjghkg jfgfhgf  jfkfghdh</Typography></li>
                    <li><Typography  variant='body2'>lorel ipssdskljjghkg jfgfhgf  jfkfghdh</Typography></li>
                </ul>
            </Stack>

          <Stack alignItems='center'>
            <Button color='secondary'
             variant='contained'
             style={{color:'white',
             backgroundColor:'#05CC19',
             fontWeight:'700',
             borderRadius:'20px'
            }}
            disableElevation
            >Explore plan</Button>
            </Stack>
            <br />
    </Stack>
  )
}

export default Moredetailsbox