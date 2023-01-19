import React from "react";
import bg from "../assets/bg.jpg";
import "./MidPage.css";
import Button from '@mui/material/Button';
function MidPage(){
  return(
  <React.Fragment>

          <div  className= "bg-img">
            <img  src={bg} height="100%" width="100%"></img>
            <div className="img-text"></div>
            
            <div className="search-dropdown"></div>
            <div className="search-box"><span className=""></span><p className="text-design">What Are You Looking For ?</p>
            <h3 className="text-css">The Pharmacy that delivers</h3>
            <input type="text" placeholder="Search for Medicines and Health Products"/></div>
           
          </div>
          <div className="upload-btn"><span className="order-text-css">ORDER WITH PRESCRIPTION</span><span className="btn-css"><Button  variant="outlined" size="small" color="error">UPLOAD NOW</Button></span></div>
    
  </React.Fragment>
  )
}


export default MidPage;