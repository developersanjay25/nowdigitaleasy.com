import React, { useEffect } from 'react'
import {AppBar , Button, Collapse, Divider, IconButton, Menu, MenuItem, Toolbar, Box, Stack} from '@mui/material'
import logo from '../images/logo.png'
import './header.css'
import * as icons from '@mui/icons-material';

function Header() {
  const [openmenu,setOpenmenu] = React.useState(false);


  return (<>
  <Box 
  sx={{background:'linear-gradient(to right, #1642c6 ,#1642C6,  #0B2163)',
  minHeight:'10px'}}></Box>

  <div style={{height : '70px'}}>
    <AppBar elevation={0} className='appbar' style={{backgroundColor: 'white'}} position='sticky'>
            <Toolbar sta style={{minHeight:'70px'}}>
                <div className='navbar'>
                
                <a href='/' >
                <img src={logo} style={{width : '173px',height : '54px'}}/>
                </a>

                <IconButton className='menu-icon' onClick={() => {setOpenmenu(state => !state)}}>{openmenu ? <icons.Close /> : <icons.Menu />}</IconButton> 
        
               
               <Menuitems />
               

                </div>
            </Toolbar>
      
          
        <Collapse in={openmenu}>
            <div className='mobile-responsive'>
          <Menuitems />
  
        <br />
    </div>
    </Collapse>

    </AppBar>

    
    </div>
    </>
  )
}

function Menuitems() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(state => state ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<> <ul>
    <li><Button color='primary' onClick={() => {window.location.href = '/domain'}} style={{fontWeight:'bold'}}>DOMAIN</Button></li>
    <li><Button color='primary' onClick={() => {window.location.href = '/hosting'}} style={{fontWeight:'bold'}}>HOSTING</Button></li>
    <li><Button color='primary' onClick={() => {window.location.href = '/google-workspace'}} style={{fontWeight:'bold'}}>GOOGLE WORKSPACE</Button></li>
    {/* <li><Button color='primary' onClick={handleClick} style={{fontWeight:'bold'}}>APPS</Button>
  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    <MenuItem onClick={handleClose}>Track Eye</MenuItem>
    <MenuItem onClick={handleClose}>Nde Connect</MenuItem>
  </Menu>
    </li> */}
    <li><Button color='primary' variant='text' onClick={() => {window.location.href = '/marketting'}} style={{fontWeight:'bold'}}>marketing</Button></li>
    <li><Button color='primary' onClick={() => {window.location.href = 'https://nowdigitaleasy.com/blog/'}} style={{fontWeight:'bold'}}>BLOG</Button></li>
    <li><Button color='primary' style={{fontWeight:'bold'}}>SUPPORT</Button></li>
    </ul>

<Stack spacing={2} direction='row'>
<Button className='topbar-btn'  variant='contained' href='https://app.nowdigitaleasy.com/'>Sign in </Button>
<Button className='topbar-btn' variant='contained' href='/cart' startIcon={<icons.ShoppingCartOutlined />}>Check out </Button>
</Stack>
</>
    )
}

export default Header