import React from 'react'
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials";
import Stats from "../Components/Status";
import PageBanner from '../Components/PageBanner';
import AppInstall from "../Components/AppInstall";

const About = () => {
  return (
    <>
      <PageBanner 
        title="ABOUT OUR STORY" 
        subtitle="About Us" 
        bgImage="/icon/assets/hero/hero3.avif"
      />
     <AboutUs/>
        <Stats />
     <Testimonials />
     <AppInstall />
    </>
   
  )
}

export default About