import React, { Component } from 'react';
import './ButtonGroup.css'

class ButtonGroup extends Component {
	constructor(props) {
		super(props);

		this.isActive = this.isActive.bind(this);
	}

	isActive(name) {
		return this.props.active === name ? 'btn active' : 'btn';
	}

	render() {
		return (
			<div className='btn-group'>
        <div className={this.isActive('all')} onClick={this.props.all}>All</div>
        <div className={this.isActive('online')} onClick={this.props.online}>Online</div>
        <div className={this.isActive('offline')} onClick={this.props.offline}>Offline</div>
      </div>
		);
	}
}

export default ButtonGroup;