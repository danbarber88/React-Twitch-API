import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import StreamList from './StreamList';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='btn-group'>
          <div className='btn'>All</div>
          <div className='btn'>Online</div>
          <div className='btn'>Offline</div>
        </div>
        <Search />
        <StreamList />
      </div>
    );
  }
}

export default App;