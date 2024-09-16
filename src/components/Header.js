import React from 'react';
import reactLogo from "../images/logo192.png"

export default function Header() {
    return (
      <header>
          <nav className="navbar">
            <section className="navbar-logo">
              <img src={reactLogo} className="nav-logo" alt="logo"></img>
              <h2>ReactFacts</h2>
            </section>
            <ul className="nav-items">
              <li className="nav-list">React Course - Project 1</li>
            </ul>
          </nav>
      </header>
    )
}

