
import { useState } from "react";

function Sing(){
  const [val,setval]=useState({name:"",email:""})
  const handlesub=(event)=>{
   event.precentDefault();
   console.log(val);
  }
  
  return(
    <>
    <div className="wapper flex justify-between text-white pt-9 pb-9 mt-10 mb-20 flex-wrap " style={{backgroundColor:"rgb(6, 15, 31)"}}>
      <div className="left ml-14">
        <p className="text-3xl font-semibold">Sign up for Newsletters</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-yellow-500">Beatae nemo.</span></p>
      </div>
      <div className="right mr-14 mt-2">
      <form action="" onSubmit={handlesub}>
        <input className=" text-black px-10 py-2" onChange={(event)=>setval({...val,name:event.target.value})} type="text" placeholder="Enter your Email address" />
      </form>
      </div>
    </div>
    </>
  )
}

export default Sing
   