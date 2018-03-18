import React, { Component } from 'react';
import Icon from './Icon';
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
					<Icon online={this.props.online} />
				</div>
			</a>
		);
	}
}

export default Stream;