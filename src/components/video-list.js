import React, { Component } from 'react';
import VideoListItem from './videoListItem';

class VideoList extends Component {
  render () {
    return (
        <ul className="list-group col-md-4">
            <VideoListItem src='https://i.ytimg.com/vi/9ZNQQKTHLRA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTOh2u0Qi9gDKe19bAiD1AkHELeA' />

            <VideoListItem src='https://i.ytimg.com/vi/0WtRNGubWGA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvwyLLTygZDCDdt5pIzqQWyNFLdQ'/>
            <VideoListItem src='https://i.ytimg.com/vi/ytYPtJiR99s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv_SRMLysZiq4j8XDCBiEuoC4AxA'/>
            <VideoListItem src='https://www.youtube.com/watch?v=AyDAfnk8EOo'/>
            <VideoListItem src='https://i.ytimg.com/an_webp/jEUaZEul13c/mqdefault_6s.webp?du=3000&sqp=CJ61xJcG&rs=AOn4CLD0NwbcK4zBFNmpIqni-nyKk9yO8w'/>
        </ul>
    );
  };
};
export default VideoList;