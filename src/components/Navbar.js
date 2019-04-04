import React from "react";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <a href="/">Clicky Game</a>
        </li>
        <li>Click an image to begin!</li>
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
