import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input,Button } from 'reactstrap';

class CarInput extends Component{

    constructor(props){
        super(props)
        this.state ={
            newCars: ""
        }
        this.addCarClick=this.addCarClick.bind(this)
    }
 
    addCarClick(){
        let{onAddCar}=this.props
        onAddCar(this.state.newCars)
        this.setState({
            newCars: ""
        })
    }

    render(){    
  
    
        let{newCars}=this.state
        return(
            <div >ยี่ห้อรถยนต์  
                <InputGroup>
                <Input  value={newCars}  onChange={(e)=>this.setState({newCars: e.target.value})} placeholder="ระบุรายการรถยนต์..." />        
                <Button onClick={this.addCarClick} color="success"> เพิ่ม</Button>
                </InputGroup>   
               <br/>
                {this.state.newCars}
            </div>
            
        )
    }
}

export default CarInput;