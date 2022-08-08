import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

class App extends Component {
  render () {
    return (
      <div className="container">
        <SearchBar/>
        <div className="row">
            <VideoDetail/>
            <VideoList/>
        </div>
      </div>
    );
  };
} ;
export default App;
