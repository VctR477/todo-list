import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {
	render() {
		const {
			onToggleDone,
			onToggleImportant,
		} = this.props;
		const elements = this.props.todos.map((item) => {
			const { id, ...props } = item;
			return (
				<li key={id} className="list-group-item">
					<TodoListItem
						{...props}
						onDeleted={() => this.props.onDeleted(id)}
						onToggleImportant={() => onToggleImportant(id)}
						onToggleDone={() => onToggleDone(id)}
					/>
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
