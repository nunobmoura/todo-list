import React from 'react';

const TaskSubmit = (props) => {
  return (
    <form>
        <label htmlFor="taks-input">Task</label>
        <input type="text" id="task-input" name="task-input" placeholder='Task' onBlur={props.handleSubmit} onKeyDown={props.handleSubmit} />
      </form>
  );
}

export default TaskSubmit;