import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tabimg1 from "./Assets/carouselimg1.avif";
import beforetabimg1 from "./Assets/beforetabimg.webp";
import Tabimg2 from './Assets/carouselimg2.avif';
import befortabimg2 from './Assets/beforetabimg1.webp'
import Tabimg3 from "./Assets/nightlife-c2.webp"
import beforetabimg3 from "./Assets/beforetabimg2.webp"
import "./css/Homepage.css";
import FirstOrder from "./First-Order";
import TopBrand from "./Top-Brands";
import Filter from "./Filter";
import HpCollection from "./Hp-Collection";
import DeliveryData from "./Deliverydatas";
import { Link } from "react-router-dom";


const tabstyle = {
    border: "none",
    color: "gray",
  };
//   const tabsStyle = {
//     margin: "20px 60px",

//   }

class BasicTab extends React.Component {
  constructor() {
    super();
    this.state = {
        img1: Tabimg1 ,
        img1bgcolor:"rgb(252, 238, 192)",
        h1color:"rgb(239, 79, 95)",
      img2:befortabimg2,
      img2bgcolor:"rgb(248, 248, 248)",
      h2color: "gray",
      img3:beforetabimg3,
      img3bgcolor:"rgb(248, 248, 248)",
      h3color:"gray",
      borderbottom1 : "3px solid rgb(239, 79, 95)",
      borderbottom2:"none",
      borderbottom3:"none",
      
    };
   
  }
  
  handleimg1 = () => {
    this.setState({ img1: Tabimg1 ,
    img1bgcolor:"rgb(252, 238, 192)",
    h1color:"rgb(239, 79, 95)",
    img2:befortabimg2,
    img2bgcolor:"rgb(248, 248, 248)",
    h2color: "gray",
    img3:beforetabimg3,
    img3bgcolor:"rgb(248, 248, 248)",
    h3color:"gray",
    borderbottom1 : "3px solid rgb(239, 79, 95)",
    borderbottom2:"none",
    borderbottom3:"none"
});
  };

  handleimg2 =()=>{
    this.setState({img2:Tabimg2,
    img2bgcolor:"rgb(229, 243, 243)",
    h2color:"rgb(239, 79, 95)",
    img1: beforetabimg1,
    h1color: "gray",
    img1bgcolor:"rgb(248, 248, 248)",
    img3:beforetabimg3,
    img3bgcolor:"rgb(248, 248, 248)",
    h3color:"gray",
    borderbottom2 : "3px solid rgb(239, 79, 95)",
    borderbottom1:"none",
    borderbottom3:"none"
})
  }
  handleimg3 =()=>{
    this.setState({img3:Tabimg3,
    img3bgcolor:"rgb(229, 243, 243)",
    h3color:"rgb(239, 79, 95)",
    img1: beforetabimg1,
    h1color: "gray",
    img1bgcolor:"rgb(248, 248, 248)",
    img2:befortabimg2,
    img2bgcolor:"rgb(248, 248, 248)",
    h2color: "gray",
    borderbottom3 : "3px solid rgb(239, 79, 95)",
    borderbottom2:"none",
    borderbottom1:"none",})
  }

  render() {
    return (
      <div>
        <Tabs>
          <TabList style={{border:"none"}}>
            <div className="tab-list">
            <Tab style={tabstyle} onClick={this.handleimg1}>
              <div className="tab-nav" style={{borderBottom:this.state.borderbottom1}} >
                <div style={{backgroundColor : this.state.img1bgcolor }}>
                  <img src={this.state.img1} alt="" />
                </div>
                <h4 style={{color: this.state.h1color}}>Delivery</h4>
              </div>
            </Tab>
            <Tab style={tabstyle} onClick={this.handleimg2}>
              <div className="tab-nav" style={{borderBottom:this.state.borderbottom2}}>
                <div style={{backgroundColor : this.state.img2bgcolor }}>
                  <img src={this.state.img2} alt="" />
                </div>
                <h4 style={{color: this.state.h2color}}>Dining out</h4>
              </div>
            </Tab>
            <Tab style={tabstyle} onClick={this.handleimg3}>
              <div className="tab-nav" style={{borderBottom:this.state.borderbottom3}}>
                <div style={{backgroundColor : this.state.img3bgcolor }}>
                  <img src={this.state.img3} alt="" />
                </div>
                <h4 style={{color:this.state.h3color}}>Nightlife</h4>
              </div>
            </Tab>
            </div>
          </TabList>
          <TabPanel>
          <div>
      <DeliveryData />
      </div>
          </TabPanel>
          <TabPanel>
            <HpCollection />
            <Filter />
          </TabPanel>
          <TabPanel>
          <HpCollection />
            <Filter />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default BasicTab;
