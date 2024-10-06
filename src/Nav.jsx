import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Blog from './link/Blog'
import Shop from './link/Shop'
import Contact from './link/Contact'
import About from './link/About'
import Home from './Home'
import logo from './assets/img/logo.png'
function N(){
  return(
    <>
    <div className="wapper p-5 flex  justify-between px-20   " style={{backgroundColor:"rgb(225, 228, 242)", borderBottom:"1px solid rgb(225, 215, 245)", }}>
    <div className="logo"><img src={logo} alt="" /></div>  
    <div className="nav flex gap-14">
    <NavLink className={(e) => {
          return [
            e.isActive ? "text-green-800" : "text-black",
            e.isActive ? "font-bold" : ""
          ].join(" ");
         } } to='/'>Home</NavLink>
         

         <NavLink className={(e) => {
          return [
            e.isActive ? "text-green-800" : "text-black",
            e.isActive ? "font-bold" : ""
          ].join(" ");
         } } to='/About'>About</NavLink>
          <NavLink className={(e) => {
          return [
            e.isActive ? "text-green-800" : "text-black",
            e.isActive ? "font-bold" : ""
          ].join(" ");
         } } to='/Blog'>Blog</NavLink>
         
         <NavLink className={(e) => {
          return [
            e.isActive ? "text-green-800" : "text-black",
            e.isActive ? "font-bold" : ""
          ].join(" ");
         } } to='/Shop'>Shop</NavLink>
       
          <NavLink className={(e) => {
          return [
            e.isActive ? "text-green-800" : "text-black",
            e.isActive ? "font-bold" : ""
          ].join(" ");
         } } to='/Contact'>Contact</NavLink>
    
      </div>    
    </div>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Shop" element={<Shop/>} />
      <Route path="/Contact" element={<Contact/>} />
     </Routes>
   
    
    </>
  )
}
export default N