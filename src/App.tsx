
import Header from "./components/Header";
import TodoList from "./components/ToDoList.tsx";
import "./style/todo.css";


function App() {
  return (
    <div className="container" >
      <Header />
      <TodoList />
    </div>
  );
  
}

export default App;
