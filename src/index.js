import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const $root = document.querySelector("#root");

// let score;
// let targetScore;

// const makeGuess = () => {
//   const $score = document.querySelector("#root p");
//   $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

//   if (score > targetScore) {
//     alert("You lost this round!");
//     playRound();
//   } else if (score === targetScore) {
//     alert("You won this round!");
//     playRound();
//   }
// };

// this.element.addEventListener(
//     "click",
//     () => {
//       score += this.value;
//       makeGuess();
//     },
//     false
//   );

// const playRound = () => {
//     const fragment = document.createDocumentFragment();
//     const $score = document.createElement("p");
//     targetScore = Math.floor(Math.random() * 50) + 25;
//     score = 0;
//     $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
//     crystals
//       .sort(() => 0.5 - Math.random())
//       .forEach(crystal => crystal.render(fragment));
//     fragment.appendChild($score);
//     $root.innerHTML = "";
//     $root.appendChild(fragment);
//   };
  
//   playRound();


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
