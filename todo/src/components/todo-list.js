import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
	return (
		<ul>
			<li>
				<TodoListItem
					label='Drink Coffee'
					important
				/>
			</li>
			<li><TodoListItem label='Learn React' /></li>
		</ul>
	);
};

export default TodoList;
