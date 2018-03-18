import React, { Component } from 'react';
import './Stream.css';

class Stream extends Component {
	render() {
		const isOnline = this.props.online;

		return(
			<a href={this.props.url} className='stream-container' target='_blank'>
				<div className='avatar'>
					<i className='fab fa-twitch fa-2x'></i>
				</div>
				<div className='desc'>
					<h2 className='name'>{this.props.name}</h2>
					<h3 className='title'>{isOnline ? this.props.title : ''}</h3>
				</div>
				<div className='icon'>
					{isOnline ? <i className='fas fa-check'></i> : <i className='fas fa-times'></i>}
				</div>
			</a>
		);
	}
}

export default Stream;