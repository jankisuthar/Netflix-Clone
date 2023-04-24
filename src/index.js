import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './netflix.css'
import App from './App';
import 'bootstrap5/src/css/bootstrap.min.css'
import 'bootstrap5/src/js/bootstrap.bundle.min.js'
import reportWebVitals from './reportWebVitals';
import {
 BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Signin from './web/signin'
// import Header from './web/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
   <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes> 
    {/* <Header/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
