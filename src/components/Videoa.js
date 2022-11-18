import React from "react";
import Video from "../Videos/Techno Metal Construction.mp4";
import ReactPlayer from "react-player";
import "./Player.css"


const Videoa = () => {
   

    return (
        <>
        
        <div className="player-wrapper">
    <ReactPlayer
      url="https://youtu.be/EC_fJRE3-dI"
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
  
        
        </>
    );
};
export default Videoa;
