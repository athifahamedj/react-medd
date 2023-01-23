import React from "react";
import "./Section.css";
import payment from "../assets/payment.png";

const Section = () => {

    return(
        <React.Fragment>
        <footer className = "footer">
            <div className="container">
                <div className="row">
                <div className="footer-col">
                    {/* column 1 */}
                        <h4>Know Us</h4>
                        <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Press Coverage</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Business Partnership</a></li>
                        <li><a href="#">Became a Health Partner</a></li>
                        <li><a href="#">Corporate Governance</a></li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="footer-col">
                        <h4>Our Policies</h4>
                        <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Editorial Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">IP Policy</a></li>
                        <li><a href="#">Grievance Redressal Policy</a></li>
                        <li><a href="#">Fake Jobs and Fraud Disclaimer</a></li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="footer-col">
                        <h4>Our Services</h4>
                        <ul>
                        <li><a href="#">Order Medicines</a></li>
                        <li><a href="#">Ayurveda Articles</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Care Plan</a></li>
                        </ul>
                    </div>
                    {/* Column4 */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                        <li><a href="#">COVID Essentials</a></li>
                        <li><a href="#">Diabetes</a></li>
                        <li><a href="#">Eyewear</a></li>
                        <li><a href="#">Ayush</a></li>
                        <li><a href="#">Ayurvedic</a></li>
                        <li><a href="#">Homeopathy</a></li>
                        <li><a href="#">Fitness</a></li>
                        
                        </ul>
                    </div>
                    {/* Column5 */}
                    {/* <div className="footer-col">
                        <h4></h4>
                        <ul>
                        <li><a href="#">Mom & Baby</a></li>
                        <li><a href="#">Devices</a></li>
                        <li><a href="#">Surgicals</a></li>
                        <li><a href="#">Sexual Wellness</a></li>
                        <li><a href="#">Treatments</a></li>
                        <li><a href="#">Heart care</a></li>
                        <li><a href="#">Lung care</a></li>
                        </ul>
                    </div> */}
                    {/* Column6 */}
                    {/* <div className="footer-col">
                        <h4>Qucik Links</h4>
                        <ul>
                        <li><a href="#">Stomach care</a></li>
                        <li><a href="#">Eye care</a></li>
                        <li><a href="#">Nose care</a></li>
                        <li><a href="#">Ear care</a></li>
                        <li><a href="#">Dental care</a></li>
                        <li><a href="#">Muscle care</a></li>
                        <li><a href="#">Liver care</a></li>
                        </ul>
                    </div> */}
                </div>

                <div className="footer-email-form">
                    <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
                    <h3>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</h3>
                    <input type="email" placeholder="Enter your email address" id ="footer-email"/>
                    <input type="submit" value ="Sign Up" id ="footer-email-btn"/>
                    </div>
                    
                <div className="col-sm">

                    <div className="horizontal-line">
                    </div>
                    <div className="horizontal-line2">
                    </div>
                    <p>
                        &copy;{new Date().getFullYear()} SOCIAL CONNECT . Facebook | Twitter | Linkedin | Youtube
                    </p>
                    <div className="col-payments">
                        <p> Our payments Partners</p>
                        <div className="col-payment-opt">
                        <img src={payment} alt="react logo" />
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
        
        
        </React.Fragment>
        
    );
}

export default Section