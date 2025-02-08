import React from 'react'
import LatestWork from '../component/Projects/LatestWork';
import FirstPorject from '../component/Projects/FirstPorject';

function MainPortfolio() {
  return (
    <div id='portfolio'>
         <LatestWork/>
         <FirstPorject
            projectTitle="Netflix Website"
            description="Netflix's website is a dynamic, responsive platform built to stream content seamlessly. Using HTML, CSS, React.js, and Tailwind CSS, you can create engaging user interfaces, implement efficient navigation, and ensure a sleek, mobile-friendly design for an enhanced viewing experience.."
            tools="React Js, Tailwind, JavaScript, Firebase, HTML/CSS"
            imageUrl="public/images/projectOne.png"/>

         <FirstPorject
          projectTitle="Exclusive Website"
          description="An exclusive e-commerce website provides a seamless shopping experience with modern design and intuitive navigation. Using HTML, CSS, React.js, and Tailwind CSS, you can create a responsive, visually appealing platform optimized for performance and user engagement."
          tools="React Js, Tailwind, JavaScript, Firebase, HTML/CSS"
          imageUrl="public/images/exclue.jpg"/>

           <FirstPorject
          projectTitle="Algorithams Website"
          description="An algorithm-focused website offers interactive visualizations and step-by-step explanations of complex concepts. With HTML, CSS, React.js, and Tailwind CSS, you can design a sleek, responsive interface that simplifies learning through dynamic and engaging user interactions."
          tools="React Js, Redux, JavaScript, Firebase, HTML/CSS"
          imageUrl="public/images/algoritham.png"/>

           <FirstPorject
          projectTitle="E-Projekty Website"
          description="The E-Projekty website is a modern platform for showcasing and managing projects efficiently. Using HTML, CSS, and Tailwind CSS, it delivers a clean, responsive design with smooth navigation for an enhanced user experience."
          tools="TailWind, HTML/CSS"
          imageUrl="public/images/projekty.png"/>
    </div>
  )
}

export default MainPortfolio;