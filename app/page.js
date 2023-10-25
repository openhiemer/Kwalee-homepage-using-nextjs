"use client"
import React from 'react';
import Button from '@/Components/Button';
import Cardone from '@/Components/Cardone';
import Cardthree from '@/Components/Cardthree';
import Cardtwo from '@/Components/Cardtwo';
import Herotitile from '@/Components/Herotitile';
import Page52ndcontentcomponent from '@/Components/Page52ndcontentcomponent';
import Page5contentcomponent from '@/Components/Page5contentcomponent';
import Page6leftcomponent from '@/Components/Page6leftcomponent';
import Page6rightcomponent from '@/Components/Page6rightcomponent';
import Page7comp from '@/Components/Page7comp';
import Image from 'next/image';



const page = () => {
  const videohandler = () => {
    let vid = document.getElementById('video3');
    vid.pause();
  };
  const videohand2 = () => {
    let div = document.getElementById('video3');
    div.play();
  };

  return (
    <>
      <div className="page1">
        <Herotitile />
        <Button label="Get Started " />
      </div>
      <div className="page2">
        <h3>Why Kwalee</h3>
        <div className="cards">
          <Cardone />
          <Cardtwo />
          <Cardthree />
        </div>
      </div>
      <div className="page3">
        <h1>WE ARE KWALEE</h1>
        <div className="page3content">
          <div className="page3text">
            <h3>
              &ldquo;Kwalee: A decade of gaming excellence, fueled by
              brilliant minds worldwide. Our team, a blend of genius and
              ambition, sparks creativity in studios across the globe. Whether
              youre after a top-notch game publisher or a career
              transformation, Kwalee welcomes you to the arena of fun and
              limitless possibilities. Game on!&rdquo;
            </h3>
          </div>
          <video
            id="video3"
            onMouseEnter={videohandler}
            onMouseLeave={videohand2}
            src="https://kwaleeweb-dev.s3.eu-west-1.amazonaws.com/s3fs-public/2023-09/images/meet-the-team.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
      <div className="page4">
        <div className="page4left">
          
          <Image 
            id='page4leftimg'
            loading="lazy"
            src="https://media.licdn.com/dms/image/C5612AQF1yrunjj4Lfg/article-cover_image-shrink_600_2000/0/1586744442563?e=2147483647&v=beta&t=rJ_yQAuGCQ7YY8MNu63R-GRciWmgqChZrmNHhhaMY0Y"
            alt="phone image" height={365} width={400}
          />
        </div>
        <div className="page4right">
          <h2>Publish Your Mobile Game</h2>
          <p>
            Kwalee: Your Gateway to Success! With a billion downloads under
            our belt, we provide award-winning publishing support – from
            funding and user acquisition to top-notch marketing. Let us handle
            the heavy lifting with our world-class team in QA, production, and
            localization. While you focus on crafting quality games, we ensure
            your studio and your game soar to maximum profitability. Game on!
          </p>
          <button>Tell Me More</button>
        </div>
      </div>
      <div className="page5">
        <div className="wrapperforpage5">
          <Page5contentcomponent />
          <Page52ndcontentcomponent />
        </div>
      </div>
      <div className="page6">
        <div className="page6left">
          <Page6leftcomponent />
        </div>
        <div className="page6right">
          <Page6rightcomponent />
        </div>
      </div>
      <Page7comp />
    </>
  );
};

export default page;
