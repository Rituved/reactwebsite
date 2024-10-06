import React from "react"
import Features from './components/Features'
import Products from "./components/Products"
import Baner from "./components/Baner"
import bg from './link/img/b2.png'
import Smallbaner from "./components/Smallbaner"
import Subbaner from "./components/Subbaner"
import Sing from "./components/Sing"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <Products/>
      <Baner img={bg} title="Repair Services" des="Up to 10% off - All t-Shirts & Accessories" btn="Explore More"/>
      <Smallbaner/>
      <Subbaner/>
      <Sing/>
      <Footer/>

    </>
  )
}

export default Home
