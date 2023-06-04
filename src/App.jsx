import "./App.css";
import { CssBaseline } from "@mui/material";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>ToDos</h1>
      <TodoList />
    </>
  );
}

export default App;
