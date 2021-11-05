import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifs: [],
  };
  //   componentDidMount() {
  //     fetch(
  //     //   `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=J03rVTe7qwGIYvH0PgSDBy2Q7V694WJI`
  //       'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=J03rVTe7qwGIYvH0PgSDBy2Q7V694WJI&rating=g'
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //           console.log(data.data.slice(0,3))
  //           this.setState({
  //               gifs: data.data.slice(0,3)
  //           })
  //         });
  //   }

  handleSearch = (query="dog") => {
    //   event.target.prevetDefault()
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=J03rVTe7qwGIYvH0PgSDBy2Q7V694WJI`
    )
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
          this.setState({
              gifs: data.data.slice(0,3)
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
