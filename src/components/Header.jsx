import React from "react";

function Header() {
  return (
    <div className="header-container">
      <h1>
        Anime{" "}
        <span
          style={{
            color: "red",
          }}
        >
          Quotes
        </span>
      </h1>
      <p>Click On The Button To Generate Random Anime Quote</p>
    </div>
  );
}

export default Header;
