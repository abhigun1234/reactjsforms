import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props)
        this.state={userName:'',password:''}
    }
//    handleusernameChange=(event)=>{
//      console.log("value",event.target.value)
//    }
//    submitData=(event)=>{
// console.log("state",this.state)
// event.preventDefault()
//    }

handleUserName=(event)=>{

 console.log("event",event.target.value)
 this.setState({userName:event.target.value})
}
handlePassword=(event)=>{
    console.log("event data",event.target.value)
    this.setState({password:event.target.value})
}
sendFormData=(event)=>{
    console.log("this.state",this.state)
    event.preventDefault()

}
    render() {
        return (
            
                <form onSubmit={this.sendFormData}>
                    <div>
                        <lable>UserName</lable>
                        <input  type='text'  onChange={this.handleUserName}  />
                        <input  type='text'  onChange={this.handlePassword}  />
                      <button type='submit'>click</button>
                    </div>
                </form>)
           
    }
}

export default Login;