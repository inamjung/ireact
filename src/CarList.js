import React, {Component} from 'react';
import CarItem from './CarItem';
import { Table } from 'reactstrap';

class CarList extends Component{

    render(){
        let{items}=this.props
     
        return(

            <div>
                <ul>
                    {items.map((carslist,i)=> <li key={i}><CarItem text={carslist}/></li>)}
                   
                </ul>
            </div>
            
        )
    }
}

export default CarList;