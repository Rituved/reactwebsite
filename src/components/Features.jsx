import React from "react";
import f1 from '../assets/img/features/f1.png'
import f2 from '../assets/img/features/f2.png'
import f3 from '../assets/img/features/f3.png'
import f4 from '../assets/img/features/f4.png'
import f5 from '../assets/img/features/f5.png'
import f6 from '../assets/img/features/f6.png'
var Feature=[
  {image:f1,title:"free Shopping"},
  {image:f2,title:"Online Shopping"},
  {image:f3,title:"Save Money"},
  {image:f4,title:"Promotions"},
  {image:f5,title:"Happy Sell"},
  {image:f6,title:"F24/support"},
]
function Features(){
  return(
    <>
    <div className="features  flex justify-around flex-wrap mt-5 mb-5">
    {
      Feature.map((val,index)=>
      <div className="border w-48 m-2">
        <img className="p-5" src={val.image} alt="f" />
        <p className="text-center p-1 m-2 bg-green-200 hover:bg-red-200">{val.title}</p>
      </div>
      )
    }
    </div>
    </>
  )
}

export default Features