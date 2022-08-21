
import React, { Component } from 'react';
import axios from 'axios';
// import SearchBar from './components/searchbar';
// import VideoDetail from './components/video-detail';
// import VideoList from './components/video-list';

class App extends Component {
  state = {
    searchTerm: '',
    data: {}
  }

  handleChange = (event) => {
    const value = event.target.value;
    const newState = {searchTerm: value, data: this.state.data};
    this.setState(newState);

  };

  componentDidUpdate (prevProps, prevState) {
    console.log('ami hoilam component did update');

    const getYoutubeVideo = () => {

      const url = 'https://www.googleapis.com/youtube/v3/search';
      const key = 'AIzaSyADeBTK7W_UWd-OJdwjNw-u0jlJ9MOSuP0';
      const type = 'video';
      const part = 'snippet';
      const q = this.state.searchTerm;

      const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

      const promise = axios.get(targetUrl);

      const success = (response) => {
        console.log('succesfull');
        console.log(response.data);

        const newState = {searchTerm: this.state.searchTerm, data: response.data};
        this.setState(newState);
      };

      const error = () => {
        console.log('error');
        console.log(error);
      };

      promise
          .then(success)
          .catch(error);
    };
    if(prevState.searchTerm !== this.state.searchTerm)getYoutubeVideo();

  };

  render () {
    const items = this.state.data.items || [];
    return (
      <div className="container">
        <div className="m-4 text-center">
          <input onChange={this.handleChange} className="w-50 py-1" type="text" />
          {/* <span className="d-block mt-5">{this.state.searchTerm}</span> */}
        </div>

        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <ul>
              {
                items.map(item => {
                  const imgUrl = item.snippet.thumbnails.high.url;
                  const title = item.snippet.thumbnails.title;

                  return (
                    <li className="list-group-item media d-flex listHover mb-3">
                        <img className="w-50" src={imgUrl}/>
                        <div className="media-body">
                            {title}
                        </div>
                    </li>
                );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  };
} ;
export default App;

