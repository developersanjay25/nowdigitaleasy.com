import React, { useEffect } from 'react'
import {AppBar , Button, Collapse, Divider, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import logo from '../images/logo.png'
import './header.css'
import * as icons from '@mui/icons-material';
import ReactGA from 'react-ga';

function Header() {
  const [openmenu,setOpenmenu] = React.useState(false);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(state => state ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    ReactGA.initialize('GTM-P34HK3J');
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[]);

  return (
      <div style={{height : '70px'}}>
    <AppBar elevation={0} className='appbar' style={{backgroundColor: 'white'}}>
            <Toolbar style={{minHeight:'70px'}}>
                <div className='navbar'>
                <img src={logo} style={{width : '173px',height : '54px'}}/>

                <IconButton className='menu-icon' onClick={() => {setOpenmenu(state => !state)}}>{openmenu ? <icons.Close /> : <icons.Menu />}</IconButton> 
        
                <ul>
                <li><Button color='primary' onClick={() => {window.location.href = '/domain'}} style={{fontWeight:'bold'}}>DOMAIN</Button></li>
                <li><Button color='primary' onClick={() => {window.location.href = '/hosting'}} style={{fontWeight:'bold'}}>HOSTING</Button></li>
                <li><Button color='primary' onClick={() => {window.location.href = '/google-workspace'}} style={{fontWeight:'bold'}}>GOOGLE WORKSPACE</Button></li>
                <li><Button color='primary' onMouseOver={handleClick} style={{fontWeight:'bold'}}>APPS</Button>
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
                </li>
                <li><Button color='primary' onClick={() => {window.location.href = 'https://nowdigitaleasy.com/blog/'}} style={{fontWeight:'bold'}}>BLOG</Button></li>
                <li><Button color='primary' style={{fontWeight:'bold'}}>SUPPORT</Button></li>
                </ul>
                
                <div className='btn-container'>
                <Button className='topbar-btn'  variant='contained' href='https://app.nowdigitaleasy.com/'>Sign in </Button>
                <Button className='topbar-btn' variant='contained' startIcon={<icons.ShoppingCartOutlined />}>Check out </Button>
                </div>

                </div>
            </Toolbar>
      
          
        <Collapse in={openmenu}>
            <div className='mobile-responsive'>
                
                <ul>
                <li><Typography color='primary' variant='h3'>DOMAIN</Typography></li>
                <Divider />
                <li><Typography color='primary' variant='h3'>G-SUITE</Typography></li>
                <Divider />
                <li><Typography color='primary' variant='h3'>GOOGLE WORKSPACE</Typography></li>
                <Divider />
                <li><Typography color='primary' variant='h3'>HOSTING</Typography></li>
                <Divider />
                <li><Typography color='primary' variant='h3'>EMAIL</Typography></li>
                <Divider />
                </ul>
                
                <div className='btn-container'>
                <Button className='topbar-btn' variant='outlined'>Sign in </Button>
                <Button className='topbar-btn' variant='outlined'>Check out</Button>
                </div>
        <br />
    </div>
    </Collapse>

    </AppBar>

    
    </div>
  )
}

export default Header