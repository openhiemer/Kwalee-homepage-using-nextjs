"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navigation = () => {

//    const dropdown=()=>{
//     let click=document.getElementById('clickbar');
//     click.addEventListener('click',()=>{
//          let drop=document.getElementById('navdropformobile');
//          drop.classList.toggle('shownav')
//     })
//    }
   


  return (
     <>
        
        <div className="navigation">
            
               <div className="navright">
                <Image loading='lazy' id='logo' src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/kwalee-lets-play-logo.png" height={70} width={150}  alt="Logo" />
               </div>
            <div className="navleft">
                <Link className='Linknav'  href="">Mobile Publishing</Link>
                <Link className='Linknav' href="">Mobile Games</Link>
                <Link  className='Linknav' href="">Kwalee Gaming</Link>
                <Link className='Linknav' href="">Join Us</Link>
                <Link className='Linknav' href="">Blog</Link>
            </div>
            <div className='clickbar'>
                <div className="line"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

    
            <div className='navdropformobile'>
                <Link className='Linknavmob'  href="">Mobile Publishing</Link>
                <Link className='Linknavmob' href="">Mobile Games</Link>
                <Link  className='Linknavmob' href="">Kwalee Gaming</Link>
                <Link className='Linknavmob' href="">Join Us</Link>
                <Link className='Linknavmob' href="">Blog</Link>

            </div>
            
           
    
        </div>
        
     </>
  )
}

export default Navigation


// let dropdown=()=>{
//     let click=document.getElementById('clicbar')
//     click.addEventListener('click',()=>{
//         let drop=document.getElementById('navdropformob');
//         drop.addEventListener('click',()=>{
//             drop.classList.toggle('showbar')
//         })
//     })
// }