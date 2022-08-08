import React, { Component } from 'react';
import('../css/index.css');

class VideoListItem extends Component {
  render () {
    const { src } = this.props;
    return (
        <li className="list-group-item media d-flex gap-4 listHover">
            <img src={src} alt="" />
            <div className="media-body">
                React
            </div>
        </li>
    );
  };
};
export default VideoListItem;