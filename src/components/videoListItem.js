import React, { Component } from 'react';
// import('../css/index.css');

class VideoListItem extends Component {
  render () {
    const { src, title } = this.props;
    return (
        <li className="list-group-item media d-flex gap-4 listHover">
            <img className="w-50" src={src}/>
            <div className="media-body">
                {title}
            </div>
        </li>
    );
  };
};
export default VideoListItem;