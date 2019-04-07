import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
	const elements = todos.map(({ label, important = false}) => {
		return (
			<li>
				<TodoListItem
					label={label}
					important={important}
				/>
			</li>
		);
	});

	return (
		<ul>
			{ elements }
		</ul>
	);
};

export default TodoList;
