import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Pages from './Pages/Pages'
import Courses from './Pages/Courses'
import Mentors from './Pages/Mentors'
import Blogs from './Pages/Blogs'
import AboutUs from './Pages/AboutUs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Authenticate/Signup'
import Signin from './Authenticate/Signin'

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
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
       
      </BrowserRouter>
    
    </>
  )
}

export default App
