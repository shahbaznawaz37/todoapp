// components/AddTodo.tsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    onAddTodo(text);
    setText("");
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        className="border-2 border-indigo-700 rounded-lg p-1 w-full"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center space-x-1 p-2 bg-red-500 text-white rounded"
      >
        <FontAwesomeIcon icon={faAdd} />
        <span>Add</span>
      </button>
    </form>
  );
};

export default AddTodo;
