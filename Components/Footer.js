"use client"
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className="footerdiv">
        <Image loading='lazy' id='mobileImage' src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/kwalee-lets-play-white.png" height={65} width={120} alt="logo" />
        <div className="footerhome">
        <h2 className='h2'>Home</h2>
         <h2 className='h2'>About Us</h2>
         <h2 className='h2'>Conatact Us</h2>
         <h2 className='h2'>Kwalee News</h2>
         <h2 className='h2'>Privacy policy</h2>
         <h2 className='h2'>Terms of use</h2>
        </div>
        <div className="footerblogques">
            <ol>
                <li>Latest Blogs</li>
                <li>What Does a Game Publisher Do?</li>
                <li>Kwalee Hits 1 Billion Mobile Game Downloads – Thanks For Playing!</li>
                <li>What Roguelikes Can Teach Us About What Indie Gamers Really Want</li>
                <li>9 Reasons Why You Should Work in the Mobile Gaming Industry.</li>
                <li>7 Steps to Become A Game Developer in 6 Months (Few Talk About #7 Enough!)</li>
                <li>Most Game Job Applicants Are Rejected Because They Don’t Do This…</li>
            </ol>

        </div>
        <Image loading='lazy' id='desktopImage' src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/kwalee-lets-play-white.png" height={70} width={190} alt="logo" />
    </div>
  )
}

export default Footer






