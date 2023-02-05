import React from "react";
import style from  "./Video.module.css"
function selectVideo(videoIdObj , onVideoSelected) {
    onVideoSelected(videoIdObj.videoId);
}
function getCss(imageurl) {
    const _style= {
        direction:"right",
        backgroundImage: `url(${imageurl})`,
        backgroundSize:"cover",
        backgroundPosition:"cneter center",
        margin:"50px",
        height:"300px",

    };
    return _style;
};
function constructVideoTitles(videosData , onVideoSelected) {
    return videosData.map(({snippet , id} , index) =>{
        return (
            <div  className={style.videoItem}
                key={index}
                onClick={()=>selectVideo(id , onVideoSelected)} >
                <div style={getCss(snippet.thumbnails.high.url)} key={index}></div>
                <p className={style.videoItem__title}>{snippet.title}</p>
            </div>
        );
    });
}
const Video = ({data , onVideoSelected}) =>{
    return <React.Fragment>{constructVideoTitles(data , onVideoSelected)}</React.Fragment>;
};
export default Video;