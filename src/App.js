import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boxes: [
        {
          text: "frogs",
          color: "green",
        },
        {
          text: "turkey",
          color: "pink",
        },
        {
          text: "donkey",
          color: "brown",
        },
      ]
    };
  }

  render() {
    const boxes = this.state.boxes.map((box, i) => (
      <Box 
        key={i}
        text={box.text}
        color={box.color}
      />
    ))

    return (
      <div>
        {boxes}
      </div>
    );
  }
}

export default App;
