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
        <li>
          <Link to="/post/123/hello-world">/post/123/hello-world</Link>
        </li>
        <li>
          <Link to="/post/456/goodbye-moon">/post/456/goodbye-moon</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
