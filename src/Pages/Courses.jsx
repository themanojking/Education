import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'

function Courses() {
  return (
    <>
     <Navbar />
      <div className='mt-40'>
        <Categories />
      </div>
    </>
  )
}

export default Courses
