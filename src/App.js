import React, { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import Countdown from './Countdown';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Branch2 } from './assets/branch2.svg';
import { ReactComponent as Circle } from './assets/circle_pattern.svg';
import { ReactComponent as Triangle } from './assets/trianglepattern.svg';
import { ReactComponent as Square } from './assets/squares.svg';
import { ReactComponent as Accent } from './assets/accent.svg';
import { ReactComponent as Accent2 } from './assets/accent2.svg';
import { ReactComponent as CircleIntersection } from './assets/circleintersection.svg';
import statsImage from './assets/statsTree.png';
import hexagon from './assets/hexagon.png';

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
    "Healthcare": 0,
    "Sustainability": 1,
    "New_Frontiers": 2,
    "Web3": 3,
    "Education": 4,
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
    <div className="overflow-hidden scroll-smooth ">
      <div className="h-20 flex items-center lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 z-50 header w-full fixed" id="site-header">
        <div>
          <Logo />
        </div>
        <div className='overflow-x-scroll h-20 flex items-center'>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#home'>Home</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='#faqs'>FAQs</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-black lg:text-black md:text-black text-black' href='https://2023.treehacks.com/'>2023 Site</a>
        </div>
        <a className='apply-btn ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-white lg:text-white md:text-white text-black' href='https://root.treehacks.com/'>Apply</a>
      </div>
      <section class="xl:h-screen lg:h-screen flex w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex-col justify-center items-center xl:pt-24 pt-24" id="home">
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
            <h1 className='mb-3 xl:text-3xl lg:text-xl text-md xl:text-white lg:text-white md:text-white text-white font-CerealMd'> left to apply (by Dec 11th)</h1>
            <h4 className='mb-8 xl:text-white lg:text-white md:text-white text-white font-CerealMd'> Stanford students deadline- Dec 30th</h4>
            <a target="_blank" href="https://root.treehacks.com/" class="apply-button">
              <span>Apply to hack!</span>
            </a>
            <a target="_blank" href="YOUR_LINK_FOR_JUDGES_AND_MENTORS" class="secondary-button">
              <span>Judge/Mentor</span>
            </a>
            <a target="_blank" href="mailto:lmoberly@stanford.edu" class="secondary-button">
              <span>Sponsor</span>
            </a>
    
            <div className='flex flex-row p-8 pl-16'>
              <a href="https://medium.com/@hackwithtrees" target="_blank"><AiOutlineMedium className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://www.facebook.com/treehacks" target="_blank"><AiOutlineFacebook className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://twitter.com/hackwithtrees" target="_blank"><AiOutlineTwitter className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://www.instagram.com/stanfordtreehacks/?hl=en" target="_blank"><AiFillInstagram className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://github.com/TreeHacks" target="_blank"><AiFillGithub className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
            </div>
          </div>
        </div>

      </section>

      <section class="xl:h-screen lg:h-screen flex w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex-col justify-center items-center xl:pt-24 pt-10" id="stats">
          <h1 className='font-CerealXBd lg:text-5xl pb-10 text-3xl bg-clip-text text-black text-center'>with over...</h1>
          <div className="absolute -top-20 -left-40 opacity-30 scale-150 -z-10">
            <Circle />
          </div>
          
          <Accent className='absolute -right-20 top-60 accent_confetti' />
          <Accent2 className='absolute -left-20 top-60 accent_confetti' />
  
          <div className="flex">
              <div>
                <img src={hexagon} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
              </div>
              <div>
                <img src={hexagon} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
              </div>
          </div>
  
          <div className="flex">
            <div>
              <img src={hexagon} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
            <div>
              <img src={hexagon} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
            <div>
              <img src={hexagon} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
          </div>
  
        <div className="flex">
            <div>
              <img src={hexagon} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
            <div>
              <img src={hexagon} className="hexagon-img w-30 hover:-translate-y-1 hover:-translate-x-1" />
            </div>
        </div>
      </section>

      <section className="w-full lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 pt-20 pb-20 flex flex-col relative overflow-hidden border-b" id="faqs">
        <div className="absolute top-96 -left-40 opacity-30 scale-150 -z-10">
          <CircleIntersection />
        </div>
        <div className='flex flex-row'>
          <div>
            <h1 className='font-semibold lg:text-7xl text-3xl mb-8 font-CerealBD text-black'>FAQs</h1>
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
