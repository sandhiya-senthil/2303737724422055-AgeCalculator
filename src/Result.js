import React from "react";

const Result = ({ age }) => {
  return age !== null ? (
    <div>
      <p>Your Age: {age} years</p>
    </div>
  ) : null;
};

export default Result;
