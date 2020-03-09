import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  state = {
    tasks: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
    ]
  }

  addTask = taskName => {
    this.setState({
      tasks: [...this.state.tasks, {
        task: taskName,
        id: Date.now(),
        completed: false
      }]
    })
  }

  toggleCompletion = taskId => {
    this.setState({tasks: this.state.tasks.map(task => {
      if (task.id === taskId) {
        return {
          task: task.task,
          id: task.id,
          completed: !task.completed,
        }
      }
      else {
        return task;
      }
    })})
  }

  clearAll = () => {
    this.setState({tasks: this.state.tasks.filter(task => {
      return !task.completed;
    })})
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm addTask={this.addTask} clearAll={this.clearAll}/>
        <TodoList tasks={this.state.tasks} toggleCompletion={this.toggleCompletion}/>
      </div>
    );
  }
}

export default App;
