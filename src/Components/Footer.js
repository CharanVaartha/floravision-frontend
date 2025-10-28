import React, { useState } from "react";
import "./Footer.css";
import plant from "./images/plant.png";

function Footer({ onNavigate }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <footer>
      <div className="footer-content">
        {/* FloraVision Logo & Description */}
        <div className="footer-section">
          <div id="im2">
            <img src={plant} alt="FloraVision Logo" />
            <h6>FloraVision</h6>
          </div>
          <p>
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div>
            <button id="btn" onClick={() => onNavigate("home")}>Home</button>

            <div style={{ display: "inline-block", position: "relative" }}>
              <button id="btn" onClick={() => setShowDropdown(!showDropdown)}>
                Plant Type ⬇
              </button>

              {showDropdown && (
                <div className="dropdown">
                  <button
                    id="btn"
                    onClick={() => {
                      setShowDropdown(false);
                      onNavigate("indoor");
                    }}
                  >
                    Indoor Plants
                  </button>
                  <button
                    id="btn"
                    onClick={() => {
                      setShowDropdown(false);
                      onNavigate("outdoor");
                    }}
                  >
                    Outdoor Plants
                  </button>
                </div>
              )}
            </div>

            <button id="btn" onClick={() => onNavigate("contact")}>Contact</button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h5>For every update</h5>
          <form className="email-form">
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>

      <p className="footer-copy">
        © 2025 Earth’s Exhale | Designed with 🌱 by You
      </p>
    </footer>
  );
}

export default Footer;
