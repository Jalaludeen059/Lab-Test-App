import React from 'react';
import './AboutPage.css'; // Ensure this CSS file matches the styles we discussed

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our company and what we stand for.</p>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver innovative solutions that make a positive impact on our clients and the community.</p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for excellence in everything we do.
          </li>
          <li>
            <strong>Innovation:</strong> We foster creativity and innovation to solve complex challenges.
          </li>
          <li>
            <strong>Customer Focus:</strong> We are dedicated to meeting the needs of our clients and providing exceptional service.
          </li>
        </ul>

        <h2>Company History</h2>
        <p>Founded in 2024, our company has grown from a small startup to a leading provider of industry-specific solutions. Over the years, we have achieved significant milestones and built a reputation for quality and reliability.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions or need more information, feel free to reach out to us:</p>
        <p>Email: <a href="mailto:info@company.com">info@company.com</a></p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123, othakadai,Madurai</p>
      </section>
      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} Medical Lab Test. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
