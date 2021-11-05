import React, { Component } from 'react'

export default class GifSearch extends Component {
    state={
        search:""
    }

    handleChange =(event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.search)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                id="search"
                onChange={this.handleChange}
                />
                <input type="submit" value="Search" />
            </form>
        )
    }
}
