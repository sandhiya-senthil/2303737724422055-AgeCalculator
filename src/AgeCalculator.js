import React, { useState } from "react";

const AgeCalculator = ({ onCalculate }) => {
  const [birthDate, setBirthDate] = useState("");

  const calculateAge = () => {
    if (!birthDate) return;
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    onCalculate(age);
  };

  return (
    <div>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge} >Calculate Age</button>
    </div>
  );
};

export default AgeCalculator;
