import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, SetCalculation] = useState(0);

  useEffect(() => {
    // document.title = `Chat ${count}`;
    SetCalculation(() => count * 2);
  }, [count]);
  return (
    <>
      <div className="container">
        <p>Sent you {count} Natification </p>
        <p>Calculation:{calculation}</p>
        <button
          className="btn btn-primary"
          onClick={() => setCount((cal) => cal + 1)}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default UseEffect;
