import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.tasks.map(task => <Todo task={task}/>)}
            </div>
        )
    }
}