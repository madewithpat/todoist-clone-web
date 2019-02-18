import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItems from './TodoItems'
/*just sort of testing out some basic React principles to get a feel for the component structure.
No css or any styling or anything like that. working on building methods and passing state and props
NOTE: onClick function for list items needs to be changed to an edit state with save and cancel buttons
*/
class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }


  //Method altering function of submit button to set the state of the array to add the entry to the task list
  addItem = (event) => {
    if (this.input.value !== '') {
      var newItem = {
        text: this.input.value,
        key: Date.now()
      };
    
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this.input.value = '';
    }


    event.preventDefault();
  }


  /*
    Edit state should appear on every item that is posted into the list (method changeEditMode-- passes default state !editMode)
    Edit mode should toggle onClick (methods toggleEditMode--create text box using item as defaultValue, toggleDefaultMode)
    Edit should have a save button to submit the new item over the existing item
    Edit should have a cancel button to clear changes and return existing list item
    Edit should modify the createTasks method in TodoItems to utilize structure of delete method (extention to each list item as it is made)
  */


  //Method deleting a task from the list when the task is clicked. 
  //queue is adjusted accordingly. filteredItems are set as new items state array
  deleteItem = (key) => {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }



  render() {
      
      return (
        <div>
          <h1>Inbox</h1>
          <TodoItems entries={this.state.items}
                      delete={this.deleteItem}/>
          <form onSubmit={this.addItem}>
              <input ref={(a) => this.input = a} 
                placeholder='Add Task' /> <br />
              <button type='submit'>Add Task</button>
              <button type='reset'>Cancel</button>
          </form>
          
        </div>
      )
    }
}
export default App;
