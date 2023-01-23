import React from "react";
import "./Scroller.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Product from "./Product";
import { productData, responsive } from "./data";



function Scroller(){
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.image}
      price={item.price}
      previous_price={item.previous_price}
    />
  ));
      
    return(
        
      <div className="product-scroller">
      <h1>New Arrivals</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
    
  );
}

export default Scroller