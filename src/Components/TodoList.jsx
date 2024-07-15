import TodoItem from "./TodoItem";
import "./todolist.css";
export default function TodoList({ todos, setTodos }) {
  const sortedToDo = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className="list">
      {sortedToDo.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
