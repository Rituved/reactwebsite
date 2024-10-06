import React from "react";
import b4 from '../assets/img/banner/b4.png'
import b7 from '../assets/img/banner/b7.png'
import b18 from '../assets/img/banner/b18.png'
const text=[
  {img:b7,white:"SEASONAL SALE", redt:"Winter clothes 2021"},
  {img:b4,white:"NEW FOOTWEAR COLLECTION", redt:"Spring / Summer2022"},
  {img:b18,white:"T-SHIRTS", redt:"News clothes"},
]
function Subbaner(){
  return(
    <>
    <div className="container m-auto flex juctify-around flex-wrap gap-5">
      {text.map((el,i)=>
      <div className=" relative ">
        <img className="h-[20vw] w-[28.3vw] ml-5   object-cover" src={el.img} alt="" />
        <div className="textOfBrand absolute top-[50%] left-[3vw]">
          <p className="text-white text-2xl font-bold">{el.white}</p>
          <p className=" mt-2 text-red-700 text-[20px] font-semibold">{el.redt}</p>
        </div>
      </div>
      )}
    </div>
    </>
  )
}

export default Subbaner