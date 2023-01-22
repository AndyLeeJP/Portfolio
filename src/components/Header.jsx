import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Portfolio</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <a href="#"></a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
            <a href="#"></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
