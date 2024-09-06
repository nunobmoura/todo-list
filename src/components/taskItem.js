import React from 'react';
import {v4 as uuid} from 'uuid';

const TaskItem = (props) => {
  const unicID = uuid();
  return (
    <div>
      <input type="checkbox" id={unicID} />
      <label htmlFor={unicID}>{props.taskText}</label>
      <button
        className="btn btn--remove"
        onClick={(e) => {
          props.handleDelete(props.taskText);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TaskItem;
