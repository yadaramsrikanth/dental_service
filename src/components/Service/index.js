import { Accordion } from "react-bootstrap";


import "./index.css";

const servicesData = [
  {
    id: 1,
    title: "Teeth Cleaning",
    image: "https://cdn-icons-png.flaticon.com/512/2913/2913469.png",
    description: "Professional cleaning to remove plaque and tartar buildup.",
    details: "Recommended every 6 months to maintain oral hygiene and prevent gum disease."
  },
  {
    id: 2,
    title: "Dental Fillings",
    image: "https://cdn-icons-png.flaticon.com/512/2436/2436638.png",
    description: "Restoring decayed or damaged teeth with fillings.",
    details: "We use safe, durable materials to restore functionality and appearance."
  },
  {
    id: 3,
    title: "Tooth Extraction",
    image: "https://cdn-icons-png.flaticon.com/512/3964/3964746.png",
    description: "Safe removal of impacted or severely damaged teeth.",
    details: "Performed under local anesthesia with complete care for healing."
  },
  {
    id: 4,
    title: "Braces & Aligners",
    image: "https://cdn-icons-png.flaticon.com/512/10386/10386371.png",
    description: "Orthodontic solutions for a straighter smile.",
    details: "Clear aligners and traditional braces available for all age groups."
  },
  {
    id: 5,
    title: "Teeth Whitening",
    image: "https://cdn-icons-png.flaticon.com/512/881/881132.png",
    description: "Brighten your teeth with safe and effective whitening.",
    details: "In-clinic or take-home whitening treatments available."
  },
  {
    id: 6,
    title: "Root Canal Treatment",
    image: "https://cdn-icons-png.flaticon.com/512/4850/4850225.png",
    description: "Treating infected tooth pulp to save your natural tooth.",
    details: "Minimally painful with quick recovery and restored function."
  },
];

const Service = () => {
  return (<>
  
 
    <div className="services-page py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Dental Services</h2>
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={service.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={service.image}
                  className="card-img-top p-4"
                  alt={service.title}
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>More Info</Accordion.Header>
                    <Accordion.Body>{service.details}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
   </>);
};

export default Service
