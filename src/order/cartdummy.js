import * as icons from '@mui/icons-material' 
import { Grow, Typography, Zoom } from '@mui/material'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { cartt } from '../atoms/orderpage'
import './cartdummy.css'

const Cartdummy = () => {
    const [cart,setCart] = useRecoilState(cartt);
return<>
        <Grow in={!cart.length}>
    <div className='dummy-cart-icon'>
        <icons.ShoppingCartOutlined style={{fontSize:'70px'}}/>
        <br />
        <Typography>Your Order Summary is empty</Typography>
    </div>
    </Grow>
</>
}

export default Cartdummy