import React from 'react';
import tourvideo from '../tourvideo.mp4';
import './video.css'

const Video = () => {
  return (
    <div className='hero__video'>
      <video src={tourvideo} autoPlay loop muted />
    </div>
  )
}

export default Video
