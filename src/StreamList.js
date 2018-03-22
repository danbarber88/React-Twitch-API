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
      streamersList: ["CohhCarnage", "Sacriel", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "ESL_SC2"],
      streamersData: [],
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.all = this.all.bind(this);
    this.online = this.online.bind(this);
    this.offline = this.offline.bind(this);
  }

  componentWillMount(){
    this.streamerChannelData()
  }

  streamerChannelData(){
    const url = "https://wind-bow.glitch.me/twitch-api/channels/";
    let arr = [];
    this.state.streamersList.forEach((streamer) => {
      fetch(url + streamer)
      .then((res) => (res.json()))
      .then((res) => {
        arr.push(
          {
            online: false,
            logo: res.logo,
            url: res.url,
            name:  res.display_name,
            playing: res.game,
          }
        )
      })
      .then(() => {
        this.setState({
          streamersData: arr,
        })
      })
      .then(this.onlineCheck());
    });
  }

  onlineCheck(){
    const url = "https://wind-bow.glitch.me/twitch-api/streams/";
    this.state.streamersList.forEach((streamer) => {
      fetch(url + streamer)
      .then((res) => (res.json()))
      .then((res) => {
        this.setState({
          streamersData: this.state.streamersData.map((streamer) => {
            if(res.stream && res.stream.channel.display_name === streamer.name){
              return Object.assign({}, streamer, {
                online: true,
                playing: res.stream.game,
              });
            } else {
              return streamer;
            }
          }),
        })
      })
    });
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
		let streamers = this.state.streamersData
		// filter out the names (lower case) not in the search bar
		.filter((streamer) => {
      if(streamer.name){
        return !streamer.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase())
      }
    })
		// filter by all OR offline - online
		.filter((streamer) => (this.state.onlineFilter === undefined || streamer.online === this.state.onlineFilter))
    .sort((a, b) => (a.name.localeCompare(b.name))) // sort alphabetical
    .sort((a, b) => (b.online - a.online)) // sort online first
		.map((streamer, i) => (
			<Stream 
      	key={i}
        online={streamer.online}
        url={streamer.url}
        logo={streamer.logo}
        name={streamer.name}
        playing={streamer.playing}
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