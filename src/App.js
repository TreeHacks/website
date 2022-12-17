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

import mainImage from './assets/photos/Treehacks-129.jpeg';
import sideImage1 from './assets/photos/Treehacks-181.jpeg';
import sideImage2 from './assets/photos/Treehacks-347.jpeg';

import scroll1 from './assets/photos/scroll1.jpeg';
import scroll2 from './assets/photos/scroll2.jpeg';
import scroll3 from './assets/photos/scroll3.jpeg';
import scroll4 from './assets/photos/scroll4.jpeg';
import scroll5 from './assets/photos/scroll5.jpeg';
import scroll6 from './assets/photos/scroll6.jpeg';
import scroll7 from './assets/photos/scroll7.jpeg';

import Lottie from 'react-lottie';
import * as animationData from './assets/animations/tree.json';
import backgroundVideo from './assets/videos/treehacksvideo.mp4';
import './App.css';

import protocol_labs_logo from './assets/logos/protocol_labs_logo.png';
import Otsuka_Holdings_logo from './assets/logos/Otsuka_Holdings_logo.png';
import convex_logo from './assets/logos/convex_logo.png';
import intersystems_logo from './assets/logos/InterSystems_logo.png';
import cadence_logo from './assets/logos/cadence_logo.png';
import citadel_securities from './assets/logos/citadel_securities.png';
import dolby_io_logo from './assets/logos/dolby_io_logo.jpg';
import meta_logo from './assets/logos/meta_logo.png';
import neo_logo from './assets/logos/neo_logo.png';
import pear_logo from './assets/logos/Pear_VC_logo.png';
import warp_logo from './assets/logos/warp_logo.png';
import ycombinator_logo from './assets/logos/ycombinator_logo.png';
import you_logo from './assets/logos/You.com_Logo.png';

import { RxDiscordLogo } from "react-icons/rx";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineFacebook, AiOutlineMedium, AiOutlineTwitter } from "react-icons/ai";

function App() {
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

  return (
    <div className="overflow-hidden scroll-smooth ">
      <div className="h-20 flex items-center lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 z-40 header w-full fixed" id="site-header">
        <div>
          <Logo />
        </div>
        <div className='overflow-x-scroll h-20 flex items-center'>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#home'>Home</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#apply'>Apply</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#about'>About</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#challenges'>Tracks</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#projects'>Projects</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#sponsors'>Sponsors</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black' href='#faqs'>FAQs</a>
          <a className='ml-8 font-semibold font-display cursor-pointer text-gray-500'>Speakers</a>
        </div>
      </div>
      <section class="bg-[url('./assets/background_1.svg')] bg-cover w-screen lg:h-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex items-center pt-32 lg:pt-0" id="home">
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
            <h1 className='lg:text-3xl text-md text-slate-700 font-CerealMd'>We're in-person this year! Join more than 1,000 hackers from across the world to build the next big thing. Applications close soon.</h1>

            <div className='mt-6 flex flex-row'>
              <a
                href="https://root.treehacks.com"
                target="_blank"
                type="button"
                className="font-CerealMd mr-2 flex-shrink-0 lg:max-w-[140px] inline-flex items-center justify-center px-6 py-1.5 border-transparent rounded-md shadow-sm text-white text-md font-medium bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:flex-1
                bg-gradient-to-r
                from-indigo-500
                via-emerald-500
                to-emerald-500
                background-animate"
              >
                Apply Now
              </a>
              <a
                href="https://discord.gg/aGysN4x2"
                target="_blank"
                type="button"
                className="font-CerealMd flex-shrink-0 lg:max-w-[200px] inline-flex items-center justify-center px-6 py-1.5 border-transparent rounded-md shadow-sm text-white text-md font-medium bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:flex-1
                bg-gradient-to-r
                from-indigo-500
                via-emerald-500
                to-indigo-500
                background-animate"
              >
                <RxDiscordLogo className="mr-2" size={20} color={"white"} />
                Join our Discord
              </a>
            </div>

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
      </section >

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pb-10 flex flex-col relative" id="about">
        <div className="absolute top-60 -left-32 opacity-20 scale-150 -z-10">
          <Triangle />
        </div>
        <div className="absolute -bottom-60 -left-32 opacity-20 scale-150 -z-10">
          <Square />
        </div>
        <Branch2 className="lg:w-96 lg:h-80 w-52 h-40 absolute lg:-top-52 -top-16 opacity-30 -left-10 lg:opacity-100 lg:block hidden" />
        <section className="w-full pt-20 lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 lg:pb-32 pb-8 flex flex-col relative lg:items-center" id="apply">
          <h1 className='font-CerealXBd lg:text-5xl text-3xl mb-6 bg-gradient-to-r bg-clip-text text-transparent
            from-emerald-500 via-indigo-500 to-emerald-500
            animate-text'>What's so special?</h1>
          <p className='font-CerealBK text-slate-500 mb-8 lg:text-center lg:text-lg text-md'>
            TreeHacks is one of the biggest hackathons in the <b>world</b>. This year, after being online for the past two due to COVID, we're going all out. <b>TreeHacks covers flights, food, and swag for all hackers.</b> Not to mention, we present some incredible prizes you can't find anywhere else. Get ready to hear from world-renowned guest speakers, work with incredible mentors, learn from deeply technical workshops, and participate in fun activities throughout the event!
          </p>
          <p className='font-CerealBK text-slate-500 text-center text-lg'>
            * Applications close in *
          </p>
          <div className="bg-white rounded-sm border shadow-sm flex flex-col justify-center align-middle items-center px-10 py-8 relative mt-4 mx-10 lg:mx-0">
            <Accent className='absolute -right-10 -top-6' />
            <Accent2 className='absolute -left-10 -top-6' />
            <p className='font-CerealMd text-black lg:text-2xl text-center'><Countdown eventTime={1672732799} interval={1000} /></p>
            <p className='font-CerealBK text-slate-500 text-center text-lg'>
              (Non-Stanford - Jan 2nd)
            </p>
            <br />
            <p className='font-CerealMd text-black lg:text-2xl text-center'><Countdown eventTime={1673683199} interval={1000} /></p>
            <p className='font-CerealBK text-slate-500 text-center text-lg'>
              (Stanford - Jan 13th)
            </p>
          </div>
          <a
            href="https://root.treehacks.com"
            target="_blank"
            type="button"
            className="font-CerealMd mb-6 flex-shrink-0 lg:max-w-[300px] inline-flex items-center justify-center px-6 py-1.5 border-transparent rounded-md shadow-sm text-white text-md mt-8 font-medium bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:flex-1
            bg-gradient-to-r
              from-indigo-500
              via-emerald-500
              to-emerald-500
              background-animate"
          >
            Apply Now
          </a>

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
              <h1 className='font-semibold lg:text-6xl text-4xl mb-4 font-CerealBD text-black group-hover:text-white'>1000+ Hackers</h1>
              <p className='lg:text-xl mb-4 font-CerealBK text-slate-700 group-hover:text-white'>Every February, 1,000+ students from across the nation come to Stanford for 36 hours of hacking. Spots are limited. <span className="underline text-orange-400">Apply now →</span></p>
            </div>
            <div className='lg:w-1/3 lg:aspect-square lg:border-r-2 lg:border-b-0 border-b-2 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold lg:text-6xl text-4xl mb-4 font-CerealBD text-black group-hover:text-white'>$250,000 in Prizes</h1>
              <p className='lg:text-xl mb-4 font-CerealBK text-slate-700 group-hover:text-white'>This year we're going BIG. That means more prizes than we've ever had before. Whatever you're passionate about, we have something for you.</p>
            </div>
            <div className='lg:w-1/3 lg:aspect-square p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold lg:text-6xl text-4xl mb-4 font-CerealBD text-black group-hover:text-white'>36 Hours</h1>
              <p className='lg:text-xl mb-4 font-CerealBK text-slate-700 group-hover:text-white'>While the hackathon spans 36 hours, we have an amazing series of workshops leading up to TreeHacks and a project continuation program to help you keep your idea going after the hackathon ends.</p>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col bg-white'>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>50+ Universities</h1>
            </div>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>20+ Countries</h1>
            </div>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>60+ Companies</h1>
            </div>
            <div className='lg:w-1/5 lg:border-r-2 border-b-2 lg:border-b-0 border-black p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>200+ Projects</h1>
            </div>
            <div className='lg:w-1/5 p-10 group hover:bg-black ease-in duration-300 cursor-pointer'>
              <h1 className='font-semibold text-3xl mb-4 font-CerealBD text-black group-hover:text-white'>100+ Mentors</h1>
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Catiator</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Moonshot winner 2021</h1>
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Computertop Desk</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Best Hardware Hack 2018</h1>
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>NeuralHash</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Security Grand Prize 2018</h1>
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Docodial</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Best UI and Live Video App 2018</h1>
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Marvel Medical Dictionary</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Best Mobile AR Hack 2018</h1>
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>AEye</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Best Public Health Hack 2019</h1>
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
                <div class="card__front bg-white flex flex-col justify-end p-10 border-black border">
                  <h1 className='font-semibold text-xl font-CerealBD text-black'>Lucid Drums</h1>
                  <h1 className='font-semibold text-lg font-CerealBK text-black'>Most Creative Hack 2019</h1>
                </div>
                <div class="card__back bg-white flex flex-col justify-end p-10 border-black border">
                  <p className='text-black text-md mb-8 font-CerealBK overflow-scroll h-full'>Lillian, Kevin, Laura, and Juhi built an interactive VR Oculus Quest game to improve coordination through rhythm for those suffering from motor impairment. They won the Most Creative Hack prize at TreeHacks 2020.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="w-full pl-40 pr-40 pt-20 pb-20 flex flex-col border-b overflow-hidden relative">
        <div className="absolute -top-20 -left-40 opacity-30 scale-150 -z-10">
          <Circle />
        </div>
        <div className='flex flex-row'>
          <div>
            <h1 className='font-semibold text-7xl mb-8 font-CerealBD text-black'>Speakers</h1>
          </div>
        </div>
      </div> */}

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
          <div className='flex lg:flex-row flex-col lg:mb-8 mb-0'>
            <div className='lg:w-6/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-40'>
                <img src={protocol_labs_logo} />
              </div>
            </div>
            <div className='lg:w-6/12 w-full mb-4 lg:mb-0'>
              <div className='w-full flex justify-center p-8 shadow-2xl rounded-md bg-white h-40'>
                <img src={Otsuka_Holdings_logo} />
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:mb-8 mb-0'>
            <div className='lg:w-4/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-40 py-8'>
                <img src={convex_logo} className="rounded-md" />
              </div>
            </div>
            <div className='lg:w-4/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center p-10 shadow-2xl rounded-md bg-white h-40'>
                <img src={intersystems_logo} />
              </div>
            </div>
            <div className='lg:w-4/12 w-full mb-4 lg:mb-0'>
              <div className='w-full flex justify-center p-8 shadow-2xl rounded-md bg-white h-40'>
                <img src={citadel_securities} />
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:mb-8 mb-0'>
            <div className='lg:w-4/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-40 p-16'>
                <img src={you_logo} />
              </div>
            </div>
            <div className='lg:w-4/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center p-8 shadow-2xl rounded-md bg-white h-40'>
                <img src={dolby_io_logo} />
              </div>
            </div>
            <div className='lg:w-4/12 w-full mb-4 lg:mb-0'>
              <div className='w-full flex justify-center p-16 shadow-2xl rounded-md bg-white h-40'>
                <img src={cadence_logo} />
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:mb-8 mb-0 justify-center'>
            <div className='lg:w-4/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-40 p-8'>
                <img src={warp_logo} />
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:mb-8 mb-0'>
            <div className='lg:w-3/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-20 p-6'>
                <img src={meta_logo} />
              </div>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-20 p-6'>
                <img src={neo_logo} />
              </div>
            </div>
            <div className='lg:w-3/12 w-full lg:mr-10 mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-20 p-6'>
                <img src={ycombinator_logo} />
              </div>
            </div>
            <div className='lg:w-3/12 w-full mb-4 lg:mb-0'>
              <div className='w-full flex justify-center shadow-2xl rounded-md bg-white h-20 p-6'>
                <img src={pear_logo} />
              </div>
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
