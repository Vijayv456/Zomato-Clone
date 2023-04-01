import React from "react";
import Homepage from "./Homepage";
import HpContent from "./Hp-Content";
import HpCollection  from "./Hp-Collection";
import HpLocation from "./Hp-Location";

class Home extends React.Component{
    render(){
        return(
            <div>
              <Homepage />
              <HpContent />
              <HpCollection />
              <HpLocation />
            </div>
        )
    }
}

export default Home