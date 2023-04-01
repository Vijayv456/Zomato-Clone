import React from "react";
import Hc1 from "./Assets/Hc1.avif"
import Hc2 from "./Assets/Hc2.avif"
import Hc3 from "./Assets/Hc3.avif"

class HpContent extends React.Component{
    render(){
        return(
            <div className="hcontent1 ">
              <div className="hcontent1-div1 col-md-4">
               <a href="">
               <img src={Hc1} alt="" />
                <div>
                    <h3>
                        Order Online
                    </h3>
                    <p>
                        Stay home and order to your doorstep
                    </p>
                </div>
               </a>
              </div>
              <div className="hcontent1-div1 col-md-4">
               <a href="">
               <img src={Hc2} alt=""/>
                <div>
                    <h3>
                     Dining
                    </h3>
                    <p>
                     View the City's favourite dining venues
                    </p>
                </div>
               </a>
              </div>
              <div className="hcontent1-div1 col-md-4"> 
                <a href="">
                <img src={Hc3} alt=""/>
                <div>
                    <h3>
                        Nightlife and club
                    </h3>
                    <p>
                        Explore the city's nightlife outlets
                    </p>
                </div>
                </a>
              </div>
            </div>
        )
    }
}

export default HpContent