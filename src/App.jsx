import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Pages from './Pages/Pages'
import Courses from './Pages/Courses'
import Mentors from './Pages/Mentors'
import Blogs from './Pages/Blogs'
import AboutUs from './Pages/AboutUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Development from './Pages/Jobs/Development'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pages' element={<Pages />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/mentors' element={<Mentors />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/aboutus' element={<AboutUs />}></Route>
          <Route path='/development' element={<Development />}></Route>
        </Routes>
       
      </BrowserRouter>
    
    </>
  )
}

export default App
