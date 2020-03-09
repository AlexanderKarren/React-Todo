import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.task.task}
            </div>
        )
    }
}
