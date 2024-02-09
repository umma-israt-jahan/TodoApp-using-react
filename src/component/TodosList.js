import React from "react";

export default function TodosList({ todos, setTodos, setEditTodo }) {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  const handleInputChange = (event, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: event.target.value } : todo
    );
    setTodos(newTodos);
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <>
      <div>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <input
              value={todo.title}
              className={`list ${todo.completed? "complete":""}`}
              onChange={(event) => handleInputChange(event, todo.id)}
            />
            <div>
              <button
                className="button-complete task-button"
                onClick={() => handleComplete(todo)}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}
