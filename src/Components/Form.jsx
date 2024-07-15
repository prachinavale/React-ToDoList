import { useState } from "react";
import "./Form.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          className="inputField"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter to do item.."
        />
        <button className="button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
