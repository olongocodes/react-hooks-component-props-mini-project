import React from "react";

function Header(props) {
  return (
    <header>
      <div>
        <h1>{props.name}</h1>
      </div>
    </header>
  );
}

export default Header;
