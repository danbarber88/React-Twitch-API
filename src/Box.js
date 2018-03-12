import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class Box extends Component {
	constructor(props){
		super(props);

		this.buttonPress = this.buttonPress.bind(this);
	}

	buttonPress() {
		alert(this.props.text)
	}

	render() {
		return (
			<div>
				<div 
					className="box" 
					style={{background: this.props.color}}
				>
					{this.props.text}
				</div>
				<Button 
					buttonPress={this.buttonPress}
				/>
			</div>
		);
	};
}

export default Box