import React from "react";
import b10 from '../assets/img/banner/b10.png'
import b17 from '../assets/img/banner/b17.png'
const items=[
  {image:b17, title:"crazy deok",name:"buy 1 get 1 free",para:"the best classic dress is on sale of cara",button:"learn More"},
  {image:b10, title:"Spring/summer",name:"upcomming season",para:"the best classic dress is on sale you can buy",button:"collection"}
]
function Smallbaner(){
  return(
    <>
    <div className="main flex justify-center gap-10 mb-10 mt-20 ">
     {items.map((el,index)=>
    <div className="sidebyside relative ">
      <img className="h-[100%]"  src={el.image} alt="j" />
      <div className="about absolute top-[30%] left-[5%]">
      <h2 className="text-white  text-xl ">{el.title}</h2>
      <p className="text-white  text-4xl font-semibold ">{el.name}</p>
      <p  className="text-white  text-xl mt-2 ">{el.para}</p>
      <button className="bg-green-800 px-7 text-white font-semibold mt-3 py-[12px] hover:bg-[transparent] hover:border-2">{el.button}</button>
      </div>
    </div>
    )}
    </div>
    </>
  )
}

export default Smallbaner