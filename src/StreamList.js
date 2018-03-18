import React, { Component } from 'react';
import Search from './Search';
import Stream from './Stream';
import ButtonGroup from './ButtonGroup';

class StreamList extends Component {
	constructor(props) {
    super(props)

    this.state = {
    	status: 'all',
      active: 'all',
      streamers: [
        {
          online: false,
          url: 'https://www.twitch.tv/CohhCarnage',
          name: 'CohhCarnage',
          title: 'Playing some game and taking too long about it',
        },
        {
          online: false,
          url: 'https://www.twitch.tv/sacriel',
          name: 'Sacriel',
          title: 'Well what actually happened was...',
        },
        {
          online: true,
          url: 'https://www.twitch.tv/break',
          name: 'BreaK',
          title: 'mmmmmmmmmBreaK',
        },
        {
          online: false,
          url: '#',
          name: 'BrutE',
          title: 'mmmmmmmmmBrutE',
        },
        {
          online: true,
          url: '#',
          name: 'Dan',
          title: 'Piss Off!',
        },
      ]
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.all = this.all.bind(this);
    this.online = this.online.bind(this);
    this.offline = this.offline.bind(this);
  }

  handleSearch() {
    this.forceUpdate();
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
		let searchBar = document.getElementById('search-bar');
		let streamers = [];

		if(searchBar) {
			streamers = this.state.streamers
			// if the search bar has a value filter by it
			.filter((streamer) => (!streamer.name.toLowerCase().indexOf(searchBar.value)))
			// filter by all OR offline - online
			.filter((streamer) => (this.state.status === 'all' || streamer.online === this.state.status))
			.map((streamer, i) => (
				<Stream 
	      	key={i}
	        online={streamer.online}
	        url={streamer.url}
	        name={streamer.name}
	        title={streamer.title}
	      />
    	));
		} else {
			streamers = this.state.streamers.map((streamer, i) => (
	      <Stream 
	      	key={i}
	        online={streamer.online}
	        url={streamer.url}
	        name={streamer.name}
	        title={streamer.title}
	      />
	    ));
		}

    return (
    	<div>
    		<ButtonGroup 
          all={this.all}
          online={this.online}
          offline={this.offline}
          active={this.state.active}
        />
    		<Search 
          onFormChange={this.handleSearch}
        />
      	{streamers}
      </div>
    );
  }
}

export default StreamList;