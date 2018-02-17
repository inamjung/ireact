import React, {Component} from 'react';

class Headers extends Component{
    constructor(props){
        super(props)
        this.funcClickUser=this.funcClickUser.bind(this)
    }

    funcClickUser(){
        alert(this.props.userLogin)
    }

    render(){
        let{userLogin,isLogin} = this.props

        return(

            <div onClick={this.funcClickUser}>ส่วน headers(คลิกalertชือ): {isLogin && userLogin}</div>
        )
    }
}

export default Headers;