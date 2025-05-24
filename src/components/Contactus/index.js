import  { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (simple)
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    try {
     
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Contact Us</h2>

      {/* Contact info */}
      <div className="mb-4">
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@dentalcare.com</p>
        <p><strong>Address:</strong> 424 Reedy River Ct, Lexington, SC 29073, USA</p>
      </div>

      {/* Google Maps Embed */}
      <div className="mb-4">
        <iframe
  title="Google Maps"
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form-control"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      {/* Status message */}
      {status && (
        <div className="mt-3 alert alert-info" role="alert">
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
