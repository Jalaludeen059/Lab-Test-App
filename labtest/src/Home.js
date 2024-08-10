import React from 'react';

import './Home.css'; // Import the CSS file for home styling

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Medical Lab Test</h1>
            <p>Your health is our priority. Get accurate and reliable lab results quickly.</p>
            
            <div className="service-details" id="services">
                <h2>Our Services</h2>
                <p>We provide a comprehensive range of lab tests to help you stay healthy.</p>
                <div className="services-grid">
                    <div className="service-box">
                        <h3>Blood Tests</h3>
                        <p>Complete blood count, blood glucose, cholesterol, and more.</p>
                    </div>
                    <div className="service-box">
                        <h3>Urine Tests</h3>
                        <p>Urinalysis, kidney function tests, and other diagnostics.</p>
                    </div>
                    <div className="service-box">
                        <h3>COVID-19 Testing</h3>
                        <p>Get your PCR or rapid antigen test with quick results.</p>
                    </div>
                    <div className="service-box">
                        <h3>Specialized Tests</h3>
                        <p>Hormone panels, allergy testing, and other specialized services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
