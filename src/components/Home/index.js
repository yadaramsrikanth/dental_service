import { Link } from "react-router-dom";

import "./index.css";

const Home = () => {
  return (<>
   
    <div >

     
      <section className="hero-section text-white d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to DentalCare</h1>
          <p className="lead">Your smile is our priority</p>
          <Link to="/contact" className="btn btn-primary mt-3">
            Book Appointment
          </Link>
        </div>
      </section>

      
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-3">About Our Clinic</h2>
          <p>
            DentalCare offers world-class dental services with a gentle and friendly approach.
            Our experienced practitioners use the latest technology to give you the best care possible.
          </p>
        </div>
      </section>

      
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="bi bi-shield-check fs-1 text-primary mb-2"></i>
              <h5>General Dentistry</h5>
              <p>Routine checkups, cleanings, and fillings for healthy teeth.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-brightness-high fs-1 text-primary mb-2"></i>
              <h5>Teeth Whitening</h5>
              <p>Safe and effective treatments for a brighter smile.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-emoji-smile fs-1 text-primary mb-2"></i>
              <h5>Cosmetic Dentistry</h5>
              <p>Smile design, veneers, and aesthetic procedures.</p>
            </div>
          </div>
          <Link to="/services" className="btn btn-outline-primary mt-3">
            View All Services
          </Link>
        </div>
      </section>

    </div>
    
  </>);
};

export default Home;
