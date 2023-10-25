"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)



const Videopage1 = () => {
       
    
    
    

  return (
    <div className='videopagediv'>
       <video src="/video1.webm" autoPlay muted loop id='video1'></video>
    </div>
  )
}

export default Videopage1
