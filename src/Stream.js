import React, { Component } from 'react';
import './Stream.css';

class Stream extends Component {
	render() {
		const isOnline = this.props.online;

		return(
			<a href={this.props.url} className={isOnline ? 'stream-container' : 'offline stream-container'} target='_blank'>
				<div className='logo'>
					{this.props.logo ? <img src={this.props.logo} /> : <i className='fab fa-twitch fa-2x'></i>}
				</div>
				<div className='desc'>
					<h2 className='name'>{this.props.name}</h2>
					<h3 className='playing'>{isOnline ? this.props.playing : ''}</h3>
				</div>
				<div className='views'>
					{isOnline ? <i class="fas fa-circle"></i> : ''}
					{isOnline ? this.props.viewers : 'offline'}
				</div>
			</a>
		);
	}
}

export default Stream;