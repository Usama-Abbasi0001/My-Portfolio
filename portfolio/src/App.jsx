import React from 'react'
import './App.css'
// import BgVideo from '../public/videos/video.mp4';
import Login from './component/login/Loginpage';
import SignUp from './component/signUp/SignUpPage';
import { Route, Routes } from 'react-router-dom';
import AllComp from './AllComp';
;
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      {/* <video
        className="absolute top-0 bottom-0 left-0  object-cover "
        id='background'
        autoPlay
        loop
        muted
        >
        <source src={BgVideo} type="video/mp4" />
      </video> */}
      <Route path='/home' element={<AllComp/>}/>
      </Routes>
    </div>
  )
}

export default App;