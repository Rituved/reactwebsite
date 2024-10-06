import React from "react";
function Baner({img,title,des,btn}){
  return(
    <>
    <div className="baner_wapper relative ">
    <img src={img}  />
      <div className="text absolute top-[20vh] left-[15vw] text-white text-center ">
        <h1 className="text-center text-2xl">{title}</h1>
        <p className="text-center text-5xl font-semibold mt-3 mb-4">{des}</p>
        <button className="text-center bg-white px-10 py-4 text-black font-bold hover:bg-green-800 hover:text-white">{btn}</button>
      </div>
    </div>
    </>
  )
}

export default Baner