import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Googleworkspace from './Google-workspace/Hosting';
import Hosting from './hosting/Hosting';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import {RecoilRoot} from 'recoil'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
      <BrowserRouter>
      <Routes> 

      <Route path='/' element={<App />} />
      <Route path='/domain' element={<App />} />
      <Route path='/hosting' element={<Hosting />} />
      <Route path='/google-workspace' element={<Googleworkspace />} />
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
