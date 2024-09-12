import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    addTask(newTask);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='m-10'>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="border border-gray-300 rounded-lg p-2 mr-20"
      />
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600  "
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
