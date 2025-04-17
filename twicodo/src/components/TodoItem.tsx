import React, { useState } from 'react';
const TodoItem = ({ task, onDelete, onEdit, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(task.id, editText);
    }
    setIsEditing(!isEditing);
  };
  return (
    <li className={`flex items-center justify-between rounded-3 p-4 shadow-[0_2px_12px_0_rgba(162,28,175,0.13)] transition-all duration-200 hover:bg-li-hover-gradient ${task.completed ? 'completed' : ''}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mr-4 h-5 w-5 accent-[#a21caf] scale-125"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="text-[#f3e8ff] bg-[#2e026d] border-[1.5px] border-[#a21caf] rounded-3 px-3 py-2 focus:outline-none focus:border-white focus:ring-2 focus:ring-[#a21caf] focus:ring-opacity-60 transition-all duration-200"
          />
        ) : (
          <span
            className={`flex-1 text-lg transition-colors duration-200 ${
              task.completed ? 'line-through text-[#a78bfa] opacity-70' : 'text-[#f3e8ff]'
            }`}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex space-x-3">
        <button
          onClick={handleEdit}
          className="bg-[#a21caf] text-white font-bold text-sm px-3 py-1.5 rounded-2 shadow-[0_1px_4px_0_rgba(162,28,175,0.2)] hover:bg-[#c026d3] hover:scale-105 transition-all duration-200"
        >
          {isEditing ? 'Save' : 'Change'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-[#a21caf] text-white font-bold text-sm px-3 py-1.5 rounded-2 shadow-[0_1px_4px_0_rgba(162,28,175,0.2)] hover:bg-[#c026d3] hover:scale-105 transition-all duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;