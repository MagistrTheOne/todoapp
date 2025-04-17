import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem.jsx';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <header className="fixed top-0 w-full shadow-[0_8px_32px_0_rgba(162,28,175,0.27)] text-white rounded-b-8 py-8 px-4 mb-8 flex items-center justify-center">
        <h2 className="text-4xl font-extrabold text-[#fafafa] drop-shadow-[0_2px_16px_rgba(162,28,175,0.47)]">
          TWICODO
        </h2>
      </header>
      <main className="mt-24 max-w-md w-full bg-opacity-70 bg-[rgba(63,38,94,0.7)] rounded-6 shadow-[0_4px_32px_0_rgba(162,28,175,0.2)] p-6">
        <div className="flex mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task add"
            className="flex-1 bg-[#2e026d] text-[#f3e8ff] border-[1.5px] border-[#a21caf] rounded-3 px-4 py-3 text-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-[#a21caf] focus:ring-opacity-60 transition-all duration-200"
          />
          <button onClick={addTask} className="text-white font-bold text-base px-5 py-3 rounded-3 ml-2 shadow-[0_2px_8px_0_rgba(162,28,175,0.2)] hover:-translate-y-[2px] hover:scale-105 transition-all duration-200"
          >Add task</button>
        </div>
        {tasks.length === 0 ? (
          <p className="text-[#a78bfa] text-center">Нет задач</p>
        ) : (
          <ul className="mt-6 flex flex-col gap-3">
            {tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onEdit={editTask}
                onToggle={toggleTask}
              />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default App;