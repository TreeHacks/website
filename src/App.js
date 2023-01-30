import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';

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


import mainImage from './assets/photos/Treehacks-129.webp';
import sideImage1 from './assets/photos/Treehacks-181.webp';
import sideImage2 from './assets/photos/Treehacks-347.webp';

import sajith from './assets/photos/sajith.webp';
import karpathy from './assets/photos/karpathy.webp';

import scroll1 from './assets/photos/scroll1.webp';
import scroll2 from './assets/photos/scroll2.webp';
import scroll3 from './assets/photos/scroll3.webp';
import scroll4 from './assets/photos/scroll4.webp';
import scroll5 from './assets/photos/scroll5.webp';
import scroll6 from './assets/photos/scroll6.webp';
import scroll7 from './assets/photos/scroll7.webp';

import backgroundVideo from './assets/videos/treehacksvideo.mp4';
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
import Cypherd from './assets/logos/cypherd.webp';
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

import { prizes } from './prizes';
import { workshops } from './workshops';

import { AiOutlineArrowRight, AiFillGithub, AiFillInstagram, AiOutlineFacebook, AiOutlineMedium, AiOutlineTwitter, AiFillStar } from "react-icons/ai";

function App() {
  const Tracks = {
    "Healthcare": 0,
    "Sustainability": 1,
    "New_Frontiers": 2,
    "Web3": 3,
    "Education": 4,
    "Privacy_and_Safety": 5
  }

  const [activePrize, setActivePrize] = useState(0);

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

      document.addEventListener('scroll', function () {

        // Get the scroll position
        let scrollPos = window.pageYOffset;

        if (scrollPos > 100) {
          header.style.backgroundColor = "white";
        } else {
          header.style.backgroundColor = "transparent";
        }
      });
    }
  }, []);

  // Countdown

  const calculateDuration = eventTime => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds');

  function Countdown({ eventTime, interval }) {
    const [duration, setDuration] = useState(calculateDuration(eventTime));
    const timerRef = useRef(0);
    const timerCallback = useCallback(() => {
      setDuration(calculateDuration(eventTime));
    }, [eventTime])

    useEffect(() => {
      timerRef.current = setInterval(timerCallback, interval);

      return () => {
        clearInterval(timerRef.current);
      }
    }, [eventTime]);

    return (
      <div>
        {duration.days()} Days, {duration.hours()} Hours, {duration.minutes()} Minutes
      </div>
    )
  }

  const QuickOption = ({ disabled, title, section, link, description }) => {
    return (
      <a disabled={disabled} href={section ? "#" + section : link} className={`border mb-4 py-4 px-6 ${disabled ? "" : "hover:bg-gray-100 cursor-pointer"} bg-white rounded-md w-full lg:h-32`}>
        <div className={`${disabled ? "opacity-40" : ""}`}>
          <h1 className='font-CerealXBd text-lg bg-gradient-to-r bg-clip-text text-transparent 
            from-emerald-500 via-emerald-500 to-indigo-500
            animate-text'>{title}</h1>
          <div className="relative flex flex-col justify-center">
            <p className="font-CerealLt pr-8 text-sm">
              {description}
            </p>
            <AiOutlineArrowRight className="absolute right-0 mb-5" size={20} color={"black"} />
          </div>
        </div>
      </a>
    )
  }

  return (
    <div className="overflow-hidden scroll-smooth ">
      <div className="h-20 flex items-center lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 z-50 header w-full fixed" id="site-header">
        <div>
          <Logo />
        </div>
        <div className='overflow-x-scroll h-20 flex items-center'>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#home'>Home</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#about'>About</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#challenges'>Tracks</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#speakers'>Speakers</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#prizes'>Prizes</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#projects'>Projects</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#sponsors'>Sponsors</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#faqs'>FAQs</a>
        </div>
      </div>
      <section class="bg-cover w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex flex-col justify-center items-center lg:pt-24 pt-32" id="home">
        <div className="absolute top-60 -left-32 opacity-20 scale-150 -z-10">
          <CircleIntersection />
        </div>
        <div className='flex flex-row items-center'>
          <div className="mr-6 z-10 lg:inline-block hidden">
            <h1 id="outlineBack" className='lg:text-9xl text-5xl text-opacity-0 leading-none'>2</h1>
            <h1 id="outlineBack" className='lg:text-9xl text-5xl text-opacity-0 leading-none'>0</h1>
            <h1 id="outlineBack" className='lg:text-9xl text-5xl text-opacity-0 leading-none'>2</h1>
            <h1 id="outlineBack" className='lg:text-9xl text-5xl text-opacity-0 leading-none'>3</h1>
          </div>
          <div className='lg:w-5/6 z-auto'>
            <div className="inline-block">
              <p className='font-semibold text-slate-900 mb-1 font-display lg:text-lg text-xs'>February 17th - 19th @ Stanford University</p>
              <div class="h-[2px] bg-gradient-to-r bg-black rounded-full mb-4"></div>
            </div>
            <h1 className='font-semibold lg:text-7xl text-4xl mb-4 font-CerealBD'><span className="bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-emerald-500 to-emerald-500 animate-text">TreeHacks</span> <span className="text-[#15766A]">is back.</span></h1>
            <h1 className='lg:text-3xl text-md text-slate-700 font-CerealMd'>We're in-person this year! Join 1,600+ hackers from across the world to build the next big thing.</h1>
            <div className="mt-8 mb-6">
              <span className="font-CerealMd text-gray-400">Questions? Contact us: <a className="underline" href="mailto:hello@treehacks.com">hello@treehacks.com</a></span>
            </div>
            <div className='flex flex-row'>
              <a href="https://medium.com/@hackwithtrees" target="_blank"><AiOutlineMedium className="mr-4 text-gray-400" size={30} /></a>
              <a href="https://www.facebook.com/treehacks" target="_blank"><AiOutlineFacebook className="mr-4 text-gray-400" size={30} /></a>
              <a href="https://twitter.com/hackwithtrees" target="_blank"><AiOutlineTwitter className="mr-4 text-gray-400" size={30} /></a>
              <a href="https://www.instagram.com/stanfordtreehacks/?hl=en" target="_blank"><AiFillInstagram className="mr-4 text-gray-400" size={30} /></a>
              <a href="https://github.com/TreeHacks" target="_blank"><AiFillGithub className="mr-4 text-gray-400" size={30} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:h-96 lg:mt-0 mt-20 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-4 pr-4 pb-4 flex flex-col relative justify-center items-center" id="about">
        <h1 className='font-CerealXBd lg:text-4xl text-2xl text-center mb-4 bg-gradient-to-r bg-clip-text text-transparent 
            from-emerald-500 via-emerald-500 to-indigo-500
            animate-text'>Excited? We are too!</h1>
        <a
          href="https://live.treehacks.com/"
          target="_blank"
          type="button"
          disabled
          className="font-CerealMd my-6 text-center flex-shrink-0 lg:max-w-[250px] inline-flex items-center justify-center px-6 py-1.5 border-transparent rounded-md shadow-sm text-black border-gray-200 border text-md font-medium bg-white hover:bg-gray-100 disabled:bg-emerald-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:flex-1"
        >
          <Accent className='absolute -right-10 -top-6' />
          <Accent2 className='absolute -left-10 -top-6' />
          Hackathon Calendar
        </a>
        <div className='z-10 w-full flex lg:flex-row flex-col'>
          <div className='flex flex-col lg:w-4/12 w-12/12 pl-2 pr-2'>
            <QuickOption disabled={false} title="Prizes" section="prizes" description="See what prizes will be at TreeHacks 2023! Check out our amazing sponsors and their APIs!" />
            <QuickOption disabled={false} title="Speakers" section="speakers" description="Check out the world class speakers coming to TreeHacks this year!" />
          </div>

          <div className='flex flex-col lg:w-4/12 w-12/12 pl-2 pr-2'>
            <QuickOption disabled={false} title="Devpost" link="https://treehacks-2023.devpost.com/" description="Check out our devpost! Our central hub for submitting projects and documenting your hackathon experience." />
            <QuickOption disabled={true} title="Problem Statements" section="" description="Want to start ideating? We've curated a list of problem statements from our sponsors and mentors!" />
          </div>

          <div className='flex flex-col lg:w-4/12 w-12/12 pl-2 pr-2'>
            <QuickOption disabled={false} title="API & Resources" link="https://live.treehacks.com/apisresources" description="We've created some awesome hackpacks and resources for you to boost your productivity! Check them out here!" />
            <QuickOption disabled={false} title="Sponsors" section="sponsors" description="We have some amazing companies helping make TreeHacks a reality this year." />
          </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pb-10 flex flex-col relative" id="about">
        <div className="absolute top-60 -left-32 opacity-20 scale-150 -z-10">
          <Triangle />
        </div>
        <div className="absolute -bottom-60 -left-32 opacity-20 scale-150 -z-10">
          <Square />
        </div>
        {/* <Branch2 className="lg:w-96 lg:h-80 w-52 h-40 absolute lg:-top-52 -top-16 opacity-30 -left-10 lg:opacity-100 lg:block hidden" /> */}
        <section className="w-full pt-20 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 lg:pb-32 pb-8 flex flex-col relative lg:items-center">
          <h1 className='font-CerealXBd lg:text-5xl text-3xl mb-6 bg-gradient-to-r bg-clip-text text-transparent
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>What's so special?</h1>
          <p className='font-CerealBK text-slate-500 mb-8 lg:text-center lg:text-lg text-md'>
            TreeHacks is one of the biggest hackathons in the <b>world</b>. This year, after being online for the past two due to COVID, we're going all out. <b>TreeHacks covers flights (<a className='text-indigo-500 underline' href="https://docs.google.com/spreadsheets/d/1sQxmLxbQO5ygrYlPqAbxQuV_i2aos_g_k9lnrzt0tBo/edit" target="_blank">regional caps</a>), food, and swag for all hackers.</b> Not to mention, we present some incredible prizes you can't find anywhere else. Get ready to hear from world-renowned guest speakers, work with incredible mentors, learn from deeply technical workshops, and participate in fun activities throughout the event!
          </p>
          <p className='font-CerealBK text-slate-500 text-center text-lg'>
            * Hackathon Begins in *
          </p>
          <div className="bg-white rounded-sm border shadow-sm flex flex-col justify-center align-middle items-center px-10 py-8 relative mt-4 mx-10 lg:mx-0">
            <Accent className='absolute -right-10 -top-6' />
            <Accent2 className='absolute -left-10 -top-6' />
            <p className='font-CerealMd text-black lg:text-2xl text-center'><Countdown eventTime={1676592000} interval={1000} /></p>
            <p className='font-CerealBK text-slate-500 text-center text-lg'>
              (February 17th)
            </p>
          </div>

        </section>
        <div className="flex lg:flex-row flex-col mb-28">
          <div className="flex flex-col lg:w-6/12 lg:pr-14 justify-center">
            <h1 className='font-CerealXBd text-4xl mb-4 bg-gradient-to-r bg-clip-text text-transparent 
            from-emerald-500 via-emerald-500 to-indigo-500
            animate-text'>What is TreeHacks?</h1>
            <p className='font-CerealBK text-slate-500 mb-8'>
              TreeHacks is Stanford University's premier hackathon and one of the largest hackathons in the nation. We bring together over 1,000 students to Stanford every February to build the future. Sure, you'll be hacking for 36 hours straight. But there will be yoga breaks. And laser tag. Lightsaber battles? Maybe even puppies. Whether you're a seasoned veteran or just getting started, we've got your back every step of the way.
            </p>
            <p className='font-CerealBK text-slate-500 mb-8'>
              *Stanford students are automatically accepted but need to RSVP
            </p>
          </div>
          <div className="flex flex-col lg:w-6/12">
            <video src={backgroundVideo} autoPlay muted loop className="rounded-md shadow-2xl brightness-75" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:mb-40 mb-10">
          <div className="flex flex-col lg:w-6/12 lg:pr-14 relative">
            <div>
              <img src={mainImage} className="w-full h-full rounded-lg brightness-75 shadow-2xl" />
              <div className="absolute h-40 w-40 overflow-hidden rounded-lg shadow-2xl lg:right-20 lg:-bottom-16 scale-50 lg:scale-100 -bottom-16 right-0">
                <img src={sideImage1} className="object-cover" />
              </div>
              <div className="absolute h-80 w-60 overflow-hidden rounded-lg shadow-2xl lg:-left-16 lg:-top-16 scale-50 lg:scale-100 -top-36 -left-20">
                <img src={sideImage2} className="object-cover" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-6/12 justify-center lg:pt-0 pt-16">
            <h1 className='font-CerealXBd lg:text-4xl text-3xl mb-4 bg-gradient-to-r bg-clip-text text-transparent 
            from-indigo-500 via-emerald-500 to-emerald-500
            animate-text'>The Hackathon</h1>
            <p className='font-CerealBK text-slate-500 mb-4'>
              With Silicon Valley right next door, TreeHacks attracts the world's most cutting edge startups and innovative companies. Looking for an amazing internship this summer? You might just find it here.
            </p>
            <p className='font-CerealBK text-slate-500'>
              If you've ever had an idea that you wanted to bring to life, TreeHacks is the place to do it. We've got mentors from companies like Google, Facebook, and Microsoft to help you along the way. And if you're looking to see if your project can be something more, we'll help you flesh out your idea and get you started on the right path.
            </p>
          </div>
        </div>

        <div className='border-2 border-black mb-10 z-20'>
          <div className='flex lg:flex-row flex-col border-b-2 border-black bg-white'>
            <div className='lg:w-1/3 lg:aspect-square lg:border-r-2 lg:border-b-0 border-b-2 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold lg:text-6xl text-4xl mb-4 font-CerealBD text-black group-hover:text-white'>1600+ Hackers</h1>
              <p className='lg:text-xl mb-4 font-CerealBK text-slate-700 group-hover:text-white'>Every February, 1,600+ students from across the nation come to Stanford for 36 hours of hacking.</p>
            </div>
            <div className='lg:w-1/3 lg:aspect-square lg:border-r-2 lg:border-b-0 border-b-2 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold lg:text-6xl text-4xl mb-4 font-CerealBD text-black group-hover:text-white'>$160,000 in Prizes</h1>
              <p className='lg:text-xl mb-4 font-CerealBK text-slate-700 group-hover:text-white'>This year we're going BIG. That means more prizes than we've ever had before. Whatever you're passionate about, we have something for you.</p>
            </div>
            <div className='lg:w-1/3 lg:aspect-square p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold lg:text-6xl text-4xl mb-4 font-CerealBD text-black group-hover:text-white'>36 Hours</h1>
              <p className='lg:text-xl mb-4 font-CerealBK text-slate-700 group-hover:text-white'>While the hackathon spans 36 hours, we have an amazing series of workshops leading up to TreeHacks and a project continuation program to help you keep your idea going after the hackathon ends.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col bg-white'>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>30+ Universities</h1>
            </div>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>12+ Countries</h1>
            </div>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>40+ Companies</h1>
            </div>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>300+ Projects</h1>
            </div>
            <div className='lg:w-1/5 p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>200+ Mentors</h1>
            </div>
          </div>
        </div>
      </section>

      <div class="horizontal-scrolling-banner lg:pt-20 lg:pb-20">
        <img src={scroll1} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll2} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll3} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll4} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll5} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll6} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250px] w-[250px] mr-12 shadow-2xl brightness-75" />
        <img src={scroll7} className="object-cover overflow-hidden rounded-lg lg:h-80 h-40 lg:min-w-[500px] lg:w-[500px] min-w-[250pxs] w-[250px] mr-12 shadow-2xl brightness-75" />
      </div>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 lg:pb-20 flex flex-col relative" id="challenges">
        <div className="absolute -top-20 -left-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div className='flex lg:flex-row flex-col'>
          <div className="lg:w-10/12">
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD bg-gradient-to-r bg-clip-text pb-2 text-transparent 
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>What are you going to build?</h1>
            <p className='text-slate-500 lg:text-xl mb-8 font-CerealBK'>
              TreeHacks is an incredible opportunity to build something you're passionate about. Every year we have a variety of tracks for you to choose from, but you can also create something completely new. We can't wait to see what you build!
            </p>
            <p className='text-slate-500 lg:text-xl mb-8 font-CerealBK'>
              Our goal at TreeHacks 2023 is to empower hackers to build anything they want. We want to see you work on something that you're passionate about, and we want to help you do it. We will have unparalleled resources such as world class mentors, onsite hardware, developer workshops, and cutting-edge industry tools provided free by our sponsors.
            </p>
            <p className='text-slate-500 lg:text-xl mb-8 font-CerealBK'>
              Below are the tracks for TreeHacks 2023:
            </p>
            <div className='flex lg:flex-row flex-col lg:mb-8 mb-4'>
              <div className='lg:w-4/12 lg:mr-6 mb-4 lg:mb-0'>
                <div className='border-black border p-10 h-full bg-white group hover:bg-black ease-in duration-300 cursor-pointer hover:-translate-y-1'>
                  <h1 className='font-semibold text-xl font-CerealBD text-black mb-4 group-hover:text-white'>Healthcare</h1>
                  <p className='text-black text-md font-CerealBK group-hover:text-white'>
                    Trillions of dollars are spent each year on healthcare, but the system is flawed. How can we improve healthcare at home and abroad?
                  </p>
                </div>
              </div>
              <div className='lg:w-4/12 lg:mr-6 mb-4 lg:mb-0'>
                <div className='border-black border p-10 h-full bg-white group hover:bg-black ease-in duration-300 cursor-pointer hover:-translate-y-1'>
                  <h1 className='font-semibold text-xl font-CerealBD text-black mb-4 group-hover:text-white'>Sustainability</h1>
                  <p className='text-black text-md font-CerealBK group-hover:text-white'>
                    Now more than ever, we need to focus on building a better future for our planet. How can we address climate change and live more sustainably?
                  </p>
                </div>
              </div>
              <div className='lg:w-4/12'>
                <div className='border-black border p-10 h-full bg-white group hover:bg-black ease-in duration-300 cursor-pointer hover:-translate-y-1'>
                  <h1 className='font-semibold text-xl font-CerealBD text-black mb-4 group-hover:text-white'>New Frontiers</h1>
                  <p className='text-black text-md font-CerealBK group-hover:text-white'>
                    AI/ML, AR/VR, Quantum Computing, and more. How can we innovate using new and emerging technologies?
                  </p>
                </div>
              </div>
            </div>
            <div className='flex lg:flex-row flex-col'>
              <div className='lg:w-4/12 lg:mr-6 mb-4 lg:mb-0'>
                <div className='border-black border p-10 h-full bg-white group hover:bg-black ease-in duration-300 cursor-pointer hover:-translate-y-1'>
                  <h1 className='font-semibold text-xl font-CerealBD text-black mb-4 group-hover:text-white'>Web 3.0 and Fintech</h1>
                  <p className='text-black text-md font-CerealBK group-hover:text-white'>
                    Blockchain, DeFi, and more. How can we build a better, more transparent financial system?
                  </p>
                </div>
              </div>
              <div className='lg:w-4/12 lg:mr-6 mb-4 lg:mb-0'>
                <div className='border-black border p-10 h-full bg-white group hover:bg-black ease-in duration-300 cursor-pointer hover:-translate-y-1'>
                  <h1 className='font-semibold text-xl font-CerealBD text-black mb-4 group-hover:text-white'>Education</h1>
                  <p className='text-black text-md font-CerealBK group-hover:text-white'>
                    How can we improve the education system and make learning more accessible?
                  </p>
                </div>
              </div>
              <div className='lg:w-4/12'>
                <div className='border-black border p-10 h-full bg-white group hover:bg-black ease-in duration-300 cursor-pointer hover:-translate-y-1'>
                  <h1 className='font-semibold text-xl font-CerealBD text-black mb-4 group-hover:text-white'>Privacy and Safety</h1>
                  <p className='text-black text-md font-CerealBK group-hover:text-white'>
                    Privacy and safety are more important than ever. How can we build a more secure Internet and better protect our personal data?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-2/12 lg:relative absolute lg:top-0 lg:right-0 -top-10 -z-20 right-10 opacity-30 lg:opacity-100'>
            <div className="inline-block mr-6 z-10 w-full justify-center">
              <h1 id="outlineBack" className='text-9xl text-opacity-0 leading-none text-center'>H</h1>
              <h1 id="outlineBack" className='text-9xl text-opacity-0 leading-none text-center'>A</h1>
              <h1 id="outlineBack" className='text-9xl text-opacity-0 leading-none text-center'>C</h1>
              <h1 id="outlineBack" className='text-9xl text-opacity-0 leading-none text-center'>K</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 lg:pb-20 flex flex-col relative" id="speakers">
        <div className="absolute -top-20 -left-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div className='flex flex-col'>
          <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD bg-gradient-to-r bg-clip-text pb-2 text-transparent 
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>Speakers</h1>
          <div className='flex lg:flex-row flex-col w-full bg-white rounded-lg'>
            <div className='lg:w-6/12 w-12/12 h-full p-8 flex flex-col justify-center items-center lg:border-r'>
              <div className="aspect-square lg:h-64 h-32 bg-white rounded-full flex justify-center items-center p-2 border-2">
                <img src={sajith} className="object-cover h-full w-full rounded-full" />
              </div>
              <h1 className='mt-8 font-CerealBD lg:text-3xl text-xl text-gray-600 text-center'>Sajith Wickramasekara</h1>
              <p className="font-CerealBK lg:text-md text-sm text-center mt-4">
                Sajith Wickramasekara is CEO and co-founder of <a className='text-indigo-500 underline' href="https://www.benchling.com/" target={"_blank"}>Benchling</a>, pioneer of the R&D Cloud that powers the biotechnology industry. Since co-founding Benchling in 2012, Sajith has guided the company through significant milestones and remarkable growth. Today, more than 200,000 scientists at over 1,000 companies and 7,500 research institutions globally have adopted Benchling’s R&D Cloud to make breakthrough discoveries and bring the next generation of medicines, food, and materials to market faster than ever before. Prior to Benchling, Sajith studied Computer Science at the Massachusetts Institute of Technology.
              </p>
            </div>
            <div className='lg:w-6/12 w-12/12 h-full p-8 flex flex-col justify-center items-center'>
              <div className="aspect-square lg:h-64 h-32 bg-white rounded-full flex justify-center items-center p-2 border-2">
                <img src={karpathy} className="object-cover h-full w-full rounded-full" />
              </div>
              <h1 className='mt-8 font-CerealBD lg:text-3xl text-xl text-gray-600 text-center'>Andrej Karpathy</h1>
              <p className="font-CerealBK lg:text-md text-sm text-center mt-4">
                Andrej Karpathy is a computer scientist and researcher in the field of artificial intelligence and deep learning. Previously, he was the Director of Artificial Intelligence at <a className='text-indigo-500 underline' href='https://www.tesla.com/' target={"_blank"}>Tesla</a>, where he led the computer vision team of Tesla Autopilot. Prior to joining Tesla, Karpathy was a founding member at <a className='text-indigo-500 underline' href='https://www.openai.com/' target={"_blank"}>OpenAI</a> and a research scientist at the Stanford AI Lab where he focused on convolutional/recurrent neural networks and their applications in computer vision, natural language processing and their intersection. Karpathy is known for his research on deep learning and computer vision, as well as for his popular <a href='http://karpathy.github.io/' className='text-indigo-500 underline' target={"_blank"}>blog</a> on the topic.
              </p>
            </div>
          </div>

          <div className='flex lg:mt-6 lg:flex-row flex-col bg-white rounded-lg basis-0 justify-center'>
            <div className='lg:w-3/12 w-12/12 h-full p-8 flex flex-col justify-center items-center lg:border-r'>
              <div className="aspect-square h-32 bg-white rounded-full flex justify-center items-center p-2 border-2">
                <img src={"https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/g3zan4eijixt8a0vqwfw"} className="object-cover h-full w-full rounded-full" />
              </div>
              <h1 className='mt-8 font-CerealBD text-xl text-gray-600'>Ali Partovi</h1>
              <p className="font-CerealBK text-sm text-center mt-4">
                CEO of Neo.
              </p>
            </div>
            <div className='lg:w-3/12 w-12/12 h-full p-8 flex flex-col justify-center items-center'>
              <div className="aspect-square h-32 bg-white rounded-full flex justify-center items-center p-2 border-2">
                <img src={"https://avatars.githubusercontent.com/u/3744018?v=4"} className="object-cover h-full w-full rounded-full" />
              </div>
              <h1 className='mt-8 font-CerealBD text-xl text-gray-600'>Veeral Patel</h1>
              <p className="font-CerealBK text-center text-sm mt-4">
                Founding Engineer at Ramp
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 lg:pb-20 flex flex-col relative" id="prizes">
        <div className="absolute -top-20 -left-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div className='flex lg:flex-row flex-col'>
          <div className="lg:w-12/12">
            <h1 className='font-semibold lg:text-7xl text-3xl mb-4 font-CerealBD bg-gradient-to-r bg-clip-text pb-2 text-transparent 
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>Prizes</h1>
            <div className='bg-white border rounded-md mt-4 flex lg:flex-row flex-col lg:flex-wrap'>
              {prizes.map(prizeData => (
                <div className='lg:w-4/12 aspect-square relative border'>
                  <div className='absolute cursor-pointer p-8 z-20 bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-md font-CerealBK mb-2'>
                      {prizeData.Description}
                    </p>
                  </div>
                  <a className='absolute z-10 top-4 right-4' href={prizeData['Company Link']} target="_blank">
                    <div className='p-6 shadow-2xl rounded-lg bg-white flex justify-center items-center flex-col'>
                      <img src={prizeData['Image Link']} className="object-contain h-6" />
                    </div>
                  </a>
                  <img src={prizeData['Prize Image']} className="object-cover h-full w-full" />
                  <div className='p-4 z-10 bottom-0 w-full absolute flex justify-center items-center flex-col'>
                    <p className='text-xs shadow-2xl w-full p-4 rounded-md cursor-pointer text-white font-CerealBD
                    bg-gradient-to-r
                    from-indigo-500
                    via-rose-500
                    to-emerald-500
                    background-animate'>
                      <span className='flex flex-row items-center justify-center mb-2 border-b pb-2'>
                        <AiFillStar className="mr-2 text-yellow-400" size={15} />
                        <h1 className="font-CerealBD text-center text-sm text-white">{prizeData['Prize Name']}</h1>
                        <AiFillStar className="ml-2 text-yellow-400" size={15} />
                      </span>
                      {typeof prizeData['Prize Contents'] == "string" ? (
                        <>
                          <>{"- "}{prizeData['Prize Count'] && (`${prizeData['Prize Count']} x `)}{prizeData['Prize Contents']}</>
                        </>
                      ) : (
                        <>
                          {prizeData['Prize Contents'].map(item => (
                            <>{"- "}{prizeData['Prize Count'] && (`${prizeData['Prize Count']} x `)}{item}<br /></>
                          ))}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 lg:pb-20 flex flex-col relative " id="projects">
        <div className="absolute -top-20 -right-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div className='flex flex-row'>
          <div>
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD bg-gradient-to-r bg-clip-text pb-2 text-transparent 
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>Past Projects</h1>
            <p className='text-slate-500 lg:text-xl mb-8 font-CerealBK'>
              Here are some of the amazing things hackers have built in past years!
            </p>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col lg:mb-12 mb-4'>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <CatiatorSVG className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Catiator</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Moonshot Winner 2021</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Nancy, Olivia, Mitchell, and Ryan created an educational VR game that lets players battle gladiator cats by learning and practicing American Sign Language. This team won our Moonshot Prize at TreeHacks 2021.</p>
                  <a href='https://devpost.com/software/catiator' target="_blank" className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <ComputerTopSVG className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Computertop Desk</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black text-center'>Best Hardware Hack 2018</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Omar combined a webcam and projector mounted above a desk, along with a splash of OpenCV to locate all the pieces of paper and the keyboard, allowing users to set any piece of paper as a window for the computer. Omar won Most Creative Hack and Best Hardware Hack at TreeHacks 2018.</p>
                  <a href='https://devpost.com/software/computertop-desk' target="_blank" className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <NeuralHashSVG className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>NeuralHash</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black text-center'>Security Grand Prize 2018</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Isaac, Nikhil, Evani, and Rohan used machine learning to develop a decoder model that acts as a cryptographically-secure, transformation-invariant hash function to identify image ownership. This team won the Security Grand Prize and Most Technically Complex Hack at TreeHacks 2018.</p>
                  <a href='https://devpost.com/software/neuralhash' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <PowerHouseSVG className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>#PowerHouse</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>First Time Hackers</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Nadya, Lucy, and Diane learned React Native and honed their UI skills while developing an app that informs users about the energy saving costs of various appliances and helps a user select all desired appliances for a home. TreeHacks 2018 was their first hackathon.</p>
                  <a href='https://devpost.com/software/energy-awareness-app' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col'>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <DocodialSVG className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Docodial</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black text-center'>Best UI and Live Video App 2018</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Jenny and Aidan developed a live-streaming web app that allows doctors to communicate with interpreters, empowering non-native speakers to get the health coverage they need. They won Best User Interface and Best Live Video App at TreeHacks 2018.</p>
                  <a href='https://devpost.com/software/docodial' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <MarvelSCG className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black text-center'>Marvel Medical Dictionary</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black text-center'>Best Mobile AR Hack 2018</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Jomo, Kaleb, Ryan, and Khalid built a mobile, augmented reality experience that allows children to learn about health topics from a superhero related to the searched topic. Imagine Spider-Man teaching about spider bites! They won Best Mobile AR Hack at TreeHacks 2018.</p>
                  <a href='https://devpost.com/software/marvel-medical-dictionary' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12 lg:mr-8 mb-4 lg:mb-0'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <AEye className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>AEye</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black text-center'>Best Public Health Hack 2019</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Vamshi, Dhanush, AJ and Aria built a mobile app that lets you take a picture of a patch of skin and analyzes it for potential skin diseases. Their model was trained on hundreds of models from the ISIC public skin database, and upon identification sends the result to a doctor for verification. They won Best Public Health Hack at TreeHacks 2019.</p>
                  <a href='https://devpost.com/software/aeye-p4rkim' className='text-black text-md font-CerealBK underline'>Check it out here</a>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-3/12'>
            <div className="w-full h-96 card">
              <div class="card__content">
                <div class="card__front bg-white flex flex-col justify-end align-middle items-center p-10 border-black border">
                  <LucidSVG className="w-36" />
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Lucid Drums</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black text-center'>Most Creative Hack 2019</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Lillian, Kevin, Laura, and Juhi built an interactive VR Oculus Quest game to improve coordination through rhythm for those suffering from motor impairment. They won the Most Creative Hack prize at TreeHacks 2020.</p>
                </div>
              </div>
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
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD bg-gradient-to-r bg-clip-text pb-2 text-transparent 
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>Sponsors</h1>
          </div>
        </div>
        <div className="w-full">
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4'>
            <div className='lg:w-12/12 w-full lg:mb-0'>
              <a href="https://en.valuenex.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-48 p-10 relative'>
                  <img src={Otsuka} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-md font-CerealBK mb-2'>
                      Otsuka Holdings and Valuenex created an innovation lab in Palo Alto to create long-lasting new products/services for better health worldwide with global talents.
                    </p>
                    <ul>
                      <li className='text-md font-CerealBK ml-4 mb-2'>
                        • Otsuka Holdings: Otsuka Holdings is a healthcare company in the pharmaceutical and nutraceutical business and the parent company of Crystal Geyser Water company, Pharmavite; a dietary supplements company (known for NatureMade), Daiya; a plant-based cheese company, and many others.
                      </li>
                      <li className='text-md font-CerealBK ml-4'>
                        • Valuenex: VALUENEX is a predictive analytics company that specializes in analyzing and visualizing large amounts of text data to help businesses create insights and innovate. They support clients across a wide range of industries and business functions and currently work with over 45% of Japanese Fortune 500 companies.                    </li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4'>
            <div className='lg:w-12/12 w-full lg:mb-0'>
              <a href="https://estuary.tech/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-48 p-10 relative'>
                  <img src={Estuary} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-md font-CerealBK mb-2'>
                      Estuary is the easiest way to upload public data to Filecoin, the largest decentralized storage network (DSN) in the world. A DSN allows for worldwide access to your data, a free market for storage and autonomy over your data which does not exist in the centralized storage model of today’s corporations. Using Filecoin, Estuary provides unlimited, free storage in aims of preserving the world’s most important information, like AI training sets, climate data, political records, genetics or medical research and more. Estuary is open source and has many developer tools and APIs. Come by our booth to learn more!                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-12/12 w-full lg:mr-0'>
              <a href="https://mem.ai/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-8 relative'>
                  <img src={Mem} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4'>
            <div className='lg:w-6/12 w-full lg:mr-4'>
              <a href="https://convex.dev/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Convex} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-sm font-CerealBK'>
                      Convex is the stateful application platform that combines a powerful custom database with an integrated execution environment. Easily build fast, scalable, dynamic web and mobile applications without backend engineering or DevOps. Simple to get started, but deeply powerful over time, Convex has established an entirely new way to build applications that’s intuitive and productive for engineering teams of two to 200.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className='lg:w-6/12 w-full'>
              <a href="https://intersystems.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
                  <img src={InterSystems} className="object-contain" />
                  <div className='absolute p-8 rounded-md bg-white top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 transition duration-300 overflow-scroll'>
                    <p className='text-sm font-CerealBK mb-2'>
                      We Are the Engine Behind the World’s Most Important Applications. InterSystems technology is used to:
                    </p>
                    <ul>
                      <li className='text-sm font-CerealBK ml-4 mb-2'>
                        • Manage more than 1 billion health records worldwide
                      </li>
                      <li className='text-sm font-CerealBK ml-4 mb-2'>
                        • Map over 1 billion stars in the Milky Way with the European Space Agency
                      </li>
                      <li className='text-sm font-CerealBK ml-4 mb-2'>
                        • Process more than 300,000 transactions per day for the 2nd largest shipping company in the world
                      </li>
                      <li className='text-sm font-CerealBK ml-4 mb-2'>
                        • Modernize all 20 institutions in the U.S. News & World Report 2020 Honor Roll of Best Hospitals
                      </li>
                      <li className='text-sm font-CerealBK ml-4'>
                        • Process the world’s stock transactions at 11 of the top 20 global banks
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* New Row */}
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-6/12 w-full'>
              <a href="https://palantir.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Palantir} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
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
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
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
            <div className='lg:w-4/12 w-full'>
              <a href="https://human.capital/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-16 relative'>
                  <img src={HumanCapital} className="object-contain" />
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
              <a href="https://checkbook.io/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-12 relative'>
                  <img src={Checkbook} className="object-contain" />
                </div>
              </a>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-4'>
              <a href="https://parrot.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-16 relative'>
                  <img src={Parrot} className="object-contain" />
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
              <a href="https://pear.vc/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-14 relative'>
                  <img src={Pear} className="object-contain" />
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
            <div className='lg:w-3/12 w-full'>
              <a href="https://generaltask.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-40 p-10 relative'>
                  <img src={GeneralTask} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
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
          <div className='flex lg:flex-row flex-col mb-4 justify-center'>
            <div className='lg:w-2/12 w-full'>
              <a href="https://voiceflow.com/" target="_blank">
                <div className='w-full flex justify-center border-2 rounded-md bg-white h-20 p-6 relative'>
                  <img src={Voiceflow} className="object-contain" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 pb-20 flex flex-col relative overflow-hidden border-b" id="faqs">
        <div className="absolute top-96 -left-40 opacity-30 scale-150 -z-10">
          <CircleIntersection />
        </div>
        <div className='flex flex-row'>
          <div>
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD bg-gradient-to-r bg-clip-text pb-2 text-transparent 
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>FAQs</h1>
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

              <h3>Is TreeHacks 2023 going to be in-person or virtual?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                TreeHacks 2023 will be in-person.</p>
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
                TreeHacks is the perfect time and place to learn. We provide starter code “hack packs,” as well as beginner-friendly workshops and mentors to help you build something you can be proud of.</p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>What if I don't have a team or idea?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                Not a problem! We'll have team-forming activities to help you find teammates and idea brainstorming sessions for all our tracks. Some of our best hacks have been from teams that met and formed an idea on the spot!
              </p>
            </div>
          </div>

          <div class="transition hover:bg-indigo-50">
            <div class="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16">

              <h3>What can I build?</h3>
            </div>
            <div class="accordion-content px-5 pt-0 overflow-hidden max-h-0">
              <p class="leading-6 font-light pl-9 text-justify pb-8">
                Anything your heart desires! Hardware, web, mobile, gaming, VR...you name it, we'll support it. We have six tracks that will have extra resources, sponsored challenges, and other events to inspire you.</p>
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
      <div className="w-full py-10 flex flex-col relative overflow-hidden border-b bg-white">
        <h1 className='font-semibold text-md font-CerealBK text-slate-500 text-center'>Made with ❤️ by the TreeHacks 2023 team</h1>
      </div>
    </div >
  );
}

export default App;
