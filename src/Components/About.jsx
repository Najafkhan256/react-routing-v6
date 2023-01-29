import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <ul className="nav-links">
        <li>
          <Link to="/user/najaf">Najaf</Link>
        </li>
        <li>
          <Link to="/user/annus">Annus</Link>
        </li>
        <li>
          <Link to="/user/haider">Haider</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
