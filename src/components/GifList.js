import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map((gif) => {
                    return (
                        <a href={gif.source} target="blank">
                            <li key={gif.id}>{gif.title}</li>
                        </a>
                    )
                })}
                
            </ul>
        )
    }
}
