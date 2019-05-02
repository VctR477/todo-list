import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
	btnsList = [ 'All', 'Active', 'Done' ];
	
	state = {
		isActive: 'All',
	};

	onClickFilter(text) {
		this.setState(({ isActive }) => {
			return {
				isActive: text
			};
		});
	}

	createBtns() {
		const { onToggleStatusFilter } = this.props;
		const { isActive } = this.state;
		return this.btnsList.map((btn) => {
			const classList = `btn ${isActive === btn ? 'btn-info': 'btn-outline-secondary'}`;
			return (
				<button
					type="button"
					key={btn}
					className={ classList }
					onClick={() => { onToggleStatusFilter(btn); this.onClickFilter(btn); }}>{btn}</button>
			);
		});
	}

	render() {
		return (
			<div className="btn-group">
				{this.createBtns()}
			</div>
		);
	}
}
