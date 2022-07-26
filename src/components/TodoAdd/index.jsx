import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('todo')
@observer
class TodoAdd extends React.Component {

  componentDidMount() {}

  addTodo(evt) {
    const { todoAdd } = this.props.todo;
    
    if (evt.key === 'Enter') {
      const taskName = evt.target.value;
      if (taskName.trim().length === 0) {
        return;
      }
      todoAdd(taskName)
      evt.target.value = '';
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>todos list</h1>
        <input className='new-todo' placeholder='What needs to be done?' onKeyUp={this.addTodo.bind(this)}/>
      </header>
    );
  }
}
export default TodoAdd;
