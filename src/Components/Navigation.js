import React from "react";
import { useParams } from 'react-router-dom';



function Navigation (){
   
    const { restaurtant } =useParams()
        return(
            <div className="Navigation-div">
             <button><p><a href="/home">Home</a></p></button>
             <button><p>India</p></button>
             <button><p>Chennai</p></button>
             <button disabled><p>{ restaurtant }</p></button>
            </div>
        )
    }


export default Navigation