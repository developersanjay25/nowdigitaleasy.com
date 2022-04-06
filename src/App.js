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
import Testimonials from './order/Testimonials';


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



        <Hompage />
        <Testimonials />
      <Footer />  
     </div>
  );
}

export default App;
