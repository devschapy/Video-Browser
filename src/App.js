
import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/searchbar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';

class App extends Component {
  state = {
    searchTerm: '',
    data: {},
    videoId: '',
    title: '',
    discription: '',
    searchData: null
  };
  
  handleChange = event => this.setState({...this.state, searchTerm: event.target.value});

  clickChange = async (e) => {
    try {
      const url = 'https://www.googleapis.com/youtube/v3/search';
      const key = 'AIzaSyADeBTK7W_UWd-OJdwjNw-u0jlJ9MOSuP0';
      // const key = process.env.API_KEY;
      const type = 'video';
      const part = 'snippet';
      const q = this.state.searchTerm;

      const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;
      const {data} = await axios.get(targetUrl);

    const searchData = data.items.filter(i => i.snippet.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    this.setState({...this.state, searchData: searchData });
    } catch (error) {
      console.log(error);
    }
 
  };

  handleSelect = (videoId, title, discription) => {
    this.setState({...this.state, videoId, title, discription});
  };

  // componentDidUpdate (prevProps, prevState) {
  //   console.log('ami hoilam component did update');

  //   const getYoutubeVideo = () => {

  //     const url = 'https://www.googleapis.com/youtube/v3/search';
  //     const key = 'AIzaSyCCDDvMgctxS0w4aL37zCh6itx90pYhMo4';
  //     // const key = process.env.API_KEY;
  //     const type = 'video';
  //     const part = 'snippet';
  //     const q = this.state.searchTerm;

  //     const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

  //     const promise = axios.get(targetUrl);

  //     const success = (response) => {
  //       console.log('succesfull');
  //       console.log(response.data);

  //       const newState = {...this.state, data: response.data};
  //       this.setState(newState);
  //     };

  //     const error = () => {
  //       console.log('error');
  //       console.log(error);
  //     };

  //     promise
  //         .then(success)
  //         .catch(error);
  //   };
  //   if(prevState.searchTerm !== this.state.searchTerm)getYoutubeVideo();

  // };

  render () {
    return (
      <div className="container">
        <SearchBar
           handleChange={this.handleChange} 
           clickChange={this.clickChange} 
           searchTerm={this.state.searchTerm} 
        />

        <div className="row">
          <VideoDetail 
              videoId={this.state.videoId} 
              title={this.state.title} 
              discription={this.state.discription} 
          />
          <VideoList items={this.state.searchData || []} handleSelect={this.handleSelect} />
        </div>
      </div>
    );
  };
};
export default App;

