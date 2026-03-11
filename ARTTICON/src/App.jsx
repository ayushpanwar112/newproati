import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import RegistrationPage from './pages/RegistrationPage'
import {RegistrationFeeTable} from './components/RegistrationFeeTable'
import Contact from './pages/ContactUs'


import Gallery from './components/Gallery' 
import AboutRishikesh from "./pages/AboutRishikesh";
import CharmsOfRishikesh from "./pages/CharmsOfRishikesh";
import Venue from "./pages/AboutVenue"
import EventsDates from "./pages/EventsDates"
import Travel from "./pages/TravelInUttrakhand"
import Connectivity from "./pages/Connectivity"
import FoodAccommodation from "./pages/FoodAccomodation"
import AbstractGuidelines from './pages/AbstractGuidelines'
import AbstractSubmision from './pages/AbstractSubmission'



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
          <Route path="/about-Rishikesh" element={<AboutRishikesh />} />
          <Route path="/charms-of-Rishikesh" element={<CharmsOfRishikesh />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/events-dates" element={<EventsDates />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/connectivity" element={<Connectivity />} />
          <Route path="/food-accommodation" element={<FoodAccommodation />} />
         <Route path="/abstract-submission" element={<AbstractSubmision />} />
         <Route path="/abstract-guidelines" element={<AbstractGuidelines />} />
           
        </Routes>
         <Gallery />
      </main>
      <Footer />
    </div>
  )
}
