import React from "react";
import { Link } from "react-router-dom";

const Routing = () => {
  return (
    <div className="nav-routing">
      <div className="logo">
        <h2>React Routing</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Routing;
