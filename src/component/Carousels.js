import React from "react";
import "./Carousels.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Medical from "./Medical";
import { medData, responsive } from "./data";

function Carousels() {
  const medical = medData.map((item, key) => (
    <Medical key = {key}
    url={item.image}
    />
  ));

  return (
    <div className="medical-scroller">
      <h1>Popular Categories</h1>
      <Carousel showDots={true} responsive={responsive}>
        {medical}
      </Carousel>
    </div>
  );
}

export default Carousels
