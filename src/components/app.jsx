import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  render () {

  const gifs = [
    {id: "3o7btZlu0x9Wp9JX0c"} ,
    {id: "3o7btZlu0x9Wp9JX0c"}
  ]

    return (
      <div>
        <div className="left-scene">
          <SearchBar/>
          <div className="selected-gif">
            <Gif id="3o7btZlu0x9Wp9JX0c"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs= {gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
