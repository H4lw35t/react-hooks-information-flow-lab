import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Header;

