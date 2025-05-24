import Header from "../Header/index"
import Footer from "../Footer/index"
import "./index.css";

const About = () => {
  return ( <>
 
 
    <div className="about-page py-5">
      <div className="container">

        {/* Clinic Background */}
        <section className="mb-5 text-center">
          <h2 className="mb-3">About Our Clinic</h2>
          <p className="text-muted">
            At DentalCare, we have been serving the community with quality dental care for over a decade.
            Our clinic is equipped with state-of-the-art technology and staffed by a team of experienced professionals
            committed to ensuring every patient leaves with a confident, healthy smile.
          </p>
        </section>

        {/* Practitioner Details */}
        <section className="mb-5 text-center">
          <h3 className="mb-3">Meet Our Practitioners</h3>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/3884116/pexels-photo-3884116.jpeg"
                  className="card-img-top"
                  alt="Dr. John Doe"
                />
                <div className="card-body">
                  <h5 className="card-title">Dr. John Doe</h5>
                  <p className="card-text text-muted">
                    Chief Dentist with 15+ years of experience in cosmetic and restorative dentistry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg"
                  className="card-img-top"
                  alt="Dr. Jane Smith"
                />
                <div className="card-body">
                  <h5 className="card-title">Dr. Jane Smith</h5>
                  <p className="card-text text-muted">
                    Pediatric dentist passionate about making dental visits fun and stress-free for kids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="text-center">
          <h3 className="mb-3">Our Philosophy</h3>
          <p className="text-muted">
            Our mission is to provide high-quality dental care in a comfortable and compassionate environment.
            We believe in preventative care, patient education, and building long-lasting relationships with our patients.
          </p>
        </section>

      </div>
    </div>
    
   </>);
};

export default About;
