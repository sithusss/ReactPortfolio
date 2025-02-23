import React from "react";
import "../styles/Footer.css";


const Footer = () =>{
    return(
        <div className="footer-container">
            <div className="footer-left">
                <p>copyright@Sandali Liyanage</p>
            </div>
            <div className="footer-right">
                <h3>Developed using..</h3>
                <img src="" alt="ReactJS" className="tech-img" />
                <img src="" alt="CSS3" className="tech-img" />
                <img src="" alt="JWT" className="tech-img" />
                <img src="" alt="mongoDB" className="tech-img" />
            </div>
        </div>  

    );

};

export default Footer;
