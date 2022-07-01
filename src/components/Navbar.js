import React from 'react'
import '../App.css';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <h3>Logo</h3>

      <ul className='Links'>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
