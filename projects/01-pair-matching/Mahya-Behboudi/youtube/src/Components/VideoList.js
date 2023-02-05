import  React from 'react';
import Video from './Video';
import style from './VideoList.module.css'
const VideoList = ({data,onVideoSelected}) =>{
    return(
        <div className={style.videoList}>
            <div className={style.videoList__}>
                <h3>
                    Video list 
                </h3>
                <Video data={data} onVideoSelected={onVideoSelected}/>
            </div>
        </div>
    );
};
export default VideoList;

