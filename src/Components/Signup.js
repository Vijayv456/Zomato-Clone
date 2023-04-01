import React from 'react'
import Modal from 'react-modal';
import Login from './Login';
import GoogleLogin from '@leecheuk/react-google-login';

const customStyles = {
    overlay: {
        background: "#000000e3",
        zIndex: '2',
      },
    content: {
        position:"absolute",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '0%',
      transform: 'translate(-50%, -50%)',
      backgroundColor:"white",
    },
  };
 

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            Login:false,
            FullName:'',
            Email:'',
            submit:false,
            valid:'',
            IsUser:false,
        }
    }

Signupclose = ()=>{
    this.props.SignupisClose()
}
LoginOpen =()=>{
    this.setState({ Login : true })
}
LoginClose =()=>{
    this.setState({ Login : false })
    this.props.SignupisClose()
}


responseGoogle = (response) => {
    console.log(response);
  }

  HandleFullname =(event)=>{
   this.setState({FullName : event.target.value});
  }
  HandleEmail =(event)=>{
    this.setState({Email : event.target.value});
  }
  handleSubmit =()=>{
    const {FullName ,Email} =this.state;
    if(FullName===''){
        // console.log("please enter Name");
        this.setState({valid:"Please enter Name"})
    }
    else if(Email===''){
        // console.log("please enter Email");
        this.setState({valid:"Please enter Email"})
    }else{
        this.setState({submit : true})
        this.props.SignupisClose()
        this.props.inputvalue(this.state.FullName)
    }
  }
    render(){
    
        return(
            <div>
                <Modal
            isOpen={this.props.SignpisOpen}
            style={customStyles}
          >
           <div className='Login-div1'>
            <h2>Signup</h2>
           <button onClick={this.Signupclose}>X</button>
           </div>
           <div className='Signup-div'>
            <input type="text" placeholder='Full Name' onChange={this.HandleFullname} />
            <br/>
            
            <input type="Email" placeholder='Email' onChange={this.HandleEmail}/>
            <div className='checkbox-div'>
                <input type="checkbox"/>
                I agree to Zomato's Terms of Service, Privacy Policy and Content Policies
            </div>
            <button className='create-account-btn' onClick={this.handleSubmit}>Create account</button>
            <p>{this.state.valid}</p>
            <hr></hr>
            <GoogleLogin
             clientId="923020080659-vmjo72r28ajtrrg9aeas2i0l0p14954a.apps.googleusercontent.com"
             buttonText="Continue with Google"
             onSuccess={this.responseGoogle}
             onFailure={this.responseGoogle}
             cookiePolicy={'single_host_origin'}
             className="google-btn"
             />
            <hr/>
            <div>
               Already have an account?<button className='Login-btn3' onClick={this.LoginOpen}>Login</button>
            </div>
           </div>
            </Modal>
            <Login LoginisOpen={this.state.Login}  LoginisClose ={this.LoginClose}/>
            </div>
        )
    }
}  

export default SignUp