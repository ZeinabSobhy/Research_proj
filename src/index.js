import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
     <Router>
     <App />

     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
