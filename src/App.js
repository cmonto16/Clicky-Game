import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Footer from "./components/Footer";
import ImageGrid from "./components/ImageGrid";

const images = [
  "/images/aladdin.jpeg",
  "/images/alice.jpeg",
  "/images/donald.png",
  "/images/dory.jpeg",
  "/images/dumbo.jpeg",
  "/images/grumpy.jpeg",
  "/images/anna.jpeg",
  "/images/mickey.jpeg",
  "/images/minnie.jpeg",
  "/images/peter.jpeg",
  "/images/stitch.jpeg",
  "/images/winnie-the-pooh.jpeg",
  "/images/marie.jpeg",
  "/images/chip.jpeg",
  "/images/jessie.jpeg",
  "/images/jasmine.jpeg"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      clicked: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const {
      target: { src }
    } = e;
    const state = this.state;
    if (state.clicked.indexOf(src) >= 0) {
      state.clicked = [];
      state.score = 0;
    } else {
      state.clicked.push(src);
      state.score += 1;
      if (state.score > state.topScore) {
        state.topScore = state.score;
      }
    }
    this.setState(state);
  }

  shuffleImages(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  render() {
    this.shuffleImages(images);
    return (
      <div className="app">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Title/>
        <ImageGrid images={images} handleClick={this.handleClick}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
