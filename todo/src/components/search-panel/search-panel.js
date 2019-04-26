import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

	onChangeInputText = (e) => {
		this.props.onFindSearchText(e.target.value);
	}

	render() {

		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="type to search"
				onChange={this.onChangeInputText}/>
		);
	}
}
