import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='btn-group'>
          <div className='btn'>All</div>
          <div className='btn'>Online</div>
          <div className='btn'>Offline</div>
        </div>
      </div>
    );
  }
}

export default App;