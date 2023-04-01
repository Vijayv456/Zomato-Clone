import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import briyani from "./Assets/Briyani.avif";
import chicken from './Assets/Chicken.webp';
import pizza from './Assets/pizza.avif'
import friedrice from './Assets/fried Rice.avif';
import thali from './Assets/thali.avif';
import cake from './Assets/Cake.avif';
import paratha from './Assets/paratha.avif';
import Dosa from './Assets/Dosa.avif'
import Noodles from './Assets/Noodles.avif';
import Burger from './Assets/Burger.avif';
import Rolls from './Assets/Rolls.avif';
import Panner from './Assets/Panner.avif';

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

  const Types = [
    {
    name:briyani,
    id:1,
    label:"Briyani"
  }, {
    name:chicken,
    id:2,
    label:"Chicken"
  }, {
    name:pizza,
    id:3,
    label:"Pizza"
  }, {
    name:friedrice,
    id:4,
    label:"Fried Rice"
  }, {
    name:thali,
    id:5,
    label:"Thali"
  }, {
    name:cake,
    id:6,
    label:"Cake"
  },
  {
    name:paratha,
    id:7,
    label:"Paratha"
  },
  {
    name:Dosa,
    id:8,
    label:"Dosa"
  },
  {
    name:Noodles,
    id:9,
    label:"Noodles"
  },
  {
    name:Burger,
    id:10,
    label:"Burger"
  },
  {
    name:Rolls,
    id:11,
    label:"Rolls"
  },{
    name:Panner,
    id:12,
    label:"Panner"
  }
]

class FirstOrder extends React.Component{
    render(){
        return(
            <div className="first-order">
                <h1>Inspiration for your first order</h1>
                <Carousel responsive={responsive}>
                 {Types.map(item =>{
                return(
                    <div className="first-order-div1">
                        <div className="first-order-div">
                    <a href="">
                 <img src={item.name} alt="" />
                 </a>
                </div> 
                <p>{item.label}</p>
                    </div>  
                )
                 })}
                 </Carousel>
            </div>
        )
    }
}

export default FirstOrder