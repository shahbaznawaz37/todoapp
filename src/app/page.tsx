"use client";
import { useState } from "react";
import { Todo } from "../app/interfaces/Todo";
import TodoList from "../app/components/TodoList";
import AddTodo from "../app/components/AddTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <div className="flex flex-col justify-center align-middle m-8 w-[1000px]">
      <AddTodo onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
