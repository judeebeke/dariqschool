import React from 'react'
import Hero from '../components/Hero'
import MeetProprietor from './../components/MeetProprietor';
import Alumni from '../components/Alumni';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import Intro from '../components/Intro';
import Footer from '../components/Footer';


const LandingPage = () => {
  return (
    <>
    <Hero />
    <Intro />
    <MeetProprietor />
    <Alumni />
    <Services />
    <ContactUs />
    <Footer />
    </>
  )
}

export default LandingPage