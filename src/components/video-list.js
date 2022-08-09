import React, { Component } from 'react';
import VideoListItem from './videoListItem';

class VideoList extends Component {
  render () {
    return (
        <ul className="list-group col-md-4">
            <VideoListItem 
              src='https://i.ytimg.com/vi/T8XYIpiKIuA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCX96_sN8FyMaEn4MLOn5IhPJL7uA'
              title='Tahsan Song'
            />

            <VideoListItem 
              src='https://i.ytimg.com/vi/9c1NIrAqXe4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3R0N9HSFYjylrAE0-moBsEwIRYw'
              title='Habib song'
            />

            <VideoListItem 
              src='https://i.ytimg.com/vi/VfHgqY57stU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9dsYKuqec_d6hYKkWh-egJCAFKA'
              title='Normal Song'
            />

            <VideoListItem 
              src='https://i.ytimg.com/vi/r9AbuWA1zjc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwNKiq_N3XiAnDGQt-nv2End7Keg'
              title='Sad Song'
            />

            <VideoListItem 
              src='https://i.ytimg.com/vi/SYe-x9ZQF7o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJI-XLkvDeYJQVvP31DPDe6kp2GA'
              title='Romantic Song'
            />

            <VideoListItem 
              src='https://i.ytimg.com/vi/2uA4XOmsrrA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDb3XCt-WduqhYrquf1J1Ut9pp4-A'
              title='Normal Song'
            />
        </ul>
    );
  };
};
export default VideoList;