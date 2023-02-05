import React from 'react';
import Search from './Components/Search';
import './App.css';
import youtubeApi from './API/youtube';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';

class  App extends React.Component {
  state ={
    videoMetaInfo:[],
    selesctedVideoId: null
  };
  onVideoSelected = (videoId) =>{
    this.setState({
      selesctedVideoId:videoId,
    })

  }
  onSearch = async keyword =>{
    const response = await youtubeApi.get("/search", {
      params:{
        q:keyword
      }
    })
    //console.log(response);
    this.setState({
      videoMetaInfo:response.data.items,
      selesctedVideoId:response.data.items[0].id.videoId,
    });
    console.log(this.state)
  };
 render(){
  return (
    <>
      <Search onSearch={this.onSearch}></Search>
      <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videoMetaInfo}/>
      <VideoPlayer videoId={this.state.selesctedVideoId}/>

    </>
    );
 }
}

export default App;
