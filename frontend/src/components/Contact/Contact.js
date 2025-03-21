import React, { useState } from "react";
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        setIsSubmitted(true);

        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <div className="contact-container">
            {/* Small Title */}
            <h3 className="small-title">HAVE ADDITIONAL QUESTIONS?</h3>

            {/* Main Title */}
            <h1 className="main-title">Contact GDG @ NYU</h1>

            {/* Description */}
            <p className="description">
                Contact our team directly via <a href="mailto:gdsc.atnyu@gmail.com">gdsc.atnyu@gmail.com</a> 
                or complete the form provided below.
            </p>

            {/* Contact Form */}
            <div className="contact-card">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitted}>
                        {isSubmitted ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;