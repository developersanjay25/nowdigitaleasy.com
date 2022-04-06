import { Button, Typography, MenuItem, Select, IconButton, Divider } from "@mui/material";
import { useRecoilState } from "recoil";
import * as icons from '@mui/icons-material'
import {cartt,carticon, alldomains, yearss, pricingg} from '../atoms/orderpage'
import { useEffect, useLayoutEffect, useState } from "react";
import { margin } from "@mui/system";


const RightCard = (props) => {
    const [cart,setCart] = useRecoilState(cartt);
    const [years,setYears] = useRecoilState(yearss);
    const [pricing,setPricingdata] = useRecoilState(pricingg);

    const { applypromocode } = props;
  

    console.log('years',years)

    // ==============================================Drop down for how much years==================================================
    const changedropdown = (e,index) => {
        setYears(years.map((item,ind) => 
          ind === index 
          ? e.target.value
          : item 
  ))
    }

    // console.log('pricing',applypromocode(cart[0].domain,pricing[cart[0].domain.split('.')[1]].register[1]),years);

    //  =======================================Delete items on click=============================================================
      function deleteitems(e){
      setCart(state => state.filter(item => item.domain != cart[e].domain));
      var temp = [...years]
      temp.splice(e, 1);
      setYears(temp);
    }
  
    console.log('pricing',pricing['com'].register[1])

      return (<>
      {/* <TransitionGroup> */}
        {cart.map((item,index) =>  {
          if(item.type){

          }
          else{
          return <><div className='right-container-cards'>
                  
                  <div className='left-container-left-flex'>
                  <Typography style={{fontSize:'16px',fontWeight:'bold'}} color='secondary'>{item.domain}</Typography>
                  <Typography style={{fontSize:'12px',fontWeight:'bold'}} color='secondary' >.{item.domain.split('.')[1]} Domain registration</Typography>
                
      {/* =====================================================drop down======================================================= */}

                  <select value={years[index] ? years[index] : 1} onChange={(e) => changedropdown(e,index)} className="dropdown">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                  </div>
      
                  <div className='right-container-right-flex'>
                  <Typography style={{fontSize:'16px',fontWeight:'bold'}} color='primary'>&#x20b9;{ applypromocode(item.domain,pricing[item.domain.split('.')[1]].register[years[index]])}</Typography>
                  <Typography style={{fontSize:'14px',fontWeight:'bold',color:'grey'}} ><del>&#x20b9; {((item.domain,pricing[item.domain.split('.')[1]].register[years[index]]) * 1.5).toFixed(2)}</del></Typography>
                  </div>
  
  
                  <div className='delete-btn-right-container'>
                  <IconButton color='secondary'  onClick={() => deleteitems(index)}><icons.DeleteOutline/></IconButton>
                  </div>
          </div>
           </>}
           } 
           )}
        {/* </TransitionGroup> */}
        </>
      );
}

export default RightCard;