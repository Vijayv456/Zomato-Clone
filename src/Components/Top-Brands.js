import React from "react";
import SSHB from "./Assets/sshb.avif"
import SFF from './Assets/sff.avif'
import KFC from './Assets/kfc.avif'
import A2B from './Assets/a2b.avif'
import HSB from './Assets/hsb.avif'
import NVVB from './Assets/nvvb.avif'
import DP from './Assets/dp.avif'
import SW from './Assets/sw.avif'
import GVR from './Assets/gvb.avif'
import PH from './Assets/ph.avif'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Topbrand = [ {
 name:"SS Hyderabad Biryani"   ,
 id:"tb1",
 image:SSHB
},
{
    name:"Sangeetha Fast Foods"   ,
    id:"tb2",
    image:SFF
   },
   {
    name:"KFC"   ,
    id:"tb3",
    image:KFC
   },
   {
    name:"A2B - Adyar Ananda Bhavan"   ,
    id:"tb4",
    image:A2B
   },{
    name:"Hotel Saravana Bhavan"   ,
    id:"tb5",
    image:HSB
   },{
    name:"Namma Veedu Vasanta Bhavan"   ,
    id:"tb6",
    image:NVVB
   }
   ,{
    name:"Domino's Pizza"   ,
    id:"tb7",
    image:DP
   },{
    name:"Subway"   ,
    id:"tb8",
    image:SW
   },{
    name:"Geetham Veg Restaurant"   ,
    id:"tb9",
    image:GVR
   },{
    name:"Pizza Hut"   ,
    id:"tb10",
    image:PH
   }
]

class TopBrand extends React.Component{
    render(){
        return(
            <div className="top-brand">
                <h1>Top brands for you</h1>
                <Carousel responsive={responsive}>
                 {Topbrand.map(item =>{
                return(
                    <div className="top-brand-div1">
                        <div className="first-order-div">
                    <a href="">
                 <img src={item.image} alt="" />
                 </a>
                </div> 
                <p>{item.name}</p>
                    </div>  
                )
                 })}
                 </Carousel>
            </div>
        )
    }
}

export default TopBrand