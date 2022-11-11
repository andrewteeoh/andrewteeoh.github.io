import { Link } from "gatsby";
import React from "react";
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">
            Home
            </Link>
          </li>
          <li>
            <Link to="/blog">
            Blog
            </Link>
          </li>
          <li>
            About
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
