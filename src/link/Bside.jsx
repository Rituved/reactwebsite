import React from "react";
import b1 from './../link/img/b1.png'
import b2 from './../link/img/b2.png'
import b3 from './../link/img/b3.png'
import b4 from './../link/img/b4.png'
import b5 from './../link/img/b5.png'


var details=[
  {image:b1, title:" The cotton-jersey zip-up Hoodie" ,para:"Designed for everyday comfort and ease, casual wear is versatile and relaxed, making it ideal for informal settings like lounging at home, running errands, or casual outings.",},
  {image:b2, title:" Business Casual" ,para:"Why: A step down from formal business attire, business casual is often worn in office environments that don't require a full suit. It balances professionalism with comfort.",},
  {image:b3, title:"Athletic Wear" ,para:"Why: Created for physical activity, athletic wear is made from materials that wick moisture away from the body, provide flexibility, and support movement.",},
  {image:b4, title:"Workwear" ,para:"Designed for durability and practicality, workwear is suited for manual labor or hazardous environments. It often features reinforced stitching and protective materials.",},
  {image:b5, title:"Formal Wear" ,para:" Worn for formal events such as weddings, galas, and business meetings. These clothes are designed to convey a sense of elegance and professionalism.",},
]
function Bside(){
  return(
    <>
      {details.map((val,index)=>
      <div className="container flex justify-center m-20 gap-10 items-center ">
        <div className="left">
        <img className="h-[20vw] w-[50vw] object-cover" src={val.image} alt="" />
      </div>
      <div className="right w-[50vw] mr-20">
        <h2 className="text-2xl font-bold mb-3">{val.title}</h2>
        <p className="text-zinc-600">{val.para}</p>
        <p className="font-semibold mt-3 hover:text-green-700">KEEP READING ——–——–</p>
      </div>
      </div>
      )}
    </>
  )
}

export default Bside