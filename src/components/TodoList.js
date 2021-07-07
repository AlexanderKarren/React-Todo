import React, { Component } from 'react'
import Todo from './Todo'
import './TodoList.css'

export default class TodoList extends Component {
    render() {
        return (
            <div className="task-container">
                {this.props.tasks.map(task => {
                    if (task.task.toLowerCase().includes(this.props.query.toLowerCase())) {
                        return <Todo task={task} toggleCompletion={this.props.toggleCompletion}/>
                    }
                })}
            </div>
        )
    }
}