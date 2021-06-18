import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="Header">
      <div className="wrapper">
        <h2>PS Management</h2>
        <nav>
          <ul>
            <li>
              <a href="/team">Quienes somos</a>
            </li>
            <li>
              <a href="/portfolio">Nuestras Actrices</a>
            </li>
            <li>
              <a href="/location">Dónde estamos</a>
            </li>
            <li>
              <a href="/divacell">Divacell©</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
