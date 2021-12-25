import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/drink">
        Drink
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
    </nav>
  );
}

export default Navbar;
