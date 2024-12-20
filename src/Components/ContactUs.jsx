import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/ContactUs.css";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
                formData,
                "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
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
                },
                (error) => {
                    console.log("FAILED...", error);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    return (
        <div>
            <section className="contact-info-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact-form">
                                <div className="inner-box">
                                    <form id="contact-form" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12">
                                                <div className="input-box">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="input-box">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Phone"
                                                    />
                                                </div>
                                                <div className="input-box">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Email"
                                                        required
                                                    />
                                                </div>
                                                <div className="input-box">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        placeholder="Subject"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12">
                                                <div className="input-box">
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Your Message..."
                                                        required
                                                    ></textarea>
                                                </div>
                                                <div className="button-box">
                                                    <button type="submit">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
