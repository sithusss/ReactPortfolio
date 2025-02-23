import React from "react";
import "../styles/Footer.css";
import ReactJS from "../assets/logos/react.png";
import CSS3 from "../assets/logos/css.png";
import JWT from "../assets/logos/jwt.png";
import MongoDB from "../assets/logos/mongo.png";
import NodeJS from "../assets/logos/node.png";


const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="footer-left">
                <p>copyright@Sandali Liyanage</p>
            </div>
            <div className="footer-right">
                <h3>Developed using..</h3>
                <img src={ReactJS} alt="ReactJS" className="tech-img" />
                <img src={CSS3} alt="CSS3" className="tech-img" />
                <img src={JWT} alt="JWT" className="tech-img" />
                <img src={MongoDB} alt="mongoDB" className="tech-img" />
                <img src={NodeJS} alt="nodeJS" className="tech-img" />
            </div>
        </div>  

    );

};

export default Footer;
