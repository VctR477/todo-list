import React from 'react';
import ReactDOM from 'react-dom';

const elem = (
	<div>
		<h1>Hello world</h1>
		<input placeholder="search" />
		<ul>
			<li>Learn React</li>
			<li>Build Awesome App</li>
		</ul>
	</div>
);
	
ReactDOM.render(elem, document.getElementById('root'));
