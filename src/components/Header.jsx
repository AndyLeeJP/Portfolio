import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Portfolio</h3>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">SNS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
