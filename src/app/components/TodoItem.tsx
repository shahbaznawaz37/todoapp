// components/TodoItem.tsx
import { useState } from "react";
import { Todo } from "../interfaces/Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faToggleOn,
  faToggleOff,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onUpdateTodo: (id: number, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleTodo,
  onDeleteTodo,
  onUpdateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onUpdateTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  return (
    <li className="flex gap-4 mt-6 justify-between">
      {isEditing ? (
        <input
          className=" bg-red-300 text-lg rounded-full px-4 w-full content-center"
          type="text"
          value={editText}
          onChange={handleTextChange}
        />
      ) : (
        <span
          className="bg-slate-200 text-lg rounded-full px-4 w-full content-center"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="flex items-center space-x-1 px-2 bg-blue-500 text-white rounded"
        >
          <FontAwesomeIcon icon={isEditing ? faSave : faEdit} />
        </button>
        <button
          onClick={() => onToggleTodo(todo.id)}
          className="flex items-center space-x-1 p-2 bg-yellow-500 text-white rounded"
        >
          <FontAwesomeIcon icon={faToggleOn} />
        </button>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="flex items-center space-x-1 p-2 bg-red-500 text-white rounded"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
