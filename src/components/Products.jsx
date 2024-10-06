import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import f1 from '../assets/img/products/n6.png'
import f2 from '../assets/img/products/n2.png'
import f3 from '../assets/img/products/n3.png'
import f4 from '../assets/img/products/n4.png'
import f5 from '../assets/img/products/n5.png'
import f6 from '../assets/img/products/n6.png'
import f7 from '../assets/img/products/n7.png'
import f8 from '../assets/img/products/n8.png'
const pro=[
  {image:f1, title:"Cortoon Astronout T-Shirts1",price:"$2000"},
  {image:f2, title:"Cortoon Astronout T-Shirts2",price:"$580"},
  {image:f3, title:"Cortoon Astronout T-Shirts3",price:"$880"},
  {image:f4, title:"Cortoon Astronout T-Shirts4",price:"$1500"},
  {image:f5, title:"Cortoon Astronout T-Shirts3",price:"$880"},
  {image:f6, title:"Cortoon Astronout T-Shirts4",price:"$1500"},
  {image:f7, title:"Cortoon Astronout T-Shirts3",price:"$880"},
  {image:f8, title:"Cortoon Astronout T-Shirts4",price:"$1500"},
]
function Products(){
  return(
    <div className="container m-auto mb-20">
      <h1 className="text-center text-5xl font-semibold">Featured Products</h1>
      <p className="text-center mt-2 mb-5 font-semibold ">summer Collection New Morden Design</p>
      <div className="cards flex flex-wrap">
      {pro.map((el,index)=>
      <div className="border m-auto mt-5 rounded-lg   w-[300px]  ">
         <img className="p-3 hover:scale-[1.2] overflow-none rounded-[20px]" src={el.image} alt="" />
        <h2 className="text-center mt-2  text-xl font-semibold">{el.title}</h2>
        <p  className="flex ml-5 mt-2 text-yellow-600"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></p>
        <div className="design flex justify-between m-3">
          <p className="font-bold text-3sm ml-2 text-green-800">{el.price}</p>
        <p className="bg-green-200 p-3 hover:bg-green-400 text-xl rounded-full"><MdOutlineShoppingCart/></p>
        </div>
      </div>

      )}
      </div>
    </div>
  )
}
export default Products