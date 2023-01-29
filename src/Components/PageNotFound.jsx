import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h2>404 page is not found</h2>
      <p>Link is not correct</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default PageNotFound;
