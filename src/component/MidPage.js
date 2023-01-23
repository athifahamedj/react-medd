import React from "react";
import Carousel from "./Carousels";
import Scroller from "./Scroller";

// Import css file
import bg from "../assets/bg.jpg";
import "./MidPage.css";
import Button from '@mui/material/Button';

// Import Service image
import tablet from "../assets/medicine_tablet.png";
import heart from "../assets/heart.png";
import text from "../assets/text.png";
import certi from "../assets/certi.png";

// Import Product image
import product_1 from "../assets/product_1.png";
import product_2 from "../assets/product_2.png";
import product_3 from "../assets/product_3.png";

// Service Name & description
const ser1 = <img src={tablet}/>
const ser2 = <img src={heart}/>
const ser3 = <img src={text}/>
const ser4 = <img src={certi}/>
const service = [
 
  {
   name : "Medicine",
   image : ser1,
   description : "Over 250000 products",
  },
  {
   name : "Wellness",
   image : ser2,
   description : "Health products"
  },
  {
   name : "Healthblog",
   image : ser3,
   description : "Trending from health experts"
  },
  {
    name : "Plan",
    image : ser4,
    description : "Membership plan"
   }
  
 ]

// Product Name & description
 const pro1 = <img src={product_1}/>
const pro2 = <img src={product_2}/>
const pro3 = <img src={product_3}/>
const product = [
 
  {
   image : pro1,
  },
  {
   image : pro2,
  },
  {
   image : pro3,
  },

  
 ]
function MidPage(){
  return(
  <React.Fragment>

          <div  className= "bg-img">
            <img  src={bg} height="100%" width="100%"></img>
            <div className="img-text"></div>
            
            <div className="search-dropdown"></div>
            <div className="search-box"><span className=""></span><p className="text-design">What Are You Looking For ?</p>
              <h3 className="text-css">The Pharmacy that delivers</h3>
              <input type="text" placeholder="Search for Medicines and Health Products"/>
            </div>
           
          </div>
          <div className="upload-btn"><span className="order-text-css">ORDER WITH PRESCRIPTION</span><span className="btn-css"><Button  variant="outlined" size="small" color="error">UPLOAD NOW</Button></span></div>
    
          <div className="midpage-css">
          {service.map((item, index) => ( 
          <div className="img-service" key={index}>
          {item.image}
            <div className="text-container">
            <p className="service_item-name"> {item.name}</p>
            <p className="service_desc-name"> {item.description}</p>
            </div>
            </div>
            ))}
          </div>

          <div className="product-midpage-css">
          {product.map((item, index) => ( 
          <div className="img-product" key={index}>
          {item.image}
            <div className="image-container">
            </div>
            </div>
            ))}
          </div>
          <Carousel/>
          <Scroller/>
  </React.Fragment>
  );
  
}


 


export default MidPage;