import React from "react";
import Baner from "../components/Baner";
import banner from './../assets/img/about/banner.png'
import video from './../assets/img/about/1.mp4'
import Sing from '../components/Sing'
import Footer from '../components/Footer'
function About(){
  return(
    <>
    <div className="wapper">
    <Baner img={banner} des="Lorem, ipsum dolor sit amet consectetur."title="#KNOW US"  btn="Explore More"/>
    <div className="same mt-10"/>
   <div className="container">
    <h1 className="text-center text-5xl font-bold mb-5">Download Our <a className="text-blue-900 underline" href="#">App</a></h1>
   <video className="w-[50%] m-auto rounded-xl " src={video} controls></video>
   </div>
   <Sing/>
   <Footer/>
    </div>
    </>
  )
}

export default About