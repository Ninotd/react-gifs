import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      SelectedGif: "",
      gifs: []
    };

    this.search("federer");
  }


  search = (query) => {
    giphy('NImtUmxzsfP4vTGK6jRtIX4n6Q7PGhXq').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  click = (gif) => {
    this.setState()
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif url={ this.state.SelectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs= {this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
