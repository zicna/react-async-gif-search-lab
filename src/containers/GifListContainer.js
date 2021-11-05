import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifs: [],
  };
    componentDidMount() {
      this.handleSearch()
    }

  handleSearch = (query="dog") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=J03rVTe7qwGIYvH0PgSDBy2Q7V694WJI`
    )
      .then((response) => response.json())
      .then(({data}) => {
          this.setState({
              gifs: data.map(gif => ({url: gif.images.original.url})).slice(0,3)
          }
          )});
  };
  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
