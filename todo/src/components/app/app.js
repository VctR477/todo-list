import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {
	const todos = [
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

			<TodoList todos={todos} />
		</div>
	);
};

export default App;
