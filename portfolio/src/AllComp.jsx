import React from 'react'
import MainNavBar from './Pages/MainNavBar'
import MainHeroSetion from './Pages/MainHeroSetion'
import Skills from './component/Skills/Skills'
import MainConfigration from './Pages/MainConfigration'
import Mainserives from './Pages/MainService'
import MainPortfolio from './Pages/MainPortfolio'
import Education from './Pages/Education'
import SkillsCard from './Pages/SkillsCard'
import MainContact from './Pages/MainContact'
import FooterPage from './component/Footer/FooterPage'

function AllComp() {
  return (
    <div>
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

export default AllComp
