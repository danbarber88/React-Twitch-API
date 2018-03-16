import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
	render() {
		return(
			<div className='search-container'>
				<i className='fa fa-search'></i>
				<input className="search-bar" type="text" placeholder="Search" />
			</div>
		);
	}
}

export default Search