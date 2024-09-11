import React from 'react';

const TaskItem = (props) => {
  return (
    <div>
      <input type="checkbox" id={props.id} checked={props.checked} onChange={props.onToggle} />
      <label htmlFor={props.id}>{props.taskText}</label>
      <button className="btn btn--remove" onClick={props.onDelete}>
        X
      </button>
    </div>
  );
};

export default TaskItem;
