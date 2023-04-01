import React from "react";
import Filter from "./Filter";
import FirstOrder from "./First-Order";
import TopBrand from "./Top-Brands";
import Dominoimg from './Assets/Dominos pizza.avif'
import Samcoimg from './Assets/samco.avif'
import Kfcimg from './Assets/kfc-chicken.avif'
import Hydrabadimg from './Assets/sshydrabriyani.avif'
import Mcdolad from "./Assets/mcdonald.avif"
import shreemithai from './Assets/shreemithai.avif'
import theredbox from './Assets/the-red-box.avif'
import meatandeat from './Assets/meatandeat.avif'
import burgerking from './Assets/burgerking.avif'
import royalsandwitch from './Assets/royalsandwitch.avif'
import pizzahut from './Assets/pizzahut.avif'
import gangasweets from './Assets/gangasweets.avif'
import amburbriyani from './Assets/amburbriyani.avif'
import geethamvegrestaurtant from './Assets/geethamvegrestaurtant.avif'
import cooperkitch from './Assets/cooperkitch.avif'


class DeliveryData extends React.Component{
    constructor(){
        super();
        this.state={
            res:[
                {
                    id:1,
                    name:'Dominos pizza',
                    pic:Dominoimg,
                    rating:'4.1',
                    price:250
                },{
                    id:2,
                    name:'Samco',
                    pic:Samcoimg,
                    rating:"3.4",
                    price:440
                },{
                    id:3,
                    name:'KFC',
                    pic:Kfcimg,
                    rating:"3.5",
                    price:150
                },
                {
                    id:4,
                    name:'SS Hyderabad Briyani',
                    pic:Hydrabadimg,
                    rating:"3.9",
                    price:1000
                },{
                    id:5,
                    name:'Mc Donald',
                    pic:Mcdolad,
                    rating:"2.9",
                    price:300
            
                },
                {
                    id:6,
                    name:'Shree Mithai',
                    pic:shreemithai,
                    rating:"1.9",
                    price:90
            
                },
                {
                    id:7,
                    name:'The Red Box',
                    pic:theredbox,
                    rating:"4.2",
                    price:410
            
                },
                {
                    id:8,
                    name:'Meet and Eat',
                    pic:meatandeat,
                    rating:"3.6",
                    price:350
            
                },
                {
                    id:9,
                    name:'Burger King',
                    pic:burgerking,
                    rating:"3.2",
                    price:280
            
                },
                {
                    id:10,
                    name:'Royal Snadwitch',
                    pic:royalsandwitch,
                    rating:"2.6",
                    price:180
            
                },
                {
                    id:11,
                    name:'Pizza Hut',
                    pic:pizzahut,
                    rating:"3.1",
                    price:260
            
                },
                {
                    id:12,
                    name:'Ganga Sweets',
                    pic:gangasweets,
                    rating:"2.2",
                    price:180
            
                },
                {
                    id:13,
                    name:'Abur Briyani',
                    pic:amburbriyani,
                    rating:"2.9",
                    price:240
            
                },
                {
                    id:14,
                    name:'Geetham Veg Restaurtant',
                    pic:geethamvegrestaurtant,
                    rating:"2.8",
                    price:80
            
                },
                {
                    id:15,
                    name:'Cooper Kitch',
                    pic:cooperkitch,
                    rating:"2.1",
                    price:150
            
                }
            ],
            rating:'',
            fitered:[
                {
                    id:1,
                    name:'Dominos pizza',
                    pic:Dominoimg,
                    rating:'4.1',
                    price:250
                },{
                    id:2,
                    name:'Samco',
                    pic:Samcoimg,
                    rating:"3.4",
                    price:440
                },{
                    id:3,
                    name:'KFC',
                    pic:Kfcimg,
                    rating:"3.5",
                    price:150
                },
                {
                    id:4,
                    name:'SS Hyderabad Briyani',
                    pic:Hydrabadimg,
                    rating:"3.9",
                    price:1000
                },{
                    id:5,
                    name:'Mc Donald',
                    pic:Mcdolad,
                    rating:"2.9",
                    price:300
            
                },
                {
                    id:6,
                    name:'Shree Mithai',
                    pic:shreemithai,
                    rating:"1.9",
                    price:90
            
                },
                {
                    id:7,
                    name:'The Red Box',
                    pic:theredbox,
                    rating:"4.2",
                    price:410
            
                },
                {
                    id:8,
                    name:'Meet and Eat',
                    pic:meatandeat,
                    rating:"3.6",
                    price:350
            
                },
                {
                    id:9,
                    name:'Burger King',
                    pic:burgerking,
                    rating:"3.2",
                    price:280
            
                },
                {
                    id:10,
                    name:'Royal Snadwitch',
                    pic:royalsandwitch,
                    rating:"2.6",
                    price:180
            
                },
                {
                    id:11,
                    name:'Pizza Hut',
                    pic:pizzahut,
                    rating:"3.1",
                    price:260
            
                },
                {
                    id:12,
                    name:'Ganga Sweets',
                    pic:gangasweets,
                    rating:"2.2",
                    price:180
            
                },
                {
                    id:13,
                    name:'Abur Briyani',
                    pic:amburbriyani,
                    rating:"2.9",
                    price:240
            
                },
                {
                    id:14,
                    name:'Geetham Veg Restaurtant',
                    pic:geethamvegrestaurtant,
                    rating:"2.8",
                    price:80
            
                },
                {
                    id:15,
                    name:'Cooper Kitch',
                    pic:cooperkitch,
                    rating:"2.1",
                    price:150
            
                }
            ]
        }
    }

    handleclcick =()=>{
        // Filter items with rating 4+
        // const filtered = this.state.res.filter(item => item.rating >= 4);
        // this.setState({ res: filtered });

        const filteredArr = this.state.res.sort((a, b) => a.price - b.price);
        this.setState({ res: filteredArr });
      }
      ValueToFilter =(value,price)=>{
        if(value == '4'){
            const filtered = this.state.res.filter(item => item.rating >= 4);
            this.setState({ res: filtered });
        }
        if(value == '3'){
            const filtered = this.state.res.filter(item => item.rating >= 3);
            this.setState({ res: filtered });
        }
        if(value == '2'){
            const filtered = this.state.res.filter(item => item.rating >= 2);
            this.setState({ res: filtered });
        }
        if(value == '1'){
            const filtered = this.state.res.filter(item => item.rating >= 1);
            this.setState({ res: filtered });
        }
        if(value == 'ascending'){
            const filtered = this.state.res.sort((a, b) => b.rating - a.rating);
            this.setState({ res: filtered });
        }
        if(value == 'descending'){
            const filtered = this.state.res.sort((a, b) => a.rating - b.rating);
            this.setState({ res: filtered });
        }
        if(price == '500'){
            const filtered = this.state.res.filter(item => item.price >= 400);
            this.setState({ res: filtered });
        }
        if(price == '400'){
            const filtered = this.state.res.filter(item => item.price >= 300 && item.price <= 400);
            this.setState({ res: filtered });
        }
        if(price == '300'){
            const filtered = this.state.res.filter(item => item.price >= 200 && item.price <= 300);
            this.setState({ res: filtered });
        }
        if(price == '200'){
            const filtered = this.state.res.filter(item => item.price >= 100 && item.price <= 200);
            this.setState({ res: filtered });
        }
        if(price == '100'){
            const filtered = this.state.res.filter(item => item.price <= 100 );
            this.setState({ res: filtered });
        }
        if(price == 'htl'){
            const filtered = this.state.res.sort((a, b) => b.price - a.price);;
            this.setState({ res: filtered });
        }
        if(price == 'lth'){
            const filtered = this.state.res.sort((a, b) => a.price - b.price);;
            this.setState({ res: filtered });
        }
      } 
      ShowallProperties =()=>{
        const { fitered }=this.state
        this.setState({res: [] })
        this.setState({res: fitered })
      }
render(){
        return(
            <div>
                <Filter valuefromfilter={this.ValueToFilter}  display={this.ShowallProperties}/>
                <FirstOrder />
                <TopBrand />
                 <div className="food-items-delivery">
                 {this.state.res.map(item => (
          <div key={item.id}  className="food-items-delivery-div" >
            <img src={item.pic} alt=""/>
            <div className="food-itms-del-name"><h5>{item.name}</h5>
            <div className="rating-batch">{item.rating}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></div>
            </div>
            <div className="price-batch"><p>{item.price} For one</p></div>
          
          </div>
        ))} 
                 </div>
           
       
      


    

            </div>
        )
    
}

}


export default DeliveryData