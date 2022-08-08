import React, { Component } from 'react';

class VideoDetail extends Component {
  render () {
    return (
      <div className="col-md-8 border">
        <div className="">
            <iframe src="https://www.youtube.com/embed/0SCopio77gM"
                    className="w-100" 
                    style={{height: '420px'}} />
        </div>
        <div>
            <h3>dokhina haowa</h3>
            <p>song by habib</p>
        </div>
      </div>
    );
  };
};
export default VideoDetail;