import React from 'react'
import './App.css'
import MainNavBar from './Main-Page/MainNavBar';
import BgVideo from '../public/videos/video.mp4';
function App() {
  return (
    <div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        id='background'
        autoPlay
        loop
        muted
      >
        <source src={BgVideo} type="video/mp4" />
      </video>
        <MainNavBar/>
   
    </div>
  )
}

export default App;