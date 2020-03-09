import React, { Component } from 'react'
import './TodoForm.css'

export default class TodoForm extends Component {
    state = {
        value: ""
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.value);
        this.setState({value: ""})
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="add-form">
                    <input type="text" placeholder="task to add" onChange={this.handleChange} value={this.state.value} />
                    <button type="submit">Add</button>
                </form>
                <button type="button" onClick={this.props.clearAll}>Clear All Completed</button>
            </div>
        )
    }
}
