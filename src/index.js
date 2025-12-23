import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

    var sobj={
          No:1,
          Myname: "P.Vijayalakshmi",
          Aadhar: "204428660345",
          Qualification: "B.Com(CA)" ,
          Certificate: "IIBF and IRDA" ,
          Location:"Lalapet,karur",
          Experiance: "2 years",
          Mark: [90,95,80,75,50],
          Hobbies:{
            hob1:"Search new things",
            hob2:"DigitalMarketing"
          }
          
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
