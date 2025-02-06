import React from 'react'
import NavBar from '../components/common/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'
import Blog from '../pages/Blog'
import LiveMarkets from '../pages/LiveMarkets'

const AppRoutes = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/markets' element={<LiveMarkets/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      
    </>
  )
}

export default AppRoutes