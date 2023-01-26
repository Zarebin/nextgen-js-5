import React from "react";
import "./video-detail.css";

const VideoDetail = props => {
  if (!props.videos) return null;

  let videoId = props.videos.id.videoId,
    url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail">
        {props.children}
      <div className="video-detail-wrapper">
        <iframe src={url} title={props.videos.title} className="video-player" />
       <button className="buttontag"><i className="fa fa-ellipsis-h"></i></button>
         <button className="buttontag">کلیپ  <i className="fa fa-scissors"></i></button>
        <button className="buttontag">با تشکر <i className="fa fa-heart"></i></button>
           <button className="buttontag">بارگیری <i className="fa fa-download"></i></button>
              <button className="buttontag">هم رسانی<i className="fa fa-share"></i></button>
                 <button className="buttontag"> <i className="fa fa-thumbs-down"></i>  | هزار<i className="fa fa-thumbs-up"></i></button>
        <h4 className="main-video-title">{props.videos.snippet.title}</h4>
        <small className="main-video-channelTitle">
          {props.videos.snippet.channelTitle}
        </small>
        <br />
        <small className="main-video-description">
          {props.videos.snippet.description}
        </small>
      </div>
    
    </div>
  );
};

export default VideoDetail;
