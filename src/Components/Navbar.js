import React, { useState } from "react";
import "./Navbar.css";
import plant from "./images/plant.png";
import search from "./images/search.png";

function Navbar({ onNavigate }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="Navigation">
      {/* Logo Section */}
      <div id="im2">
        <img src={plant} alt="FloraVision Logo" />
        <h6>FloraVision</h6>
      </div>

      {/* Navigation Buttons */}
      <div>
        <button id="btn" onClick={() => onNavigate("home")}>Home</button>

        <div style={{ display: "inline-block", position: "relative" }}>
          <button id="btn" onClick={() => setShowDropdown(!showDropdown)}>
            Plant Type ⬇
          </button>
          <div>

          {showDropdown && (
            <div className="dropdown">
              <button id="btn"onClick={() => { setShowDropdown(false); onNavigate("indoor"); }}>
                Indoor Plants
              </button>
              <button id="btn"onClick={() => { setShowDropdown(false); onNavigate("outdoor"); }}>
                Outdoor Plants
              </button>
              
            </div>
          )}
          </div>
        </div>

        <button id="btn" onClick={() => onNavigate("more")}>More</button>
        <button id="btn" onClick={() => onNavigate("contact")}>Contact</button>
      </div>

      {/* Search Placeholder */}
      <div>
        <img style={{ width: "20px", height: "20px" }} src={search} alt="Search Icon" />

      </div>
    </div>
  );
}

export default Navbar;
