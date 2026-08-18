import React from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import AllComp from './AllComp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllComp />} />
        <Route path='/home' element={<AllComp />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App;