import React, { useEffect } from "react";
import "./Header.css";
import MidPage from "./MidPage";
import Section from "./Section";
import Button from '@mui/material/Button';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const Header=()=>{


  return(
    <React.Fragment>
       <div className="rootContainer">
     
            <div className="header-left">
            
            <a href="https://freecodecamp.org" className="logo">
            <img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="freeCodeCamp logo"></img>
            </a>
              
            </div>
            
            <div className="header-right"> 
              <ul className="nav-links">
                <li className="nav-item"><a>Need Help <span className="helpIcon"><HelpOutlineIcon/></span></a></li>
                <li className="nav-item"><Button variant="contained" size="small" color="warning"><SmartphoneIcon/>Download App</Button></li>
                <li className="nav-item"><a href="#"><FavoriteBorderIcon/></a></li>
                <li className="nav-item"><a href="#"><ShoppingCartIcon/></a></li>
                <li className="nav-item"><a href="#"><PermIdentityIcon/></a></li>
              </ul>
            </div>
       
      </div>
      <div className="nextContainer">


        <ul className="item-links">
          <li className="second-items"><a href="#">Medicines</a></li> | 
          <li className="second-items"><a href="#">COVID Essentials</a></li> | 
          <li className="second-items"><a href="#">Diabetes</a></li> | 
          <li className="second-items"><a href="#">Eyewear</a></li> | 
          <li className="second-items"><a href="#">Ayush</a></li> | 
          <li className="second-items"><a href="#">Ayurvedic</a></li> | 
          <li className="second-items"><a href="#">Homeopathy</a></li> | 

          <li className="second-items"><a href="#">Fitness</a></li> | 
          <li className="second-items"><a href="#">Mom & Baby</a></li> | 
          <li className="second-items"><a href="#">Devices</a></li> | 
          <li className="second-items"><a href="#">Surgicals</a></li> | 
          <li className="second-items"><a href="#">Sexual Wellness</a></li> | 
          <li className="second-items"><a href="#">Treatments</a></li>
        
        </ul>
        </div>


        <MidPage/>
        <Section/>
        
    </React.Fragment>
  )

}
export default Header;