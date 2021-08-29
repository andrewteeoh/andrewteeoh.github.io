import React from "react";
import * as s from './header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            Blog
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
