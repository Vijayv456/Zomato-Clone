import React from "react";
import zomatoicon from "./Assets/zomatoicon.avif";
import Login from "./Login";
import SignUp from "./Signup";


class BasicMenuRes extends React.Component{
constructor(){
  super();
  this.state={
    Login:false,
    Signup:false
  }
}
openLogin =()=>{
  this.setState({Login : true , Signup:false})
}
LoginClose =()=>{
  this.setState({Login : false})
}
OpenSignup =()=>{
this.setState({Signup : true , Login : false})
}
SignupClose =()=>{
  this.setState({ Signup : false })
}
    returnval = () =>{
        this.props.PhonSizereturnval()
    }
  render() {
  if(this.props.PhonSizeprops === true){
    return (
        <div className="hompage-menu-responsive">
          <div className="hompage-menu-responsive-div1"> 
           <button onClick={this.returnval}>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
           </button>
            <img src={zomatoicon} alt="zomatoicon"/>
          </div>
          <div className="hompage-menu-responsive-div2">
            
              <button onClick={this.openLogin}>Log in</button>
              <button onClick={this.OpenSignup}>Sign up</button>
          </div>
          <Login LoginisOpen={this.state.Login}  LoginisClose ={this.LoginClose}/>
        <SignUp SignpisOpen={this.state.Signup} SignupisClose ={this.SignupClose}/>
        </div>
      );
  }
  }
}

export default BasicMenuRes