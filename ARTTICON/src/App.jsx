import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import RegistrationPage from './pages/RegistrationPage'
import {RegistrationFeeTable} from './components/RegistrationFeeTable'
import Contact from './pages/ContactUs'






export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />}/>
          <Route path="/registration-fees" element={<RegistrationFeeTable />} /> 
          <Route path="/contact" element={<Contact />} />
          
           
        </Routes>
        
      </main>
      <Footer />
    </div>
  )
}
