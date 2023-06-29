import React from 'react';
import videobg from '../../img/videobg1.mp4'; 


const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={videobg} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
