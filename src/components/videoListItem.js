import React, { Component } from 'react';
// import('../css/index.css');

class VideoListItem extends Component {
  render () {
    const {handleSelect, imgUrl, videoId, title, discription } = this.props;

    return (
      <li 
        onClick={(event) => {
          handleSelect(videoId, title, discription);
        }} 
        className="list-group-item media d-flex listHover gap-3 mb-3"
      >

        <img className="w-50" src={imgUrl}/>
        <div className="media-body w-50">
          {title}
        </div>
      </li>
    );
  };
};
export default VideoListItem;