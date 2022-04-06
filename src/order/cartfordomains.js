import { Button, Divider, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import arr from './orderpage1'
import * as icons from '@mui/icons-material'
import {cartt,carticon, cartticon, alldomains, pricingg} from '../atoms/orderpage'

const Card = (props) => {
    const [cart,setCart] = useRecoilState(cartt);
    const [carticon,setCarticon] = useRecoilState(cartticon);
    // const [alldomain,setAllDomain] = useRecoilState(alldomains);
    const [pricing,setPricingdata] = useRecoilState(pricingg);
    
    const {alldomain} = props;
    
   
    const addtocartstyle = {marginLeft:'10px',borderRadius:'40px',boxShadow:'none',padding:'10px 30px'};
    
    function addtocart(e){
    if(alldomain[e].available){
        const search = cart.find(item => item.domain == alldomain[e].domain)
        console.log('search',search);
        console.log('adding')

        if(!search){
          setCart(state => [ ...state , alldomain[e] ]);
        }
        }
  }

  
  return (<>{(alldomain.map((arr,ind) => <div className='left-container-cards'>
              <div className='left-container-left-flex'>
              <Typography style={{fontSize:'1.2em',fontWeight:'700'}} color='primary'>{arr.domain}</Typography>
              </div>
  
              <div className='left-container-right-flex'>

              <Typography variant='p' className="save-content">SAVE 50%</Typography>

              <div style={{margin:'10px',width:'130px',display:'flex'}}>


              <div>
              <Typography style={{fontSize:'14px'}}>{arr.salePrice ?  <del>{pricing[arr.domain.split('.')[1]].register[1] * 1.5}</del> : `` }</Typography>
              <Typography style={{fontSize:'26px',fontWeight:'bold'}} color='primary'> {arr.salePrice ?  '₹ ' + pricing[arr.domain.split('.')[1]].register[1] : `Can't find` }</Typography>
              </div>
              
              </div>

              <Button  variant='contained' onClick={() => addtocart(ind)}  color='primary' style={addtocartstyle}>Add to cart</Button>
              <Divider />
              </div>
      </div>)
  
  )}
  </>
  );
  }

  export default Card