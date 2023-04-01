import React from 'react'
import Modal from 'react-modal';


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
     

    },
  };

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            Signup:false
        }
    }



Loginclose =()=>{
    this.props.LoginisClose()
}

render(){
    return(
   
         <div>
            <Modal
        isOpen={this.props.LoginisOpen}
        style={customStyles}
      >
       <div className='Login-div1'>
        <h2>Login</h2>
       <button onClick={this.Loginclose}>X</button>
       </div>
       <div className='Login-from'>
        <div>
            <input type="text" placeholder='Phone' />
            <select>
            <option>+91</option>
            </select>
        </div>
        <button className='Login-btn1'>Send One Time Password</button>
        <hr></hr>
        <button className='Login-btn2'>
            Continue With Email
        </button>
        <br/>
        <button className='Login-btn2'>
            Continue With Google
        </button >
        <hr/>
        <div>
            New To Zomato?<button className='Login-btn3' >Create account</button>
        </div>
       </div>
        
        </Modal>
         </div>
      
    )
}
}


export default Login