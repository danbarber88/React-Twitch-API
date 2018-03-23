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
      streamersList: ["CohhCarnage", "Sacriel", "break", "KingGothalion", "DansGaming", "itmeJP", "Day9tv", "Aculite", "Quill18", "LIRIK", "jhovgaard", "JackFrags"],
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

 /*
  *
  * Use the twitch api to find all streamers in the streamerList state variable.
  * Then build an array of objects and when finished set streamerData to that array.
  *
  */ 
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
            viewers: '',
          }
        )
      })
      .then(() => {
        this.setState({
          streamersData: arr,
        })
      })
      .then(this.onlineCheck())
    });
  }

  // Loop over the streamer data, find online streamers and update their data.
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
                viewers: res.stream.viewers,
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
    .sort((a, b) => (b.online - a.online)) // sort online first
		.map((streamer, i) => (
			<Stream 
      	key={i}
        online={streamer.online}
        url={streamer.url}
        logo={streamer.logo}
        name={streamer.name}
        playing={streamer.playing}
        viewers={streamer.viewers}
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