import React, {Component} from 'react';
import styled from 'styled-components';

const Text=styled.span`
    font-size: 20px;
   color:  ${props=>(props.ok ? 'lightgrey' : 'black')};
`

class CarItem extends Component{
    constructor(props){
        super(props)
        this.state={
            done: false       
        }
       this.toggle=this.toggle.bind(this)
    }
    toggle(){
        this.setState({
            done: !this.state.done+"dd"
        })
    }

    render(){
        let{text}=this.props
        return(
            <div>
                <input type="checkbox" 
                    value={this.state.done}
                    onClick={this.toggle}
                />
              <Text ok = {this.state.done}>{text}</Text>
             </div>
            
        )
    }
}

export default CarItem;