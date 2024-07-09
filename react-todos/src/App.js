import { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const seededTodos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One" },
  ];
  const [todos, setTodos] = useState(seededTodos);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New todo",
        rowAssigned: "User Three",
      };
      setTodos(newTodo);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add New To-Do
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
