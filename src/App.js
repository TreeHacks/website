import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Countdown from './Countdown';
import Dropdown from './Dropdown';
import DropdownBox from './DropdownBox';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Branch2 } from './assets/branch2.svg';
import { ReactComponent as Circle } from './assets/circle_pattern.svg';
import { ReactComponent as Triangle } from './assets/trianglepattern.svg';
import { ReactComponent as Square } from './assets/squares.svg';
import { ReactComponent as Accent } from './assets/accent.svg';
import { ReactComponent as Accent2 } from './assets/accent2.svg';
import { ReactComponent as CircleIntersection } from './assets/circleintersection.svg';

import { ReactComponent as CatiatorSVG } from './assets/cat.svg';
import { ReactComponent as ComputerTopSVG } from './assets/projector.svg';
import { ReactComponent as NeuralHashSVG } from './assets/neural.svg';
import { ReactComponent as PowerHouseSVG } from './assets/plug.svg';
import { ReactComponent as DocodialSVG } from './assets/medical.svg';
import { ReactComponent as MarvelSCG } from './assets/man.svg';

import { ReactComponent as AEye } from './assets/skin.svg';
import { ReactComponent as LucidSVG } from './assets/drum.svg';


/* Tracks */
import blockchainTrack  from './assets/tracks/blockchain.png';
import healthcareTrack  from './assets/tracks/healthcare.png';
import privacyTrack  from './assets/tracks/privacy.png';
import entertainmentTrack  from './assets/tracks/entertainment.png';
import sustainabilityTrack  from './assets/tracks/education.png';
import educationTrack  from './assets/tracks/sustainability.png';

import mainImage from './assets/image_234.png'; //'./assets/photos/Treehacks-129.webp';
import main2Image from './assets/image_233.png'; //'./assets/photos/Treehacks-129.webp';
import sideImage1 from './assets/photos/Treehacks-181.webp';
import sideImage2 from './assets/photos/Treehacks-347.webp';
import globeImage from './assets/globe.png';
import hootowImg from './assets/hootow.png'

import countries_stat from './assets/hexagons/countries.png';
import universities_stat from './assets/hexagons/universities.png';
import companies_stat from './assets/hexagons/companies.png';
import prizes_stat from './assets/hexagons/prizes.png';
import projects_stat from './assets/hexagons/projects.png';
import hackers_stat from './assets/hexagons/hackers.png';
import mentors_stat from './assets/hexagons/mentors.png';

import sajith from './assets/photos/sajith.webp';
import karpathy from './assets/photos/karpathy.webp';
import dan from './assets/photos/dan_schwartz.webp';
import tim from './assets/photos/tim_chou.webp';
import katz from './assets/photos/katz.webp';
import jen from './assets/photos/jen_king.webp';
import john from './assets/photos/john.webp';
import leslie from './assets/photos/leslie.webp';


import scroll1 from './assets/photos/scroll1.webp';
import scroll2 from './assets/photos/scroll2.webp';
import scroll3 from './assets/photos/scroll3.webp';
import scroll4 from './assets/photos/scroll4.webp';
import scroll5 from './assets/photos/scroll5.webp';
import scroll6 from './assets/photos/scroll6.webp';
import scroll7 from './assets/photos/scroll7.webp';

import backgroundVideo from './assets/videos/treehacks_compressed.mp4';
import robotVideo from './assets/videos/robot_compressed.mp4';
import introVideo from './assets/videos/compressed_intro.mp4';
import signVideo from './assets/videos/sign_compressed.mp4';
import particlevid from './assets/videos/particles_compressed.mp4';
import './App.css';

import Otsuka from './assets/logos/otsuka.webp';
import Estuary from './assets/logos/estuary.webp';
import Convex from './assets/logos/convex.webp';
import InterSystems from './assets/logos/intersystems.webp';
import OpenAI from './assets/logos/OpenAI.webp';
import Vercel from './assets/logos/vercel.webp';
import Citadel from './assets/logos/citadel.webp';
import You from './assets/logos/you.webp';
import Skydio from './assets/logos/skydio.webp';
import Cadence from './assets/logos/cadence.webp';
import Arduino from './assets/logos/arduino.webp';
import Zetachain from './assets/logos/zetachain.webp';
import Phri from './assets/logos/phri.webp';
import Mem from './assets/logos/mem.webp';
import Cotopaxi from './assets/logos/cotopaxi.webp';
import HRT from './assets/logos/hrt.webp';
import Meta from './assets/logos/meta.webp';
import Cisco from './assets/logos/cisco.webp';
import SquareL from './assets/logos/square.webp';
import Retool from './assets/logos/retool.webp';
import Dolby from './assets/logos/dolby.webp';
import Warp from './assets/logos/warp.webp';
import Bnb from './assets/logos/bnb.webp';
import Checkbook from './assets/logos/checkbook.webp';
import Parrot from './assets/logos/parrot.webp';
import YCombinator from './assets/logos/ycombinator.webp';
import Neo from './assets/logos/neo.webp';
import Pear from './assets/logos/pear.webp';
import GeneralTask from './assets/logos/generaltask.webp';
import Replit from './assets/logos/replit.webp';
import Algolia from './assets/logos/algolia.webp';
import Wolfram from './assets/logos/wolfram.webp';
import Makerbot from './assets/logos/makerbot.webp';
import Twilio from './assets/logos/twilio.webp';
import Supabase from './assets/logos/supabase.webp';
import Voiceflow from './assets/logos/voiceflow.webp';
import Aptos from './assets/logos/aptos.webp';
import Near from './assets/logos/near.webp';
import Aspecta from './assets/logos/aspecta.webp';
import Brave from './assets/logos/brave.webp';
import Palantir from './assets/logos/palantir.webp';
import HumanCapital from './assets/logos/human_capital.webp';
import EIS from './assets/logos/EIS.webp';
import RDV from './assets/logos/rdv.webp';
import Modal from './assets/logos/modal.webp';
import Sequoia from './assets/logos/sequoia.webp';
import FV from './assets/logos/FVs.webp';

import { prizes } from './prizes';

import { AiFillGithub, AiFillInstagram, AiOutlineFacebook, AiOutlineMedium, AiOutlineTwitter, AiFillStar } from "react-icons/ai";

function App() {
  const Tracks = {
    "Education": 0,
    "Sustainability_and_Development": 1,
    "Healthcare": 2,
    "Fintech_and_Blockchain": 3,
    "Entertainment_and_Interaction": 4,
    "Privacy_and_Safety": 5
  }

  const [activePrizePage, setActivePrizePage] = useState(1);

  let count = 0;
  let count2 = 0;
  let count3 = 0;

  // FAQ Accordian

  useEffect(() => {
    if (count === 0) {
      const accordionHeader = document.querySelectorAll(".accordion-header");
      console.log(accordionHeader);
      accordionHeader.forEach((header) => {
        header.addEventListener("click", function () {
          const accordionContent = header.parentElement.querySelector(".accordion-content");
          let accordionMaxHeight = accordionContent.style.maxHeight;

          // Condition handling
          if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
            header.querySelector(".fas").classList.remove("fa-plus");
            header.querySelector(".fas").classList.add("fa-minus");
            header.parentElement.classList.add("bg-indigo-50");
          } else {
            accordionContent.style.maxHeight = `0px`;
            header.querySelector(".fas").classList.add("fa-plus");
            header.querySelector(".fas").classList.remove("fa-minus");
            header.parentElement.classList.remove("bg-indigo-50");
          }
        });
      });
      count = 1;
    }
  }, []);


  // Horizontal scroller

  useEffect(() => {
    if (count2 === 0) {
      (function horizontalScrollingBanner() {
        var banners = document.getElementsByClassName('horizontal-scrolling-banner');
        if (!banners || banners.length === 0) {
          return;
        }
        var pxPerSecond = 50;
        setUpElements();
        scrollTheBanners();
        window.addEventListener('resize', setUpElements);

        function setUpElements() {
          for (var i = 0; i < banners.length; i++) {
            var currentBanner = banners[i];
            var helperWrapperClass = 'horizontal-scrolling-banner__helper-wrapper';
            var currentHelperWrapper = currentBanner.querySelector('.' + helperWrapperClass);
            if (currentHelperWrapper) {
              var clones = currentHelperWrapper.querySelectorAll('[data-clone]');
              Array.prototype.forEach.call(clones, function (clone) {
                clone.remove();
              });
              var childrenCount = currentHelperWrapper.children.length;
              for (var i = 0; i < childrenCount; i++) {
                currentBanner.appendChild(currentHelperWrapper.children[0]);
              }
              currentHelperWrapper.remove();
            }

            var children = currentBanner.children;

            var bannerWidth = currentBanner.getBoundingClientRect().width;
            var minWidthToCoverBanner = (bannerWidth * 2) + children[0].getBoundingClientRect().width;
            var childrenWidth = Array.prototype.reduce.call(children, function (r, child) {
              return r + child.getBoundingClientRect().width;
            }, 0);
            var currentWidth = childrenWidth;


            do {
              Array.prototype.forEach.call(children, function (child) {
                var clone = child.cloneNode();
                clone.setAttribute('aria-hidden', true);
                clone.dataset.clone = true;
                currentBanner.appendChild(clone);
              });
              currentWidth += childrenWidth;
            } while (currentWidth < minWidthToCoverBanner);

            var transitionHelperWrapper = document.createElement('div');
            transitionHelperWrapper.classList.add('horizontal-scrolling-banner__helper-wrapper');
            var childrenCount = children.length;
            for (var i = 0; i < childrenCount; i++) {
              transitionHelperWrapper.appendChild(children[0]);
            }
            currentBanner.appendChild(transitionHelperWrapper);
            transitionHelperWrapper.dataset.childrenWidth = childrenWidth;
          }
        }

        function scrollTheBanners() {
          for (var i = 0; i < banners.length; i++) {
            var helperWrapper = banners[i].firstElementChild;
            var childrenWidth = helperWrapper.dataset.childrenWidth;
            var offsetLeft = helperWrapper.offsetLeft;

            if (offsetLeft <= (childrenWidth * -1)) {
              helperWrapper.style.transitionDuration = '0s';
              helperWrapper.style.left = '0px';
              helperWrapper.style.removeProperty('transition-duration');
            } else if (helperWrapper.style.left === '' || helperWrapper.style.left === '0px') {
              setTimeout(function () {
                helperWrapper.style.transitionDuration = (childrenWidth / pxPerSecond).toFixed() + 's';
                helperWrapper.style.left = (childrenWidth * -1) + 'px';
              }, 0);
            }
          }
          requestAnimationFrame(scrollTheBanners);
        }
      })();

      count2 = 1;
    }
  }, []);

  // Header

  useEffect(() => {
    if (count3 === 0) {
      let header = document.getElementById('site-header');
      let links = document.getElementsByClassName('link');

      document.addEventListener('scroll', function () {

        // Get the scroll position
        let scrollPos = window.pageYOffset;

        if (scrollPos > 100) {
          header.style.backgroundColor = "white";
          for (let i = 0; i < links.length; i++) {
            links[i].style.color = "black";
          }
        } else {
          header.style.backgroundColor = "transparent";
          for (let i = 0; i < links.length; i++) {
            links[i].style.color = "black";
          }
        }
      });
    }
  }, []);

  const QuickOption = ({ disabled, title, section, link, description }) => {
    return (
      <a disabled={disabled} href={section ? "#" + section : link} target={section ? "" : "_blank"} className={`border mb-2 py-4 px-6 ${disabled ? "" : "lg:hover:bg-black hover:bg-gray-100 ease-in duration-300 cursor-pointer"} lg:bg-transparent bg-white w-full lg:h-32`}>
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <h1 className='font-CerealXBd text-lg bg-gradient-to-r bg-clip-text text-transparent 
            from-emerald-500 via-emerald-500 to-indigo-500
            animate-text'>{title}</h1>
          <div className="relative flex flex-col justify-center">
            <p className="font-CerealMd text-sm lg:text-black text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </a>
    )
  }

  return (
    <div className="overflow-hidden scroll-smooth">
      <div className="h-20 flex items-center lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 z-50 header w-full fixed" id="site-header">
        <div>
          <Logo />
        </div>
        <div className='overflow-x-scroll h-20 flex items-center'>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#home'>Home</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#about'>About</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#tracks'>Tracks</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#faqs'>FAQs</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='https://2023.treehacks.com/'>2023 Site</a>
        </div>
        <a className='apply-btn ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-white lg:text-white md:text-white text-black' href='https://root.treehacks.com/'>Apply</a>
      </div>
      <section class="xl:h-screen lg:h-screen flex w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex-col justify-center items-center xl:pt-24 pt-24" id="home">
        <div className="absolute -top-20 -right-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div class="w-11/12 mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl absolute top-[5rem] bottom-[2rem] left-1/2 transform -translate-x-1/2">
          <video src={introVideo} autoPlay muted loop class="brightness-[0.4] object-cover w-full h-full" />
        </div>

        <div className='flex flex-row items-center w-full justify-content: start'>
          <div className='lg:w-5/6 z-auto'>
            <div className="inline-block">
              <p className='font-semibold xl:text-white lg:text-white md:text-white text-white mb-1 font-display xl:text-lg lg:text-md text-xs'>February 16th-18th 2024 @ Stanford University</p>
              <div class="h-[2px] bg-gradient-to-r xl:bg-white lg:bg-white md:bg-white bg-white rounded-full mb-4"></div>
            </div> 
            <Countdown className='xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white' targetDate="2023-12-12T00:00:00" />
            <h1 className='mb-8 xl:text-3xl lg:text-xl text-md xl:text-white lg:text-white md:text-white text-white font-CerealMd'> left to apply (by Dec 11th)</h1>
            <a target="_blank" href="https://root.treehacks.com/" class="apply-button">
              <span>Apply to hack!</span>
            </a>

            <a target="_blank" href="https://forms.gle/R936eYcAMqHm3xft7" class="secondary-button">
              <span>Judges and Mentors</span>
            </a>

            <a target="_blank" href="mailto:lmoberly@stannford.edu" class="secondary-button">
              <span>Sponsor</span>
            </a>
            
            <div className='flex flex-row p-8 pl-20'>
              <a href="https://medium.com/@hackwithtrees" target="_blank"><AiOutlineMedium className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://www.facebook.com/treehacks" target="_blank"><AiOutlineFacebook className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://twitter.com/hackwithtrees" target="_blank"><AiOutlineTwitter className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://www.instagram.com/stanfordtreehacks/?hl=en" target="_blank"><AiFillInstagram className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://github.com/TreeHacks" target="_blank"><AiFillGithub className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pb-2 pt-16 flex flex-col relative" id="about">
        <div className="absolute -bottom-60 -left-32 opacity-20 scale-150 -z-10">
          <Square />
        </div>
        {/* <Branch2 className="lg:w-96 lg:h-80 w-52 h-40 absolute lg:-top-52 -top-16 opacity-30 -left-10 lg:opacity-100 lg:block hidden" /> */}

        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col lg:w-6/12 lg:pr-14 justify-center">
            <h1 className='font-CerealXBd text-4xl mb-4 bg-clip-text text-black'>What is TreeHacks?</h1>
            <p className='font-CerealBK text-slate-500 mb-8'>
              TreeHacks is Stanford’s premier hackathon and one of the biggest in the world! This year we turn 10- and we're going ALL OUT!  TreeHacks covers flights (regional caps), food, and swag for all hackers. Not to mention, some incredible prizes, world-renowned guest speakers, incredible mentors, and deeply technical workshops and fun activities throughout the event! Most of all, you'll be learning and building in an energetic environment with people as passionate as you!</p>
            <p className='font-CerealBK text-slate-500 mb-10'>
              *Stanford students are auto-accepted but need to RSVP by <a className='text-indigo-500 underline' href="https://root.treehacks.com/" target="_blank">applying</a>
            </p>
          </div>
          <div className="flex flex-col lg:w-6/12 lg:pr-14 relative">
            <div>
              <img src={mainImage} className="w-full h-full brightness-75" />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:mb-2 mb-10">
          <div className="flex flex-col lg:w-6/12 lg:pr-14 relative">
            <div>
              <img src={main2Image} className="w-full h-full brightness-75" />
            </div>
          </div>
          <div className="flex flex-col lg:w-6/12 justify-center lg:pt-0 pt-16">
            <h1 className='font-CerealXBd lg:text-4xl text-3xl mb-4 bg-clip-text text-black'>The Hackathon</h1>
            <p className='font-CerealBK text-slate-500'>
              If you've ever had an idea that you wanted to bring to life, TreeHacks is the place to do it. We've got mentors from companies like Google, Facebook, and Microsoft to help you along the way. And if you're looking to see if your project can be something more, we'll help you flesh out your idea and get you started on the right path.
            </p>
          </div>
        </div>
      </section>


      <section className="w-full pt-10 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 flex flex-col relative lg:mt-8 pb-40">
          <div className="absolute top-96 -left-40 opacity-30 scale-150 -z-10">
            <CircleIntersection />
          </div>
          <div className="lg:items-center flex flex-col ">
            <h1 className='font-CerealXBd lg:text-5xl text-4xl mb-6 bg-gradient-to-r bg-clip-text'>Stanford's premier hackathon</h1>
            <p className='font-CerealBK text-black mb-20 lg:text-center lg:text-lg text-md'>
              It’s simple. The country’s brightest engineering students are flown to Stanford’s campus to build solutions to the world’s largest challenges for 36 hours straight.
            </p>
          </div>
          <img src={globeImage} className="globe_img top-28 z-0 w-120 mb-160 -left-20 absolute lg:-ml-16 animate-spin-slow" alt="Revolving Globe" />

          <div className="left-1/2">
            <DropdownBox />
          </div>

      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 lg:pb-15 pb-15 flex flex-col relative " id="projects">
        <div className="absolute -top-20 -right-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div className='flex flex-row'>
          <div className="lg:items-center flex flex-col ">
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD'>2024 Tracks</h1>
            <p className='pb-4 text-slate-500 text-center lg:text-xl mb-8 font-CerealBK'>
              TreeHacks is an incredible opportunity to build something you're passionate about. Every year we have a variety of tracks for you to choose from, but you can also create something completely new. We can't wait to see what you build!
            </p>
          </div>
        </div>
        <div className='pl-40 flex lg:flex-row flex-col lg:mb-12 mb-4'>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-60 card">
              <div class="card__content">
                <div class="card__front flex flex-col justify-end align-middle items-center p-10">
                  <img src={educationTrack} />
                  <h1 className='font-semibold text-xl pt-2 font-CerealBD text-black'>Education</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Nancy, Olivia, Mitchell, and Ryan created an educational VR game that lets players battle gladiator cats by learning and practicing American Sign Language. This team won our Moonshot Prize at TreeHacks 2021.</p>
                  <a href='https://devpost.com/software/catiator' target="_blank" className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-60 card">
              <div class="card__content">
                <div class="card__front flex flex-col justify-end align-middle items-center p-10">
                <img src={sustainabilityTrack} />
                  <h1 className='pt-2 font-semibold text-xl font-CerealBD text-black'>Sustainability & Development</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Isaac, Nikhil, Evani, and Rohan used machine learning to develop a decoder model that acts as a cryptographically-secure, transformation-invariant hash function to identify image ownership. This team won the Security Grand Prize and Most Technically Complex Hack at TreeHacks 2018.</p>
                  <a href='https://devpost.com/software/neuralhash' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12'>
            <div className="w-full h-60 card">
              <div class="card__content">
                <div class="card__front flex flex-col justify-end align-middle items-center p-10">
                  <img src={entertainmentTrack}/>
                  <h1 className='pt-2 font-semibold text-xl font-CerealBD text-black'>Entertainment & Interaction</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Nadya, Lucy, and Diane learned React Native and honed their UI skills while developing an app that informs users about the energy saving costs of various appliances and helps a user select all desired appliances for a home. TreeHacks 2018 was their first hackathon.</p>
                  <a href='https://devpost.com/software/energy-awareness-app' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pl-80 flex lg:flex-row flex-col'>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-60 card">
              <div class="card__content">
                <div class="card__front flex flex-col justify-end align-middle items-center p-10">
                  <img src={blockchainTrack} />
                  <h1 className='pt-2 font-semibold text-xl font-CerealBD text-black text-center'>FinTech & Blockchain</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Jomo, Kaleb, Ryan, and Khalid built a mobile, augmented reality experience that allows children to learn about health topics from a superhero related to the searched topic. Imagine Spider-Man teaching about spider bites! They won Best Mobile AR Hack at TreeHacks 2018.</p>
                  <a href='https://devpost.com/software/marvel-medical-dictionary' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12'>
            <div className="w-full h-60 card">
              <div class="card__content">
                <div class="card__front flex flex-col justify-end align-middle items-center p-10">
                  <img src={healthcareTrack}/>
                  <h1 className='pt-2 font-semibold text-xl font-CerealBD text-black'>Healthcare</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Lillian, Kevin, Laura, and Juhi built an interactive VR Oculus Quest game to improve coordination through rhythm for those suffering from motor impairment. They won the Most Creative Hack prize at TreeHacks 2020.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="horizontal-scrolling-banner pt-16 lg:pb-16">
        <img src={scroll1} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll2} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll3} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll4} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll5} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll6} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll7} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250pxs] w-[250px] mr-12 shadow-2xl brightness-75" />
      </div>


      <section class="xl:h-screen lg:h-screen flex w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex-col justify-center items-center" id="stats">
          <h1 className='font-CerealXBd lg:text-5xl pb-5 text-3xl bg-clip-text text-black text-center'>Last year we had...</h1>

          <div className="flex flex-col justify-center align-middle items-center px-10 py-8 relative mt-4 mx-10 lg:mx-0">

          <Accent className='absolute -right-20 top-60 accent_confetti' />
          <Accent2 className='absolute -left-20 top-60 accent_confetti' />
          <div className="flex">
              <div>
                <img src={mentors_stat} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
              </div>
              <div>
                <img src={projects_stat} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
              </div>
          </div>

          <div className="flex">
            <div>
              <img src={prizes_stat} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
            <div>
              <img src={hackers_stat} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
            <div>
              <img src={companies_stat} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
          </div>

        <div className="flex">
            <div>
              <img src={universities_stat} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
            <div>
              <img src={countries_stat} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
        </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 lg:pb-20 flex flex-col relative" id="sponsors">
        <div className="absolute -top-20 -right-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div className='flex flex-row'>
          <div>
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD bg-gradient-to-r bg-clip-text pb-2 text-black'>Sponsors</h1>
          </div>
        </div>
        <div className="w-full">
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4'>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://openai.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={OpenAI} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://vercel.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Vercel} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-sm font-CerealBK mb-2'>
                      Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
                    </p>
                    <p className='text-sm font-CerealBK'>
                      We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full'>
              <a href="https://citadel.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={Citadel} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4'>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://you.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={You} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://skydio.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Skydio} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full'>
              <a href="https://www.cadence.com/en_US/home.html" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Cadence} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-sm font-CerealBK mb-2'>
                      Cadence is a pivotal leader in electronic systems design, building upon more than 30 years of computational software expertise. The company applies its underlying Intelligent System Design strategy to deliver software, hardware, and IP that turn design concepts into reality.
                    </p>
                    <p className='text-sm font-CerealBK mb-2'>
                      Cadence customers are the world’s most innovative companies, delivering extraordinary electronic products from chips to boards to complete systems for the most dynamic market applications including hyperscale computing, 5G communications, automotive, mobile, aerospace, consumer, industrial, and healthcare.
                    </p>
                    <p className='text-sm font-CerealBK'>
                      For eight years in a row, Fortune magazine has named Cadence one of the 100 Best Companies to Work For.                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4'>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://arduino.cc/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={Arduino} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://zetachain.com" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={Zetachain} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-sm font-CerealBK'>
                      ZetaChain is the only decentralized blockchain and smart contract platform built for omnichain interoperability.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full'>
              <a href="http://www.patientsafetytech.com" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={Phri} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-sm font-CerealBK mb-2'>
                      The Patient Safety Technology Challenge is designed to fuel the engagement of students and innovators in creating solutions and envisioning transformational approaches to reduce preventable harm from medical errors and reimagine a vastly safer healthcare system. The initiative injects patient safety awards into existing local, regional, and national competitions and produce a documentary to help increase awareness of the patient safety crisis.
                    </p>
                    <p className='text-sm font-CerealBK'>
                      Guided by national partners experienced in safety technology and advanced healthcare analytics, the Challenge will fund awards within existing competitions, hackathons, and startup weekends as either an off-the-shelf award package or as a new award.                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://www.aptoslabs.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-8 relative'>
                  <img src={Aptos} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full lg:mr-4'>
              <a href="https://www.near.org/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-11 relative'>
                  <img src={Near} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-4/12 w-full'>
              <a href="https://aspecta.id/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-16 relative'>
                  <img src={Aspecta} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://www.hudsonrivertrading.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={HRT} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://meta.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-8 relative'>
                  <img src={Meta} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://cisco.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={Cisco} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full'>
              <a href="https://square.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
                  <img src={SquareL} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://retool.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
                  <img src={Retool} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://dolby.io/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
                  <img src={Dolby} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://warp.dev/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={Warp} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full'>
              <a href="https://binance.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
                  <img src={Bnb} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://sequoiacap.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-16 relative'>
                  <img src={Sequoia} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://pear.vc/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Pear} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://ycombinator.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={YCombinator} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full'>
              <a href="https://neo.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-16 relative'>
                  <img src={Neo} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://parrot.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-16 relative'>
                  <img src={Parrot} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://brave.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Brave} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://generaltask.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={GeneralTask} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full'>
              <a href="http://www.cotopaxi.com" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={Cotopaxi} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://ethicsinsociety.stanford.edu/undergraduate-offerings-overview" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-6 relative'>
                  <img src={EIS} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://roughdraft.vc" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={RDV} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://modal.com" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-8 relative'>
                  <img src={Modal} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full'>
              <a href="https://checkbook.io" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
                  <img src={Checkbook} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <h1 className='font-semibold lg:text-2xl text-xl text-center mt-16 mb-6 font-CerealBD'>Special donations from</h1>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-2/12 w-full lg:mr-4'>
              <a href="https://replit.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-4 relative'>
                  <img src={Replit} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-2/12 w-full lg:mr-4'>
              <a href="https://algolia.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-6 relative'>
                  <img src={Algolia} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-2/12 w-full lg:mr-4'>
              <a href="https://wolfram.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-6 relative'>
                  <img src={Wolfram} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-2/12 w-full lg:mr-4'>
              <a href="https://makerbot.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-2 relative'>
                  <img src={Makerbot} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-2/12 w-full lg:mr-4'>
              <a href="https://twilio.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-6 relative'>
                  <img src={Twilio} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-2/12 w-full lg:mr-4'>
              <a href="https://supabase.io/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-6 relative'>
                  <img src={Supabase} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <h1 className='font-semibold lg:text-2xl text-xl text-center mt-16 mb-6 font-CerealBD'>Technology Partners</h1>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-2/12 w-full'>
              <a href="https://aspecta.id/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-4 relative'>
                  <img src={Aspecta} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pb-20 flex flex-col relative overflow-hidden border-b" id="faqs">
        <div className="absolute top-96 -left-40 opacity-30 scale-150 -z-10">
          <CircleIntersection />
        </div>
        <div className='flex flex-row'>
          <div>
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD text-black bg-clip-text pb-2'>FAQs</h1>
          </div>
        </div>


        <div class="bg-white p-10 border">
          <h3 class="text-lg font-medium text-gray-800 font-CerealBD">Did we miss anything?</h3>
          <p class="text-sm font-light text-gray-600 my-3 font-CerealBK">
            Let us know! Send an email to <span className="underline">hello@treehacks.com</span>.
          </p>

          <div class="h-1 w-full mx-auto border-b my-5"></div>

          <div class="transition hover:bg-indigo-50 font-CerealBK">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>What is a Hackathon?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                A hackathon is where you turn your crazy ideas into real projects. We provide hardware, mentors, fun activities, speakers, workshops, food, friends, and so much more. You take care of hacking; we'll take care of you.
              </p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>Is TreeHacks 2024 going to be in-person or virtual?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                TreeHacks 2024 will be in-person.</p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>Who can come?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                TreeHacks applications are open to any enrolled college student (undergrad or grad) from all over the world. All current Stanford students that register by appropriate deadlines will be guaranteed admission.</p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>What if I don't know how to code?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                TreeHacks is the perfect time and place to learn. We provide starter code <a href="https://github.com/TreeHacks" target="_blank" className="underline">“hack packs”</a> on our github as well as beginner-friendly workshops and mentors to help you build something you can be proud of.</p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>What if I don't have a team or idea?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                Not a problem! We're currently working on a platform to help you find teammates and other hackers once you've confirmed your spot at the hackathon. We'll also have a ton of team-forming activities to help you find teammates and idea brainstorming sessions for all our tracks. Some of our best hacks have been from teams that met and formed an idea on the spot!
              </p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>What can I build?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                Anything your heart desires! Hardware, web, mobile, gaming, VR...you name it, we'll support it. We have six tracks that will have extra resources, sponsored challenges, and other events to inspire you. Check out our <a href="https://treehacks-2023.devpost.com/" target="_blank" className="underline">Devpost</a> for examples of what participants built in the past!! </p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>What does it cost?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                TreeHacks is free for all admitted hackers! It's our pleasure to bring our virtual workshops, swag, and prizes to our hackers without any cost on your end. We're committed to making TreeHacks accessible!
              </p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">
  
              <h3>How do travel reimbursements work?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                We are completely overhauling the travel reimbursement process for the 2024 year to make it easier for hackers! More details coming soon.
              </p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>What is the TreeHacks code of conduct?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                TreeHacks abides by this <a href="https://github.com/TreeHacks/policies" target="_blank">Code of Conduct</a>, adapted from the Hack Code of Conduct. Every TreeHacks applicant must agree to this Code of Conduct to be considered for admission. TreeHacks is a safe place where everyone is welcome ❤️.
              </p>
            </div>
          </div>
        </div>

      </section>

      <div className="w-full py-10 flex flex-col relative overflow-hidden border-b">
        <h1 className='font-semibold text-md font-CerealBK text-slate-500 text-center'>Made with ❤️ by the TreeHacks team</h1>
      </div>
    </div >
  );
}

export default App;
