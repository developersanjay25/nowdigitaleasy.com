import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import './App.css';
import { preloaderr, stepperstepp } from './atoms/orderpage';
import Footer from './headerfooter/Footer';
import Header from './headerfooter/Header';
import Hompage from './homepage/Hompage';
import FullDomainProtection from './order/FullDomainProtection';
import LoginSignup from './loginsignup/Loginsignup';
import Proceedtopay from './order/Proceedtopay';
import Cart_step2 from './order/Cart-step2';

function getStep(step){
  switch(step){
    case 0:
      return <Hompage />
    case 1:
      return <Cart_step2 />
    case 2:
      return <LoginSignup/>
    case 3:
      return <Proceedtopay />
    }
}

function App() {
  const [stepperstep,setStepperStep] = useRecoilState(stepperstepp);
  const [preloader, setPreloader] = useRecoilState(preloaderr);
  
  return (
    <div className="App">
      <Header />
        
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={preloader}
      >
        <CircularProgress color="inherit" />
    </Backdrop>

        {getStep(stepperstep)}

      <Footer />  
     </div>
  );
}

export default App;
