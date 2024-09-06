import React from 'react';
import Header from './components/header'
import TaskSubmit from './components/taskSubmit';
import TaskItems from './components/taskItems';

export default class Body extends React.Component {
  state = {
    tasks: []
  };

  handleSubmit = (event) => {
    if( event.key === 'Enter'  && event.target.value === '') event.preventDefault();

    if( (event.key === 'Enter' || event.type === 'blur') && event.target.value != '') {
      event.preventDefault();
      const value = event.target.value;
      this.setState((prevState) => ({
        tasks: prevState.tasks.concat(value)
      }))
      event.target.value= '';
    }
  };


  render() {
    return (
    <div className="App">
      <Header />
      <TaskSubmit
      handleSubmit={this.handleSubmit} />
      <div className='tasks--container'>
      <TaskItems 
          tasks={this.state.tasks}
        />
      </div>
    </div>
    )
  };
}

Body.defaultProps = {
  tasks: []
};

