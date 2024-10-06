import React from "react";
import mainimage from './../assets/img/hero4.png'
import btn from './../assets/img/button.png'
function Hero(){
  return(
    <>
    <div className="wapper relative object-cover mb-10 ">
    <img className="h-[95vh] w-screen objext-cover" src={mainimage} alt="" />
     <div className="right absolute top-[30vh] ml-20  ">
      <p className="font-semibold text-xl mt-1">Trade-in-offer</p>
      <h2  className="font-bold text-5xl mt-1">Super value deals</h2>
      <h2 className="font-bold text-5xl mt-1 " style={{color:"rgb(22, 110, 60)"}}>On all products</h2>
      <p className="font-semibold  text-zinc-500 mt-2">Lorem ipsum dolor sit amet consectetur adi..</p>
      <button className="relative mt-2"><img src={btn} alt="" />
      <div className="text absolute top-3 left-16  font-bold" style={{fontSize:"16px"}}>Read More</div>
      </button>
     </div>
    </div>
    </>
  )
}

export default Hero