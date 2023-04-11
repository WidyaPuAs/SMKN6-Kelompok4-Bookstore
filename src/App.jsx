import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => { 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element="<Home/>" />
      <Route path="/about" element="<About/>" />
    </Routes>
    <Footer/>
    </>
  )
}

export default App