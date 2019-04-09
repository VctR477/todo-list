import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {

	render() {
		this.todos = [
			{ label: 'Drink coffee', important: false, id: 2343 },
			{ label: 'Make awesome app', important: true, id: 24352 },
			{ label: 'Have a lunch', important: false, id: 908342 },
		];

		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>

				<TodoList todos={this.todos} />
			</div>
		);
	}
}
