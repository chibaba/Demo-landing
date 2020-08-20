import React from "react";

import { NavLink } from "react-router-dom";

import "./Navlinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/ui/news">About us</NavLink>
      </li>
      <li>
        <NavLink to="/news/new">Our sevices</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Our Policy</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Contact us</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
