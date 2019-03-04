import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
// import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();
