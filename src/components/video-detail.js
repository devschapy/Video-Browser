import React, { Component } from 'react';

class VideoDetail extends Component {
  render () {
  const {videoId, title, discription} = this.props;
  
    return (
      <div className="col-md-8 border">
        <div className="">
          <iframe
             src={`https://www.youtube.com/embed/${videoId}`}
             className="w-100" 
             style={{height: '420px'}} />
        </div>
        <div>
          <h4>{title}</h4>
          <h5>{discription}</h5>    
        </div>
      </div>
    );
  };
};
export default VideoDetail;