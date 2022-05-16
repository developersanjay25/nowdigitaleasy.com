import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Googleworkspace from './Google-workspace/Gsuite';
import Hosting from './hosting/Hosting';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import {RecoilRoot} from 'recoil'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart_step2 from './order/Cart-step2';
import LoginSignup from './loginsignup/Loginsignup';
import Proceedtopay from './order/Proceedtopay';
import About from './details/About';
import PrivacyPolicy from './details/PrivacyPolicy';
import TermsandConditions from './details/TermsandConditions';
import Marketting from './marketting/Marketting';

ReactDOM.render(
  <React.StrictMode>
      <RecoilRoot>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Routes> 

      <Route path='/' element={<App />} />
      <Route path='/domain' element={<App />} />
      <Route path='/hosting' element={<Hosting />} />
      <Route path='/cart' element={<Cart_step2 />} />
      <Route path='/login' element={<LoginSignup />} />
      <Route path='/payment' element={<Proceedtopay />} />
      <Route path='/google-workspace' element={<Googleworkspace />} />
      <Route path='/about' element={<About />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/termsandconditions' element={<TermsandConditions />} />
      <Route path='/marketting' element={<Marketting />} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
