import React, { Component } from 'react';
import VideoListItem from './videoListItem';

class VideoList extends Component {
  render () {
    const { items, handleSelect } = this.props;

    return(
      <div className="col-md-4">
        <ul>
          {
            items.map(item => {
              const imgUrl = item.snippet.thumbnails.high.url;
              const title = item.snippet.title;
              const videoId = item.id.videoId;
              const discription =item.snippet.discription;

              return <VideoListItem 
                        imgUrl={imgUrl} 
                        title={title} 
                        videoId={videoId} 
                        discription={discription}
                        handleSelect={handleSelect} 
                     />
            })
          }
        </ul>
      </div>
    );
  };
};
export default VideoList;