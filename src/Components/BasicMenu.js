import React from "react";
import zomatoicon from './Assets/zomatoicon.avif'
import BasicMenuRes from "./BasicMenuRes";
import { Link} from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";

class BasisMenu extends React.Component{
  constructor(){
    super();
    this.state={
        menu:false,
        restaurtants:[
          { "name": "T Nagar", "places": "304 places" },
          { "name": "Nungambakkam", "places": "257 places" },
          { "name": "Velachery", "places": "402 places" },
          { "name": "Anna Nagar East", "places": "286 places" },
          { "name": "Adyar", "places": "173 places" },
          { "name": "Thuraipakkam", "places": "220 places" },
          { "name": "Mylapore", "places": "154 places" },
          { "name": "Alwarpet","places": "117 places" },
        ],
        select:'',
        input:'',
        suggestions : [],
        Login:false,
        Signup:false,
        UserName:'',
        IfUser:false
    }
}
Showmenu =()=>{
    this.setState({ menu : true})
}
returnValOfRes =()=>{
    this.setState({ menu : false})
}
handleselect =(event)=>{
  const select = event.target.value
  this.setState({select})
}

   handleinput =(event)=>{
const { restaurtants } = this.state;
const input = event.target.value;
const suggestions = restaurtants.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
this.setState({input,suggestions})
   } 

showSuggestion = () =>{
  const {suggestions,input}=this.state

if(suggestions.length == 0 && input == ''){
  return null;
}
if(suggestions.length > 0 && input === ''){
  return null
}
if(suggestions.length == 0 && input){
  return <ul className="suggestion-list-1">
    <li>not found</li>
    </ul>
}
return(
  <ul className="suggestion-list-1">
    {
      suggestions.map((item,index)=>{
          return(
            <li key={index}><button><Link to={`/chennai/${item.name}`}>{console.log(index)}{item.name}-{item.places}</Link></button></li>
          )
      })
    }
    </ul>
)
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
fromSignupinputvalue =(val) =>{
  console.log(val);
  this.setState({UserName : val, IfUser : true});
}
HadleLogout =()=>{
  this.setState({IfUser : false})
}
    render(){
      let menu;
      if(this.state.IfUser == false){
        menu=<div className="User-btn">
        <button onClick={this.openLogin}>Log in</button>
        <button onClick={this.OpenSignup}>Sign up</button></div>
      }else{
        menu=<div className="User-btn">
          <div className="Username-btn">{this.state.UserName}</div>
          <button onClick={this.HadleLogout}>Log Out</button>
        </div>
      }
        return(
           <div>
             <div className="basic-menu">
              <img src={zomatoicon} alt="zomatoicon" />
              <div className="basic-menu-search-bar col-sm-8">
          <input
            type="text"
            list="city"
            placeholder="Chennai"
            className="basic-menu-search-bar-input" onChange={this.handleselect}
          />
          <datalist id="city">
            <option>Chennai</option>
          </datalist>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            color="rgb(239, 79, 95)"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <div className="basic-menu-search-bar-div">
            <input type="text" placeholder="Search for restaurtant,cusine or a dish" onChange={this.handleinput}/>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                color="gray"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </div>
      {menu}
            </div>
            <div className="home-page-menu-responsive">
          <button onClick={this.Showmenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              color="black"
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
          
          <img src={zomatoicon} alt="" />
        </div>
        {this.showSuggestion()}
        <BasicMenuRes PhonSizeprops={this.state.menu} PhonSizereturnval={this.returnValOfRes} />
        <Login LoginisOpen={this.state.Login}  LoginisClose ={this.LoginClose}  />
        <SignUp SignpisOpen={this.state.Signup} SignupisClose ={this.SignupClose} inputvalue={this.fromSignupinputvalue} />
           </div>
        )
    }
}


export default BasisMenu