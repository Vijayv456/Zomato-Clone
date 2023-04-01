import React from "react";
import Hcoll1 from './Assets/Hcoll1.avif'
import Hcoll2 from './Assets/Hcoll2.avif'
import Hcoll3 from './Assets/Hcoll3.avif'
import Hcoll4 from './Assets/Hcoll4.avif'

class HpCollection extends React.Component{
    render(){
        return(
            <div className="Hp-collection">
               <h1>
               Collections
               </h1>
               <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</p>
               <div className="Hp-collection-div">
                  <div className="Hp-collection-div-div">
                    <a href="">
                        <img src={Hcoll1} alt="" />
                        <div>
                            <h4>18 Best Bars & Pubs</h4>
                            <p>18 places - </p>
                        </div>
                    </a>
                  </div>
                  <div className="Hp-collection-div-div">
                    <a href="">
                        <img src={Hcoll2} alt="" />
                        <div>
                            <h4>16 Must Visit ..</h4>
                            <p>16 places - </p>
                        </div>
                    </a>
                  </div>
                  <div className="Hp-collection-div-div">
                    <a href="">
                        <img src={Hcoll3} alt="" />
                        <div>
                            <h4>9 Great buffets</h4>
                            <p>9 places - </p>
                        </div>
                    </a>
                  </div>
                  <div className="Hp-collection-div-div">
                    <a href="">
                        <img src={Hcoll4} alt="" />
                        <div>
                            <h4>11 picturesque Cafes</h4>
                            <p>11 places - </p>
                        </div>
                    </a>
                  </div>
               </div>
            </div>
        )
    }
}

export default HpCollection