import React, { useState } from 'react';

const Todo = ({ todo, completeTodo, editTodoText, deleteTodo }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <li>
      <div className="left">
        <h2
          onClick={() => {
            setShowInput(!showInput);
          }}
        >
          {todo.text}
        </h2>
        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editTodoText(todo.id, e.target.value);
              setShowInput(false);
            }
          }}
        />
      </div>
      <label className="middle">
        Complete
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            completeTodo(todo.id);
          }}
        />
      </label>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete Todo
      </button>
      <button
        onClick={() => {
          editTodoText(todo.id, todo.text);
        }}
      >
        Edit Todo
      </button>
    </li>
  );
}

export default Todo;
