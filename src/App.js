import React, { Component } from 'react';
import AddTodo from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoExtra from './components/TodoExtra';

import './index.css'

class App extends Component {
  render() {
    return (
      <section className='todoapp'>
        <AddTodo />
        <TodoList />
        <TodoExtra />
      </section>
    );
  }
}

export default App;
