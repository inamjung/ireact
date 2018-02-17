
import React, { Component, PropTypes } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

import {
  Jumbotron,
  Container,
  Col,
  Row
} from 'reactstrap';

const propTypes = { 
  name: '',
  message: ''
};

const defaultProps = {
  name: 'World',
  message: 'This is a first my app !'
};

class Home extends Component {
  render() {
    const { name, message } = this.props;

    return (
      <div>
   <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Frist-React My App</h2>
        </header>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="/home">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/car">Car</BreadcrumbItem>        
        
      </Breadcrumb>

       
      </div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;


export default Home;
