import React from 'react';
import VideoListItem from './video_list_item';
import './video_list.css';

const VideoList = props => {
 
  let videos = props.videos.map(video => <VideoListItem {...video} key={video.etag} onVideoSelect={props.onVideoSelect} />);
  return (
    
   <div className='videoparent'>
    
    <div className='videodiv'><a href="https://imgbb.com/"><img src="https://i.ibb.co/zVxCbHb/agahi.png" className='imgagahi' alt="agahi" border="0" /></a></div>
    <ul className="video-list-wrapper">
      {videos}
    </ul>
    </div>
    
  );
};

export default VideoList;