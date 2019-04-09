import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
	render() {
		const elements = this.props.todos.map((item) => {
			const { id, ...props } = item;
			return (
				<li key={id} className="list-group-item">
					<TodoListItem { ...props }/>
				</li>
			);
		});

		return (
			<ul className="list-group todo-list">
				{ elements }
			</ul>
		);
	}
}
