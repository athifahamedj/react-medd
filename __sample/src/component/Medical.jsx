import React from "react";

export default function Medical(props) {
  return (
    <div className="frame">
      <img className="med--image" src={props.url} alt="product image" />
    </div>
  );
}
