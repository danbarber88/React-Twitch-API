import React, { Component } from 'react';
import Search from './Search';
import Stream from './Stream';
import ButtonGroup from './ButtonGroup';

class StreamList extends Component {
	constructor(props) {
    super(props)

    this.state = {
    	onlineFilter: undefined,
      active: 'all',
      searchValue: '',
      streamers: [
        {
          online: true,
          url: 'https://www.twitch.tv/CohhCarnage',
          name: 'CohhCarnage',
          title: 'Playing some game and taking too long about it',
        },
        {
          online: true,
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
          online: false,
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

  handleSearch(e) {
    this.setState({searchValue: e.target.value})
  }

  all() {
    this.setState({
      onlineFilter: undefined,
      active: 'all',
    });
  }

  online() {
    this.setState({
      onlineFilter: true,
      active: 'online',
    });
  }

  offline() {
    this.setState({
      onlineFilter: false,
      active: 'offline',
    });
  }

	render() {
		let streamers = this.state.streamers
		// if the search bar has a value filter by it - filter out the names (lower case) not in the search bar
		.filter((streamer) => (!streamer.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase())))
		// filter by all OR offline - online
		.filter((streamer) => (this.state.onlineFilter === undefined || streamer.online === this.state.onlineFilter))
    .sort((a, b) => (b.online - a.online))
		.map((streamer, i) => (
			<Stream 
      	key={i}
        online={streamer.online}
        url={streamer.url}
        name={streamer.name}
        title={streamer.title}
      />
  	));

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