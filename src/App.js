import React from 'react';
import TodoSearch from './components/TodoSearch';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

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
    ],
    query: ""
  }

  setQuery = searchQuery => {
    this.setState({query: searchQuery});
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
      <div className="main-container">
        <h1>Todo</h1>
        <TodoSearch setQuery={this.setQuery}/>
        <TodoList tasks={this.state.tasks} toggleCompletion={this.toggleCompletion} query={this.state.query}/>
        <TodoForm addTask={this.addTask} clearAll={this.clearAll}/>
      </div>
    );
  }
}

export default App;
