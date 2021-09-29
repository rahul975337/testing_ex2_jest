import React, { useState } from "react";

function Button() {
  const [showAnotherButton, setShowAnotherButton] = useState(false);
  return (
    <div>
      <button
        data-testid="button"
        onClick={() => {
          setShowAnotherButton(true);
        }}
      >
        Click Hereeee
      </button>
      {showAnotherButton && <button data-testid="button">Click Hereeee</button>}
    </div>
  );
}

export default Button;
