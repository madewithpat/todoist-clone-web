import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItems from './TodoItems'
/*just sort of testing out some basic React principles to get a feel for the component structure.
No css or any styling or anything like that. working on building methods and passing state and props
Still trying to figure out the exact status of _inputElement in the input ref and how it passes
*/
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    items: []
  }
  this.addItem = this.addItem.bind(this);
  }


//Method altering function of submit button to set the state of the array to add the entry to the task list
addItem(event) {
  if (this._inputElement.value !== '') {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
  
  this.setState((prevState) => {
    return {
      items: prevState.items.concat(newItem)
    };
  });

  this._inputElement.value = '';
  }

  console.log(this.state.items);

  event.preventDefault();
}

render() {
    
    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
              placeholder='please enter a task' />
            <button type='submit'>Submit</button>
        </form>
        <TodoItems entries={this.state.items}/>
      </div>
    )
  }
}
export default App;
