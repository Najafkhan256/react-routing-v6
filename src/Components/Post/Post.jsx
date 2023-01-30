import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  //  USEPARAMS: The useParams hook is used to read the dynamic params from the current URL that were matched by <Route path>
  // USESEARCHPARAMS: The useSearchParams hook is used to Read and Modify the query string in the URL for the current location. Similar to the useState hook of React, the useSearchParams hook of React Router returns an array with two elements: the first is the current location’s search params, and the latter is a function that can be used to update them:
  return (
    <div>
      <h3>Post page</h3>
      <h2>ID: {params.id}</h2>
      <h2>Slug: {params.slug}</h2>
    </div>
  );
};

export default Post;
