import React, { useState } from 'react';
import TodoList from './TodoList';


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Sample Todo 1', completed: false },
    
  ]);

   

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };


  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoList 
        todos={todos}  
        onEdit={editTodo} 
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;
