import React from 'react'
import Herosection from "../component/Herosection";
import Serviceprovidersection from "../component/Serviceprovidersection";
import Navbar from '../component/Navbar';
import ApplyNow from '../component/ApplyNow';
import AboutCardSection from '../component/AboutCardSection';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Serviceprovidersection/>
    <ApplyNow/>
    <AboutCardSection/>
    <Footer/>
    </>
  )
}

export default Home