import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

	state = {
		todoDate: [
			{ label: 'Drink coffee', important: false, id: 2343 },
			{ label: 'Make awesome app', important: true, id: 24352 },
			{ label: 'Have a lunch', important: false, id: 908342 },
		] 
	}

	delTodoItem = (id) => {
		this.setState(({ todoDate }) => {
			return {
				todoDate: todoDate.filter(item => item.id !== id)
			}
		});
	}

	getTextTodo = () => {
		return 'new Todo';
	}

	addItem = () => {
		const newTodoItem = {
			label: this.getTextTodo(),
			important: false,
			id: Math.floor(Math.random()*9999),
		};
		this.setState(({ todoDate }) => {
			return {
				todoDate: [...todoDate, newTodoItem]
			}
		});
	}

	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel
						getTextTodo={this.getTextTodo}/>
					<ItemStatusFilter />
				</div>

				<TodoList
					todos={this.state.todoDate}
					onDeleted={this.delTodoItem} />
				<ItemAddForm
					onItemAdded={this.addItem}/>
			</div>
		);
	}
}
