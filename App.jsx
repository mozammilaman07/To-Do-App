import AppName from "./AppName";
import AddTodo from "./AddTodo";
import "./App.css/";
import TodoItems from "./TodoItems";
function App() {
  const todoItems = [
    {
      name: "Bread",
      dueDate: "15/08/2024",
    },
    {
      name: "Milk",
      dueDate: "15/08/2024",
    },
    {
      name: "Gym",
      dueDate: "05/08/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
