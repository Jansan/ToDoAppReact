import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

import todosData from './todosData';

function App() {
  const todoItem = todosData.map(item => <TodoItem key={item.id} item={item} />)
  return (
    <div className="todo-list">
      {todoItem}
    </div>
  )
}

export default App;