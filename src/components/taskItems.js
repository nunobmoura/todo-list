import React from 'react';
import TaskItem from './taskItem';

function TaskItems(props) {
  return (
    <div>
      {props.tasks.map((task, index) => (
        <TaskItem
          key={index}
          taskText={task}
          handleDelete={props.handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskItems;
