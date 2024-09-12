import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleCheckboxChange = (e) => {
    updateTask({ ...task, completed: e.target.checked });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          marginLeft: '8px',
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '8px' }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
