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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
