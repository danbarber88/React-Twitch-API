import React, { Component } from 'react';
import './App.css';

import StreamList from './StreamList';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <StreamList />
      </div>
    );
  }
}

export default App;