import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Chat ${count}`;

    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });
  return (
    <>
      <div className="container">
        <p>Sent you {count} Natification </p>
      </div>
    </>
  );
};

export default UseEffect;
