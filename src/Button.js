import React, { Component } from 'react';
import './App.css'


console.log(this.props)
class Button extends Component {
	
	render() {
		return (
			<button onClick={this.props.buttonPress}>button</button>
		);
	}
}

export default Button