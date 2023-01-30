import React from "react";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let age = searchParams.get("age");
  let city = searchParams.get("city");
  let text = searchParams.get("text");
  return (
    <div>
      {/* http://localhost:3000/filter?age=30&city=lahore -----> search this link in the URL to check the output*/}
      <h2>Filter age is {age}</h2>
      <h2>city is {city}</h2>
      <h2>custom text {text}</h2>
      <button
        onClick={() => {
          setSearchParams({ age: 30 });
        }}
      >
        Set age
      </button>
      <input
        type="text"
        onChange={(e) => {
          setSearchParams({ text: e.target.value, age: 40 });
        }}
      />
    </div>
  );
};

export default Filter;
