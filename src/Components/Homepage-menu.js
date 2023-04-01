import React from "react";
import HompageMenuRes from "./hompage-menu-responsive";
import SignUp from "./Signup";
import Login from "./Login";

class HomepageMenu extends React.Component {
constructor(){
    super();
    this.state={
        menu:false,
        Login:false,
        Signup:false
    }
}
Showmenu =()=>{
    this.setState({ menu : true})
}
returnValOfRes =()=>{
    this.setState({ menu : false})
}
OpenSignup =()=>{
  this.setState({Signup : true })
  }
  SignupClose =()=>{
    this.setState({ Signup : false })
  }
  openLogin =()=>{
    this.setState({Login : true , Signup:false})
  }
  LoginClose =()=>{
    this.setState({Login : false})
  }

  render() {
    return (
      <div>
        <div className="home-page-menu">
          <div>
            <button className="home-page-menu-btn">Get the app</button>
          </div>
          <div className="home-page-menu-div2">
            <button className="home-page-menu-btn">Investor Relation</button>
            <button className="home-page-menu-btn">Add restuartants</button>
            <button className="home-page-menu-btn" onClick={this.openLogin}>Log in</button>
            <button className="home-page-menu-btn" onClick={this.OpenSignup}>Sign up</button>
          </div>
        </div>
        <div className="home-page-menu-responsive">
          <button onClick={this.Showmenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              color="white"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <HompageMenuRes PhonSizeprops={this.state.menu} PhonSizereturnval={this.returnValOfRes}/>
        <Login LoginisOpen={this.state.Login}  LoginisClose ={this.LoginClose}/>
        <SignUp SignpisOpen={this.state.Signup} SignupisClose ={this.SignupClose}/>
      </div>
    );
  }
}

export default HomepageMenu;
