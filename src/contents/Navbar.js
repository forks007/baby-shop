import React, { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            Baby
            <i class="fas fa-regular fa-baby-carriage"></i>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">Home</li>
            <li className="nav-item">Shop</li>
            <li className="nav-item">Catagory</li>
            <li className="nav-item">Blogs</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
