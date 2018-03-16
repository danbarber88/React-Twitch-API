import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Stream from './Stream';

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
        <Stream 
          name='Text'
          title='Title'
          online={false}
        />
        <Stream 
          name='Text'
          title='Title'
          online={true}
        />
      </div>
    );
  }
}

export default App;