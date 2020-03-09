import React, { Component } from 'react'
import {ReactSVG} from 'react-svg'
import './TodoSearch.css'

export default class TodoSearch extends Component {
    state = {
        query: ""
    }

    handleChange = event => {
        this.props.setQuery(event.target.value);
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="search-container">
                <form className="search-form" autoComplete="off" onSubmit={this.handleSubmit}>
                    <input type="text" name="search" id="search" onChange={this.handleChange}/>
                    <button><ReactSVG src="search.svg"/></button>
                </form>
            </div>
        )
    }
}
