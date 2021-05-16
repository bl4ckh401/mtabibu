import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header'
import {CssBaseline} from '@material-ui/core'
import Footer from './footer';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxJTAYq5x5LEwoNEHfteNRAN1VSlt-m3k",
  authDomain: "m-tabibu.firebaseapp.com",
  projectId: "m-tabibu",
  storageBucket: "m-tabibu.appspot.com",
  messagingSenderId: "176751703419",
  appId: "1:176751703419:web:b0137f93ecf9f46cfc79de",
  measurementId: "G-ZJTKBTE33W"
};
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Header />
    <Router>
    <Switch>
    <App />
    </Switch>
    </Router> 
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
