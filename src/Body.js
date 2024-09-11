import React from 'react';
import Header from './components/header';
import TaskSubmit from './components/taskSubmit';
import TaskItems from './components/taskItems';

export default class Body extends React.Component {
  state = {
    tasks: [],
  };

  handleSubmit = (event) => {
    if (event.key === 'Enter' && event.target.value === '')
      event.preventDefault();

    if (
      (event.key === 'Enter' || event.type === 'blur') &&
      event.target.value !== ''
    ) {
      event.preventDefault();
      const newTask = {
        text: event.target.value,
        checked: false,
      };
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
      }));
      event.target.value = '';
    }
  };

  handleDelete = (taskToRemove) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove !== task.text),
    }));
  };

  handleToggle = (index) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task, i) => {
        if (i === index) {
          return {...task, checked: !task.checked};
        }
        return task;
      });
      return {tasks: updatedTasks};
    });
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);

      if (tasks) {
        this.setState(() => ({tasks}));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', json);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TaskSubmit handleSubmit={this.handleSubmit} />
        <div className="tasks--container">
          <TaskItems
            tasks={this.state.tasks}
            handleDelete={this.handleDelete}
            handleToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}

Body.defaultProps = {
  tasks: [],
};
