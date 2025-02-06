import React from "react";
import { Link } from "react-router-dom";
import CryptoFilterCard from "../components/cryptos/components/cryptostats/CryptoFilterCard";
import BestCryptostats from "../components/cryptos/components/cryptostats/BestCryptostats";
import News from "../components/news/components/News";
import "../pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Stay Ahead in the Crypto Market</h1>
        <p>Get real-time updates on crypto prices and the latest news.</p>
        <Link to="/markets" className="btn btn-primary">Explore Markets</Link>
      </div>

      

      {/* Roadmap Section */}
      <section className="section roadmap-section">
        <h2 className="fs-1 py-2" >🛣️ Our Crypto Roadmap</h2>
        <div className="roadmap-container">
          <div className="roadmap-image">
            <img src="./src/assets/roadmap.jpg" alt="" />
          </div>
          <div className="roadmap-details">
            <h3>Building the Future of Crypto</h3>
            <p>We have a clear vision for the future of digital assets. Our roadmap includes real-time analytics, AI-powered predictions, and a decentralized community-driven platform.</p>
            <ul>
              <li>🚀 Q1: Launch Crypto Market Analysis</li>
              <li>🔍 Q2: AI-powered Crypto Predictions</li>
              <li>🌐 Q3: NFT & Web3 Integrations</li>
              <li>💡 Q4: Decentralized Governance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="section why-choose-us">
        <h2>💡 Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Real-time Updates</h3>
            <p>Get live cryptocurrency prices and market trends in real time.</p>
          </div>
          <div className="feature">
            <h3>AI-Powered Insights</h3>
            <p>Leverage AI-driven analytics to make informed decisions.</p>
          </div>
          <div className="feature">
            <h3>Secure & Transparent</h3>
            <p>Your data is protected with advanced security measures.</p>
          </div>
        </div>
      </section>
      {/* Trending Coins */}
      <section className="section">
        <h2>📈 Trending Cryptos</h2>
        <BestCryptostats />
      </section>

     
    </div>
  );
};

export default Home;
