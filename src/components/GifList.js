import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <ul>
                {this.props.gifs.map((gif) => {
                    return (
                        <li key={gif.url}>
                            {gif.username}
                            <img  src={gif.url} alt="gif" />
                        </li>
                    )
                })}
                
            </ul>
        )
    }
}
