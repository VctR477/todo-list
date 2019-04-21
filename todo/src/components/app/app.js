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
			{ label: 'Drink coffee', important: false, id: 2343, done: false, },
			{ label: 'Make awesome app', important: true, id: 24352, done: false, },
			{ label: 'Have a lunch', important: false, id: 908342, done: false, },
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
			done: false,
			id: Math.floor(Math.random()*9999),
		};
		this.setState(({ todoDate }) => {
			return {
				todoDate: [...todoDate, newTodoItem]
			}
		});
	}

	onToggleImportant = (id) => {
		this.setState(({ todoDate }) => {
			return {
				todoDate: todoDate.map(item => {
					if (item.id === id) {
						item.important = !item.important;
					}
					return item;
				})
			}
		});
	}

	onToggleDone = (id) => {
		this.setState(({ todoDate }) => {
			return {
				todoDate: todoDate.map(item => {
					if (item.id === id) {
						item.done = !item.done;
					}
					return item;
				})
			}
		});
	}

	getDoneTodos = () => {
		return this.state.todoDate.filter(item => item.done).length;
	}

	getTodoCount = () => {
		return this.state.todoDate.length - this.getDoneTodos();
	}

	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={this.getTodoCount()} done={this.getDoneTodos()} />
				<div className="top-panel d-flex">
					<SearchPanel
						getTextTodo={this.getTextTodo}/>
					<ItemStatusFilter />
				</div>

				<TodoList
					todos={this.state.todoDate}
					onDeleted={this.delTodoItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}/>
				<ItemAddForm
					onItemAdded={this.addItem}/>
			</div>
		);
	}
}
