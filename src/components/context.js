import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();
export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "124" } },
      { track: { track_name: "466" } },
    ],
  };

  
  componentDidMount() {
    let api_key ="2412281de62c81659e177eb050fdd17c";
    axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${api_key}
      `
    )
      .then((res) =>{ console.log(res.data);
      this.setState({ track_list: res.data.message.body.track_list });})
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
