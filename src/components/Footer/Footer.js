import React from 'react'; 
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                  <Link to="/">
                  <div className="footer-item"> 
                
                <i className="fa fa-home"></i> 
                <p>Home</p>
                
                </div>
                  </Link>
                <div className="footer-item"> 
                
                <i class="fa fa-list-alt"></i>  
                <p>Requests</p>
                </div>
                <div className="footer-item"> <i className="fa fa-plus"></i></div>
                <div className="footer-item"> <i className="fa fa-home"></i></div>
                <div className="footer-item"> <i className="fa fa-home"></i></div>
            </div>
        </footer>
    );
};

export default Footer;