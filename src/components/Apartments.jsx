import React from "react";
import "./Hero.css"; // We’ll use same CSS for simplicity

const apartmentsData = [
    {
        id: 1,
        title: "3-Bedroom Apartment",
        price: "1,200,000 EGP",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 2,
        title: "2-Bedroom Apartment",
        price: "900,000 EGP",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 3,
        title: "Luxury Villa",
        price: "3,500,000 EGP",
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 4,
        title: "Studio Apartment",
        price: "600,000 EGP",
        image: "https://via.placeholder.com/300x200"
    }
];

const Apartments = () => {
    return (
        <section id="apartments" className="apartments">
            <h2 className="section-title">Our Apartments</h2>
            <div className="apartment-grid">
                {apartmentsData.map((apt) => (
                    <div key={apt.id} className="apartment-card">
                        <img src={apt.image} alt={apt.title} />
                        <h3>{apt.title}</h3>
                        <p>{apt.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Apartments;
