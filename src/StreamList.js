import React, { Component } from 'react';
import Search from './Search';
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
        },
        {
          online: false,
          name: 'BrutE',
          title: 'mmmmmmmmmBrutE',
        },
      ]
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.forceUpdate();
  }

	render() {
		let searchBar = document.getElementById('search-bar');
		let streamers = [];

		if(searchBar) {
			streamers = this.state.streamers
			// if the search bar has a value filter by it
			.filter((stream) => (!stream.name.toLowerCase().indexOf(searchBar.value)))
			// filter by all OR offline - online
			.filter((stream) => (this.props.status === 'all' || stream.online === this.props.status))
			.map((streamer, i) => (
	      <Stream 
	      	key={i}
	        online={streamer.online}
	        name={streamer.name}
	        title={streamer.title}
	      />
    	));
		} else {
			streamers = this.state.streamers.map((streamer, i) => (
	      <Stream 
	      	key={i}
	        online={streamer.online}
	        name={streamer.name}
	        title={streamer.title}
	      />
	    ));
		}

    return (
    	<div>
    		<Search 
          onFormChange={this.handleSearch}
        />
      	{streamers}
      </div>
    );
  }
}

export default StreamList;