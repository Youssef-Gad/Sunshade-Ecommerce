import { useState } from "react";

function Button({ children, style, callback, withDelay = true }) {
  const [disable, setDisable] = useState(false);

  return (
    <button
      className={`${disable ? "cursor-not-allowed" : ""} ${style}`}
      disabled={disable}
      onClick={() => {
        setDisable(true);
        setTimeout(
          () => {
            setDisable(false);
            callback();
          },
          withDelay ? 500 : 0
        );
      }}
    >
      {children}
    </button>
  );
}

export default Button;
