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
			hidden: false,
		};
	}

	delTodoItem = (id) => {
		this.setState(({ todoDate }) => {
			return {
				todoDate: todoDate.filter(item => item.id !== id)
			}
		});
	}

	toggleStatusFilter = (currentFilter) => {
		this.setState(({ todoDate }) => {
			//All Active Done
			return {
				todoDate: todoDate.map(item => {
					if (currentFilter === 'All') {
						item.hidden = false;
					} else if (currentFilter === 'Active') {
						item.hidden = false;
						if (item.done) {
							item.hidden = true;
						}
					} else if (currentFilter === 'Done') {
						item.hidden = true;
						if (item.done) {
							item.hidden = false;
						}
					}
					return item;
				})
			}
		});
	}

	onItemAdded = (text) => {
		const newTodoItem = this.createTodoItem(text);
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
			onItemAdded,
			toggleStatusFilter,
		} = this;
		const todoDoneCount = todoDate.filter(item => item.done).length;
		const todoCount = todoDate.length - todoDoneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={todoDoneCount} />
				<div className="top-panel d-flex">
					<SearchPanel/>
					<ItemStatusFilter
						onToggleStatusFilter={toggleStatusFilter}/>
				</div>

				<TodoList
					todos={todoDate}
					onDeleted={delTodoItem}
					onToggleImportant={onToggleImportant}
					onToggleDone={onToggleDone}/>
				<ItemAddForm
					onItemAdded={onItemAdded}/>
			</div>
		);
	}
}
