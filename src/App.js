import React, { Component } from 'react';
import './App.css';
import ButtonGroup from './ButtonGroup';
import StreamList from './StreamList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'all',
      active: 'all',
    };

    this.all = this.all.bind(this);
    this.online = this.online.bind(this);
    this.offline = this.offline.bind(this);
  }

  all() {
    this.setState({
      status: 'all',
      active: 'all',
    });
  }

  online() {
    this.setState({
      status: true,
      active: 'online',
    });
  }

  offline() {
    this.setState({
      status: false,
      active: 'offline',
    });
  }

  render() {
    return (
      <div className='container'>
        <ButtonGroup 
          all={this.all}
          online={this.online}
          offline={this.offline}
          active={this.state.active}
        />
        <StreamList 
          status={this.state.status}
        />
      </div>
    );
  }
}

export default App;