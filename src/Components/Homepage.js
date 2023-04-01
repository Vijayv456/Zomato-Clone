import React from "react";
import "./css/Homepage.css"
import HomepageMenu from "./Homepage-menu";
import HompageHeader from "./HomepageHeader";
class Homepage extends React.Component{
    render(){
        return(
            <div className="container-fluid Wallpaper">
              <HomepageMenu />
              <HompageHeader />
            </div>
        )
    }
}

export default Homepage