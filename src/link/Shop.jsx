import React from "react";
import Products from "../components/Products";
import Sing from "../components/Sing";
import Footer from "../components/Footer";
import Baner from "../components/Baner";
import b from './b1.png'
function Shop(){
  return(
    <>
   <div className="wapper ">
    <Baner  img={b} des="Up to 10% off - All t-Shirts & Accessories"title="#Stayhome"  btn="Explore More"/>
   <div className="same mt-10">
   <Products/>
    <Sing/>
    <Footer/>
   </div>
   </div>
    </>
  )
}
export default Shop