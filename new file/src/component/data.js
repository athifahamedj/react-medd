
import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";

import med1 from "../assets/med1.png";
import med2 from "../assets/med2.png";
import med3 from "../assets/med3.png";
import med4 from "../assets/med4.png";
import med5 from "../assets/med5.png";
import med6 from "../assets/med6.png";

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      image: pro1,
      name: "E-toothbrush",
      price: "$19.99",
      previous_price: "$25.99",
    },
    {
      id: 2,
      image: pro2,
      name: " Bp monitor",
      price: "$21.99",
      previous_price: "$27.99",
    },
    {
      id: 3,
      image: pro3,
      name: "Ambulatory Bp",
      price: "$99.99",
      previous_price: "$120.99",
    },
    {
      id: 4,
      image: pro4,
      name: "Water Flosser",
      price: "$14.99",
      previous_price: "$50.99",
    },
    {
      id: 5,
      image: pro5,
      name: "Evecare Syrup",
      price: "$38.99",
      previous_price: "$40.99",
    },
    {
      id: 6,
      image: pro1,
      name: "E-toothbrush",
      price: "$19.99",
      previous_price: "$25.99",
    },
    {
      id: 7,
      image: pro2,
      name: " Bp monitor",
      price: "$21.99",
      previous_price: "$27.99",
    },

    {
      id: 8,
      image: pro3,
      name: "Ambulatory Bp",
      price: "$99.99",
      previous_price: "$120.99",
    },
    {
      id: 9,
      image: pro4,
      name: "Water Flosser",
      price: "$14.99",
      previous_price: "$50.99",
    },
    {
      id: 10,
      image: pro5,
      name: "Evecare Syrup",
      price: "$38.99",
      previous_price: "$40.99",
    },
  ];


  export const medData = [
    {
      id: 1,
      image: med1,
    },
    {
      id: 2,
      image: med2,
      
    },
    {
      id: 3,
      image: med3,
    },
    {
      id: 4,
      image: med4,
    },
    {
      id: 5,
      image: med5,
      
    },
    {
      id: 6,
      image: med6,
      
    },
    {
      id: 7,
      image: med1,
      
    },

    {
      id: 8,
      image: med2,
    },
    {
      id: 9,
      image: med3,
      
    },
    {
      id: 10,
      image: med4,
      
    },
  ];

