import React from 'react'
import './App.css'
import MainNavBar from './Pages/MainNavBar';
import BgVideo from '../public/videos/video.mp4';
import MainHeroSetion from './Pages/MainHeroSetion';
import Skills from './component/Skills/Skills';
import Education from './Pages/Education';
import MainConfigration from './Pages/MainConfigration';
import Mainserives from './Pages/MainService';
import MainPortfolio from './Pages/MainPortfolio';
import SkillsCard from './Pages/SkillsCard';
import MainContact from './Pages/MainContact';
import FooterPage from './component/Footer/FooterPage';
;
function App() {
  return (
    <div>
      <video
        className="absolute top-0 left-0  object-cover "
        id='background'
        autoPlay
        loop
        muted
      >
        <source src={BgVideo} type="video/mp4" />
      </video>
        <MainNavBar/>
        <MainHeroSetion/>
        <Skills/>
        <MainConfigration/>
        <Mainserives/>
        <MainPortfolio/>
        <Education/>
        <SkillsCard/>
    <MainContact/>
    <FooterPage/>
    </div>
  )
}

export default App;