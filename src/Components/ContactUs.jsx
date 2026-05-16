// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import "../Styles/ContactUs.css";

// export default function ContactUs() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs
//             .send(
//                 "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
//                 "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
//                 formData,
//                 "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
//             )
//             .then(
//                 (response) => {
//                     console.log("SUCCESS!", response.status, response.text);
//                     alert("Message sent successfully!");
//                     setFormData({
//                         name: "",
//                         email: "",
//                         phone: "",
//                         subject: "",
//                         message: "",
//                     });
//                 },
//                 (error) => {
//                     console.log("FAILED...", error);
//                     alert("Failed to send message. Please try again.");
//                 }
//             );
//     };

//     return (
//         <div>
//             <section className="contact-info-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
//                             <div className="contact-form">
//                                 <div className="inner-box">
//                                     <form id="contact-form" onSubmit={handleSubmit}>
//                                         <div className="row">
//                                             <div className="col-xl-6 col-lg-12">
//                                                 <div className="input-box">
//                                                     <input
//                                                         type="text"
//                                                         name="name"
//                                                         value={formData.name}
//                                                         onChange={handleChange}
//                                                         placeholder="Name"
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="input-box">
//                                                     <input
//                                                         type="text"
//                                                         name="phone"
//                                                         value={formData.phone}
//                                                         onChange={handleChange}
//                                                         placeholder="Phone"
//                                                     />
//                                                 </div>
//                                                 <div className="input-box">
//                                                     <input
//                                                         type="email"
//                                                         name="email"
//                                                         value={formData.email}
//                                                         onChange={handleChange}
//                                                         placeholder="Email"
//                                                         required
//                                                     />
//                                                 </div>
//                                                 <div className="input-box">
//                                                     <input
//                                                         type="text"
//                                                         name="subject"
//                                                         value={formData.subject}
//                                                         onChange={handleChange}
//                                                         placeholder="Subject"
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div className="col-xl-6 col-lg-12">
//                                                 <div className="input-box">
//                                                     <textarea
//                                                         name="message"
//                                                         value={formData.message}
//                                                         onChange={handleChange}
//                                                         placeholder="Your Message..."
//                                                         required
//                                                     ></textarea>
//                                                 </div>
//                                                 <div className="button-box">
//                                                     <button type="submit">Send Message</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again.");
          setIsSending(false);
        },
      );
  };

  return (
    <section className="contact-section-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col xl={10} lg={12}>
            <div className="contact-glass-card">
              {/* Section Header Labels */}
              <div className="contact-header text-center">
                <span className="contact-badge">GET IN TOUCH</span>
                <h2 className="contact-main-title">Drop Us A Line</h2>
                <div className="contact-gold-line"></div>
                <p className="contact-subtitle">
                  Have questions about wholesale distributions or fresh custom
                  orders? Reach out right now.
                </p>
              </div>

              {/* Form Input Container */}
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="modern-contact-form"
              >
                <Row className="g-4">
                  {/* Left Fields Column */}
                  <Col md={6}>
                    <div className="form-group-custom">
                      <input
                        type="text"
                        name="name"
                        className="custom-form-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group-custom">
                      <input
                        type="text"
                        name="phone"
                        className="custom-form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group-custom">
                      <input
                        type="email"
                        name="email"
                        className="custom-form-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="form-group-custom">
                      <input
                        type="text"
                        name="subject"
                        className="custom-form-input"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                      />
                    </div>
                  </Col>

                  {/* Right Message Field Column */}
                  <Col md={6} className="d-flex flex-column">
                    <div className="form-group-custom flex-grow-1">
                      <textarea
                        name="message"
                        className="custom-form-textarea h-100"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message..."
                        required
                      ></textarea>
                    </div>
                    <div className="button-wrapper mt-auto">
                      <button
                        type="submit"
                        className="contact-submit-btn"
                        disabled={isSending}
                      >
                        {isSending ? "Sending Message..." : "Send Message"}
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
