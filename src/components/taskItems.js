import React from 'react';
import TaskItem from './taskItem';

function TaskItems(props) {
  return (
    <div>
      {props.tasks.map((task, index) => (
        <TaskItem
          key={index}
          id={index}
          taskText={task.text}
          checked={task.checked}
          onToggle={() => props.handleToggle(index)}
          onDelete={() => props.handleDelete(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskItems;
