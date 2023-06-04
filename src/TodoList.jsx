import { useState } from "react";
import * as React from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { text } from "stream/consumers";

const initialTodos = [
  { id: `145623`, text: "walk the dog", completed: false },
  { id: `133445`, text: "Kiss alyssa", completed: true },
  { id: `344565`, text: "Boil Coffee", completed: true },
  { id: `145463`, text: "Make offer", completed: true },
  { id: `124563`, text: "Get 500 followers", completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, id: 8, completed: false }];
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          remove={removeTodo}
          toggle={() => toggleTodo(todo.id)}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
