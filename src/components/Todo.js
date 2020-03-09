import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    handleChange = event => {
        console.log(event.target.value);
        this.props.toggleCompletion(this.props.task.id);
    }
    render() {
        return (
            <div className="task">
                <input name="checkbox" id={`checkbox-${this.props.task.id}`} type="checkbox" checked={this.props.task.completed} onChange={this.handleChange}/>
                <label htmlFor={`checkbox-${this.props.task.id}`} className={this.props.task.completed ? "completed" : ""}>{this.props.task.task}</label>
            </div>
        )
    }
}
