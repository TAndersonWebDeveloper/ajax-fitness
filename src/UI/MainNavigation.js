import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import logo from "./../assets/Ajax-logo.png";
function MainNavigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  // const [yPosition, setYPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navMenuHandler = (e) => {
    setNavIsOpen(!navIsOpen);
  };

  const navItemClickedHandler = (e) => {
    setNavIsOpen(false);
  };

  window.addEventListener("scroll", () => {
    setNavIsOpen(false);
    if (window.pageYOffset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <header>
      <nav className={`main-navigation ${scrolled ? "scrolled" : ""}`}>
        <NavLink to="/" onClick={navItemClickedHandler}>
          <img
            src={logo}
            alt="Ajax Fitness Logo"
            className="main-navigation-logo"
          />
        </NavLink>
        <ul className={`main-navigation--list ${navIsOpen ? "" : "hidden"}`}>
          <li>
            <NavLink to="/" onClick={navItemClickedHandler}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={navItemClickedHandler}>
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to="/workouts" onClick={navItemClickedHandler}>
              WORKOUTS
            </NavLink>
          </li>
        </ul>
        <div
          className={`menu-btn--container ${navIsOpen ? "open" : ""}`}
          onClick={navMenuHandler}
        >
          <div className={`menu-btn--top ${navIsOpen ? "open" : ""}`}></div>
          <div className={`menu-btn--middle ${navIsOpen ? "open" : ""}`}></div>
          <div className={`menu-btn--bottom ${navIsOpen ? "open" : ""}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
