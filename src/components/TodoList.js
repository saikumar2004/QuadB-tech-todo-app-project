import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <li className="singleTodo">
          <span className="todoText" key={todo.id}>
            {todo.todo}
          </span>
          <button className="edit-btn" onClick={() => handleEdit(todo.id)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
