import React from "react";

function Button({ handleClick, children }) {
  return (
    <>
      <p>
        <button type="button" onClick={handleClick}>
          {children}
        </button>
      </p>
    </>
  );
}

export default React.memo(Button);
