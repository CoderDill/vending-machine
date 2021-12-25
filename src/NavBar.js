import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
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

export default NavBar;
