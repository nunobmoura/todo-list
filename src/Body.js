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
      event.target.value != ''
    ) {
      event.preventDefault();
      const value = event.target.value;
      this.setState((prevState) => ({
        tasks: prevState.tasks.concat(value),
      }));
      event.target.value = '';
      // if (
      //   (event.key === 'Enter' || event.type === 'blur') &&
      //   event.target.value != ''
      // ) {
      //   event.preventDefault();
      //   const newTask = {
      //     text: event.target.value,
      //     checked: false
      //   }
      //   // const value = event.target.value;
      //   this.setState((prevState) => ({
      //     tasks: [...prevState.tasks, newTask],
      //   }));
      //   event.target.value = '';
    }
  };

  handleDelete = (taskToRemove) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove != task)
    }
  ));
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
    if (prevState.tasks.length !== this.state.tasks.length) {
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
          />
        </div>
      </div>
    );
  }
}

Body.defaultProps = {
  tasks: [],
};
