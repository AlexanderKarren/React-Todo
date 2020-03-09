import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
    handleChange = event => {
        this.props.toggleCompletion(this.props.task.id);
    }
    render() {
        return (
            <div className="task" onClick={this.handleChange}>
                <input name="checkbox" id={`checkbox-${this.props.task.id}`} type="checkbox" checked={this.props.task.completed} onChange={this.handleChange}/>
                <label htmlFor={`checkbox-${this.props.task.id}`} className={this.props.task.completed ? "completed" : ""}>{this.props.task.task}</label>
            </div>
        )
    }
}
