import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Router, Route, Link } from 'react-router-dom'
import CarInput from './CarInput';
import Home from './Home';


ReactDOM.render(

<BrowserRouter>
    <div>
        <Route path="/" component={Home}/>
        <Route path="/car" component={App}/>
     
        </div>
    </BrowserRouter>

,document.getElementById('root'));

