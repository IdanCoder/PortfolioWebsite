import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Home/App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Contact from '../src/Pages/Contact/Contact'

ReactDOM.render(
  
  <React.StrictMode>
      <App />

  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();