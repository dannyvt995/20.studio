import React from 'react'
import '../styles/Navbar.css'
import { SlMenu } from 'react-icons/sl';
import { Route, Routes } from "react-router-dom"
import Test from '.././components/Test'
import Home from '.././pages/Home';
export default function Navbar() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
    <div className='navbar'>
        <a href='' className='ic-nav-open'><SlMenu /></a>
    </div>
    </>
  
  )
}
