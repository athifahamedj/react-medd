import React from "react";
import "./Section.css";
import logoOne from "../assets/logo1.png";
import logoTwo from "../assets/logo2.png";

const img1 = <img src={logoOne}/>
const img2 = <img src={logoTwo}/>
const dummyData = [
 
  {
   name : "Medicine",
   image : img1,
   description : "Over 250000 products",
  },
  {
   name : "medical",
   image : img2,
   description : "Over 250000 products"
  },
  {
   name : "medical",
   image : img2,
   description : "Over250000 products"
  }
  
 ]
function Section(){

return(
 
    <div className="section-css">
        {dummyData.map((item, index) => ( 
        <div className="img-design">
        {item.image}
            <div className="text-container">
             <p className="item-name"> {item.name}</p>
             <p className="desc-name"> {item.description}</p> 
            </div>
        </div>

      
        ))}
    </div>
    
 
);
}

export default Section