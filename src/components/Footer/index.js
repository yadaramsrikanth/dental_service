
import { NavLink } from "react-router-dom";
import "./index.css"; 
const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4 mt-5 border-top">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold"><i className="bi bi-hospital"></i> Todays Dental Services</h5>
            <p>Committed to delivering exceptional dental care with compassion and expertise. Your smile is our priority.</p>
          </div>

         
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><NavLink to="/" className="text-dark text-decoration-none">Home</NavLink></li>
              <li><NavLink to="/about" className="text-dark text-decoration-none">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-dark text-decoration-none">Services</NavLink></li>
              <li><NavLink to="/faq" className="text-dark text-decoration-none">FAQ</NavLink></li>
              <li><NavLink to="/contact" className="text-dark text-decoration-none">Contact</NavLink></li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <p><i className="bi bi-telephone-fill me-2"></i> +91 98765 43210</p>
            <p><i className="bi bi-envelope-fill me-2"></i> contact@todaysdental.com</p>
            <p><i className="bi bi-geo-alt-fill me-2"></i> 123 Smile Street, Hyderabad, India</p>
          </div>
        </div>

        <div className="text-center py-3 border-top">
          <small>© {new Date().getFullYear()} Todays Dental Services. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
