import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	render() {
		return(
			<div className='search-container'>
				<i className='fa fa-search'></i>
				<input id="search-bar" type="text" placeholder="Search" onChange={this.props.onFormChange}/>
			</div>
		);
	}
}

export default Search