import { useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [ActiveNavItem, setActiveNavItem] = useState("home");

  return (
    <header className="nav-bar">
      <a href="#" className="nav-logo">
        Logo
      </a>
      <ul className="nav-link">
        <li
          className={
            ActiveNavItem === "home" ? "nav-item nav-item-active" : "nav-item"
          }
          onClick={() => setActiveNavItem("home")}
        >
          Home
        </li>
        <li
          className={
            ActiveNavItem === "about" ? "nav-item nav-item-active" : "nav-item"
          }
          onClick={() => setActiveNavItem("about")}
        >
          About
        </li>
        <li
          className={
            ActiveNavItem === "work" ? "nav-item nav-item-active" : "nav-item"
          }
          onClick={() => setActiveNavItem("work")}
        >
          Work
        </li>
        <li
          className={
            ActiveNavItem === "contact"
              ? "nav-item nav-item-active"
              : "nav-item"
          }
          onClick={() => setActiveNavItem("contact")}
        >
          Contact
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
