import React from "react";
import style from './VideoPlayer.module.css'
 const VideoPlayer = ({videoId})=>{
    if(!videoId) {
        return(
            <p style={{textAlign:"center" ,fontSize:"18px" , fontWeight:"bold"}}>
                Search for a video
            </p>
        )
    }
    return(
        <div className={style.videoPleyer}>
            <iframe 
                title={videoId}
                className={style.videoPlaye__iframe }
                src={`https://www.youtube.com/embed/${videoId}`}
            />  
            <p></p>
        </div>
    )
};
export default VideoPlayer