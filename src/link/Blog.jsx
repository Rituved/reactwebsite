import React from "react";
import Baner from '../components/Baner'
import b19 from '../link/Capture.png'
import Bside from "./Bside";
import Sing from './../components/Sing'
import Footer from "./../components/Footer";
function Blog(){
  return(
    <>
    <div className="wapper h-1/2 ">
      <Baner img={b19} title="read the about product best in the markets" des="#read more about products before you buy " btn="Explore More"  />
      <Bside/>
      <Sing/>
      <Footer/>
    </div>
    </>
  )
}

export default Blog