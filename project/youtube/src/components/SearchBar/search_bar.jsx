import React from "react";
import "./search_bar.css";
// import Imgmobina  from "./images/imgmobina.png";
// import logo from './mobina.png';
const SearchBar = props => {
    return (
   <div className="parentdiv">
      <div className="search-wrapper">
      
          <span className="mic"><i className="fa fa-microphone" ></i></span>
           <button type="submit" className="buttonme"><i className="fa fa-search"></i></button>
        <input
          type="search"
          onChange={e => props.onSearchVideos(e.target.value)}
          className="search-bar"
          placeholder="جست و جو "
        />
        
     
        </div>
      </div>
     
    );
}

export default SearchBar;
