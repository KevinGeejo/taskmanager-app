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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
