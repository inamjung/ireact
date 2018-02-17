import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Headers from './Headers';
import CarInput from './CarInput';
import CarList from './CarList';
import CarItem from './CarItem';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      nowTime: 0,
      carItems: [],
      carPrice:0,
    }
   this.funcFooterClick=this.funcFooterClick.bind(this)
   this.addCar=this.addCar.bind(this)
  }

  funcFooterClick(time){
    this.setState({nowTime: time})
  }

  addCar(newCar){
    this.setState({
      carItems: this.state.carItems.concat([newCar])     
    })
  }


  render() {
    let{nowTime}=this.state
    let{carItems}=this.state  
    return (
      <div>
      <CarInput onAddCar={this.addCar}/>
      <hr/>
      แสดงรายการ
      <CarList items={carItems}/>  
     
      </div>
    );
  }
}

export default App;
