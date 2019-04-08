import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ todos }) => {
	const elements = todos.map((item) => {
		const { id, ...props } = item;
		return (
			<li key={id}>
				<TodoListItem { ...props }/>
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
