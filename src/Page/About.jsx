import React from 'react'
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials";
import Stats from "../Components/Status";
import PageBanner from '../Components/PageBanner';
const About = () => {
  return (
    <>
      <PageBanner 
        title="ABOUT OUR STORY" 
        subtitle="About Us" 
        bgImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
      />
     <AboutUs/>
        <Stats />
     <Testimonials />
    </>
   
  )
}

export default About