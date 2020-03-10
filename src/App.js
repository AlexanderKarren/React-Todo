import React from 'react';
import TodoSearch from './components/TodoSearch';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      {
        task: 'Add your own task',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Try saving your tasks and refreshing',
        id: 1528817084358,
        completed: false
      }
    ],
    query: "",
    saved: false,
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }

  componentDidMount() {
    console.log("component mounted");
    if (JSON.parse(localStorage.getItem("tasks")) !== null) {
      this.setState({tasks: JSON.parse(localStorage.getItem("tasks"))})
    }
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
      }],
      saved: false
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
    }),
    saved: false
  })
  }

  clearAll = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed),
      saved: false
    })
  }

  save = () => {
    if (this.state.saved === false) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
      this.setState({
        saved: true
      });
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1 style={{margin: "0"}}>Todo</h1>
        <div className="save">
          <button className={this.state.saved ? "disabled" : ""} onClick={this.save}>{this.state.saved ? "Saved" : "Save"}</button>
        </div>
        <TodoSearch setQuery={this.setQuery}/>
        <TodoList tasks={this.state.tasks} toggleCompletion={this.toggleCompletion} query={this.state.query}/>
        <TodoForm addTask={this.addTask} clearAll={this.clearAll}/>
      </div>
    );
  }
}

export default App;
