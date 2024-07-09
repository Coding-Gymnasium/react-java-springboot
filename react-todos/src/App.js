import { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoTable from "./components/TodoTable";

function App() {
  const seededTodos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One" },
  ];
  const [todos, setTodos] = useState(seededTodos);

  const addTodo = (description, assigned) => {
    if (seededTodos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
