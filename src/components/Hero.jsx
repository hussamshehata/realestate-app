import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <nav className="navbar">
                <h2 className="logo">Realstate</h2>
                <ul className="nav-links">
                    <li><a href="#apartments">Apartments</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="hero-content">
                <h1>Find Your Perfect Apartment</h1>
                <p>Discover luxury and comfort in every corner of our villages.</p>
                <a href="#apartments" className="hero-btn">View Apartments</a>
            </div>
        </section>
    );
};

export default Hero;
