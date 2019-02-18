import React, { Component } from 'react';

class TodoItems extends Component {
	constructor(props){
		super(props);
	}
	
	delete(key) {
		this.props.delete(key);
	}


	createTasks = (item) => {
		return <li onClick={() => this.delete(item.key)}
					key={item.key}>{item.text}</li>
	}

	render() {
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return (
		<ul>
			{listItems}
		</ul>
		);
	}
};

export default TodoItems;