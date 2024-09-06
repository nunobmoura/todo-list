import React from "react";

const TaskItem = (props) => {
  return (
    <div>
      <p>{props.taskText}</p>
      <button
        className="btn btn--remove"
      >
        X
      </button>
    </div>
  );
}

export default TaskItem;