import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div className="todo-list">
        {todoItem}
      </div>
    )
  }
}

export default App;