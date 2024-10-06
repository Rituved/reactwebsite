import React,{useState} from "react";
import banner from './../assets/img/about/banner.png'
import Baner from './../components/Baner'
import map from './../link/img/map.png'
import Sing from './../components/Sing'
import Footer from './../components/Footer'
function Contact(){
  const [val,setval]=useState({name:"",email:""})
  const handlesub=(event)=>{
    event.precentDefault();
    console.log(val);
   }
  return(
    <>
  <div className="wapper">
  <Baner img={banner} des="Leave a message, we love to hear fron you!"title="#Let's_talk"  btn="Explore More"/>
  <div className="forms flex justify-center  mb-5 mt-10">


  <form className=" w-[50vw] ml-[4vw] bg-green-300 mr-[3vw] flex justify-center items-center flex-col" action="" onSubmit={handlesub}>

  <input className="px-[1vw] w-[30vw]  py-2 border-2 m-5" style={{borderRadius:"20px", border:"2px solid black",fontSize:"larger"}} onChange={(event)=>setval({...val,name:event.target.value})} type="text" placeholder="Name" /><br></br>
  <input className="px-[1vw] w-[30vw]  py-2 border-2   " style={{borderRadius:"20px", border:"2px solid black",fontSize:"larger"}} onChange={(event)=>setval({...val,email:event.target.value})} type="email" placeholder="email" /><br></br>
  <input className="px-[1vw] w-[30vw]  py-2 border-2 " style={{borderRadius:"20px", border:"2px solid black",fontSize:"larger"}} onChange={(event)=>setval({...val,name:event.target.value})} type="text" placeholder="Subject" /><br></br>
  <textarea  className="w-[30vw] h-[10vw] " style={{borderRadius:"20px", border:"2px solid black",fontSize:"larger"}} name="" id=""></textarea>
  <br></br>
  <input className="bg-red-400 px-10 py-2 mb-3 mr-5"style={{borderRadius:"20px", border:"none",fontSize:"larger"}}   type="submit"/>
</form>

<img className="w-[45vw] mr-[4vw] "style={{border:"2px solid black", borderRadius:"20px"}} src={map}  alt="j" />
  </div>
  <Sing/>
  <Footer/>
  
    </div>
    </>
  )
}

export default Contact

