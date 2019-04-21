import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {

	maxId = 0;

	state = {
		todoDate: [
			this.createTodoItem('Drink coffee'),
			this.createTodoItem('Make awesome app'),
			this.createTodoItem('Have a lunch'),
		] 
	}

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++,
		};
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
		const newTodoItem = this.createTodoItem(this.getTextTodo());
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

	render() {
		const {
			state: {
				todoDate
			},
			delTodoItem,
			onToggleImportant,
			onToggleDone,
			addItem,
			getTextTodo,
		} = this;
		const todoCount = todoDate.filter(item => item.done).length;
		const todoDoneCount = todoDate.length - todoCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={todoDoneCount} />
				<div className="top-panel d-flex">
					<SearchPanel
						getTextTodo={getTextTodo}/>
					<ItemStatusFilter />
				</div>

				<TodoList
					todos={todoDate}
					onDeleted={delTodoItem}
					onToggleImportant={onToggleImportant}
					onToggleDone={onToggleDone}/>
				<ItemAddForm
					onItemAdded={addItem}/>
			</div>
		);
	}
}
