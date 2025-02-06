import React from "react";
import "./About.css";
import teamImg from "../assets/team.jpg"; // Replace with actual image path
import securityImg from "../assets/security.jpg"; // Replace with actual image path

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About CryptoPulse</h1>
        <p>Empowering You with Real-Time Crypto Insights and Secure Investments</p>
      </div>

      {/* Our Mission */}
      <section className="about-section">
        <div className="about-content">
          <h2>🌍 Our Mission</h2>
          <p>
            At CryptoPulse, we are dedicated to providing real-time market data,
            latest news, and secure tools for crypto traders and investors.
            Whether you're a beginner or a pro, we've got you covered.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>🚀 Why Choose CryptoPulse?</h2>
        <div className="features">
          <div className="feature">
            <h3>🔍 Real-Time Market Data</h3>
            <p>Get up-to-the-minute price updates on all major cryptocurrencies.</p>
          </div>
          <div className="feature">
            <h3>📊 Advanced Analytics</h3>
            <p>Use our data-driven insights to make informed trading decisions.</p>
          </div>
          <div className="feature">
            <h3>📰 Latest Crypto News</h3>
            <p>Stay ahead of the market with trending news and expert insights.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-section team-section">
        <h2>👨‍💻 Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src={teamImg} alt="Team" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={teamImg} alt="Team" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src={teamImg} alt="Team" />
            <h3>Michael Lee</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="about-section">
        <div className="security-content">
          <img src={securityImg} alt="Security" className="security-img" />
          <div className="security-text">
            <h2>🔒 Security & Trust</h2>
            <p>
              At CryptoPulse, we prioritize your security with encrypted transactions, 
              two-factor authentication, and advanced fraud protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
