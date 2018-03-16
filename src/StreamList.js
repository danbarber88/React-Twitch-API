import React, { Component } from 'react';
import Stream from './Stream';

class StreamList extends Component {
	constructor(props) {
    super(props)

    this.state = {
      streamers: [
        {
          online: false,
          name: 'CohhCarnage',
          title: 'Playing some game and taking too long about it',
        },
        {
          online: true,
          name: 'Sacriel',
          title: 'Well what actually happened was...'
        },
        {
          online: true,
          name: 'BreaK',
          title: 'mmmmmmmmmBreaK',
        }
      ]
    }
  }

	render() {
    const streamers = this.state.streamers.map((streamer) => (
      <Stream 
        online={streamer.online}
        name={streamer.name}
        title={streamer.title}
      />
    ));

    return (
    	<div>
      	{streamers}
      </div>
    );
  }
}

export default StreamList;