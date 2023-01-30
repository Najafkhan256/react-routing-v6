import React from "react";
import { NavLink } from "react-router-dom";

const Routing = () => {
  return (
    <div className="nav-routing">
      <div className="logo">
        <h2>React Routing</h2>
      </div>
      <navbar className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "green" : "black" };
              }}
              className="nav-bar-link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "green" : "black" };
              }}
              className="nav-bar-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "green" : "black" };
              }}
              className="nav-bar-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "green" : "black" };
              }}
              className="nav-bar-link"
              to="/filter"
            >
              Filter
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "green" : "black" };
              }}
              className="nav-bar-link"
              to="/post"
            >
              Post
            </NavLink>
          </li>
        </ul>
      </navbar>
    </div>
  );
};

export default Routing;
