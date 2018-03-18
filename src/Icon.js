import React, { Component } from 'react';

class Icon extends Component {
	render() {
		const icon = this.props.online ? <i className='fas fa-check'></i> : <i className='fas fa-times'></i>
		return(
			<div>
				{icon}
			</div>
		);
	}
}


export default Icon;