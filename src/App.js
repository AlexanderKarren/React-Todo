import React from 'react';
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
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
