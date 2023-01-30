import React from "react";
import { NavLink } from "react-router-dom";
function NavbarItem({ to, value, activenav }) {
  return (
      <NavLink
        className="main-nav"
        to={to}
      >
        {value}
      </NavLink>
  );
}

export default NavbarItem;
