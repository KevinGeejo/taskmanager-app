import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleCheckboxChange = (e) => {
    updateTask({ ...task, completed: e.target.checked });
  };

  return (
    <li className="flex items-center p-2 bg-white border border-gray-200 rounded-md shadow-sm">
    <input
      type="checkbox"
      checked={task.completed}
      onChange={handleCheckboxChange}
      className="mr-2"
    />
    <span
      className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
    >
      {task.text}
    </span>
    <button
      onClick={() => deleteTask(task.id)}
      className="ml-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      Delete
    </button>
  </li>
  );
};

export default TaskItem;
