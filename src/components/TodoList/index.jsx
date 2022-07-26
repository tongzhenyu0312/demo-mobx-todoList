import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('todo')
@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { deleteTodo, changeCompleted, filterTodos } = this.props.todo;

    return (
      <section className='main'>
        <input className='toggle-all' type='checkbox' />
        <ul className='todo-list'>

        {
          filterTodos.map((item, index) => (
            <li key={ index } className={ item.isCompleted ? 'completed' : '' }>
              <div className='view'>
                <input 
                  className='toggle' 
                  type='checkbox' 
                  checked={ item.isCompleted } 
                  onChange={(evt) => {changeCompleted(index, evt.target.checked)}}
                />
                <label>{ item.taskName }</label>
                <button className='destroy' onClick={ () => { deleteTodo(index) } }></button>
              </div>
              <input className='edit' />
            </li>
          ))
        }
        </ul>
      </section>
    );
  }
  componentDidMount() {}
}
export default TodoList;
