import { action, computed, observable } from 'mobx';

class TodoStore {
  text = 'some text';

  @observable filter = 'All';
  @action.bound changeFilter(condition) {
    this.filter = condition;
  }
  @computed get filterTodos() {
    switch (this.filter) {
      case 'active':
        return this._todos.filter((item) => !item.isCompleted);
      case 'completed':
        return this._todos.filter((item) => item.isCompleted);
      default:
        return this._todos;
    }
  }
  @computed get unfinishedTodoCount() {
    return this._todos.filter((item) => !item.isCompleted).length;
  }
  @computed get todos() {
    return this._todos.slice();
  }
  @observable _todos = [];
  @action.bound todoAdd(taskName) {
    this._todos.push({
      taskName,
      isCompleted: true,
    });
  }
  @action.bound deleteTodo(index) {
    this._todos.splice(index, 1);
  }
  @action.bound changeCompleted(index, flag) {
    this._todos[index].isCompleted = flag;
  }
}
const todoStore = new TodoStore();
export default todoStore;
