



import "./App.css"
import { useState, useEffect } from "react";
import TodoList from "./TodoList";


const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = e => {
    const newTodo = { text: e.target.value, id: Date.now(), completed: false };
    setTodos([newTodo, ...todos]);
    e.target.value = "";
  };

  const completeTodo = (id, e) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodoText = (id, e) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, text: e.target.value } : todo
    );
    setTodos(updatedTodos);
    e.target.value = "";
  };

  const deleteTodo = id => {
    const remainingTodos = todos.filter(todo => todo.id !== id);
    setTodos(remainingTodos);
  };

  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
