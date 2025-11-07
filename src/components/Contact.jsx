import React from "react";
import "./Hero.css"; // Using same CSS file for simplicity

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Contact Us</h2>
            <p>Have questions or want to schedule a visit? Reach out to us!</p>

            <div className="contact-info">
                <p>📞 Phone: +20 123 456 789</p>
                <p>💬 WhatsApp: <a href="https://wa.me/20123456789" target="_blank" rel="noopener noreferrer">Message Us</a></p>
                <p>📧 Email: info@realstate.com</p>
            </div>
        </section>
    );
};

export default Contact;
