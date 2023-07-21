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


import mainImage from './assets/photos/Treehacks-129.webp';
import sideImage1 from './assets/photos/Treehacks-181.webp';
import sideImage2 from './assets/photos/Treehacks-347.webp';


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
            links[i].style.color = "white";
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
            <p className="font-CerealMd text-sm lg:text-white text-gray-500">
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
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-white lg:text-white md:text-white text-black' href='#home'>Home</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-white lg:text-white md:text-white text-black' href='#faqs'>FAQs</a>
          <a className='ml-8 font-semibold font-display cursor-pointer link link-underline link-underline-black xl:text-white lg:text-white md:text-white text-black' href='https://www.2023.treehacks.com/'>2023 Site</a>
        </div>
      </div>
      <section class="xl:h-screen lg:h-screen flex w-screen lg:pl-40 lg:pr-40 md:pl-20 md:pr-20 pl-10 pr-10 flex-col justify-center items-center xl:pt-24 pt-24" id="home">
        <video src={introVideo} autoPlay muted loop className="brightness-[0.4] xl:w-screen xl:h-screen lg:w-screen lg:h-screen md:w-screen h-full object-cover xl:visible lg:visible md:visible visible w-12/12 absolute top-0" />
        <div className="absolute top-60 -left-32 opacity-20 scale-150 -z-10">
          <CircleIntersection />
        </div>
        <div className='flex flex-row items-center'>
          <div className="xl:mr-14 lg:mr-14 md:mr-10 mr-0 invisible lg:visible xl:visible md:visible z-10">
            <h1 className='xl:text-8xl lg:text-8xl md:text-6xl leading-none bg-gradient-to-r bg-clip-text text-transparent from-indigo-200 via-emerald-200 to-emerald-200 animate-text'>2</h1>
            <h1 className='xl:text-8xl lg:text-8xl md:text-6xl leading-none bg-gradient-to-r bg-clip-text text-transparent from-indigo-200 via-emerald-200 to-emerald-200 animate-text'>0</h1>
            <h1 className='xl:text-8xl lg:text-8xl md:text-6xl leading-none bg-gradient-to-r bg-clip-text text-transparent from-indigo-200 via-emerald-200 to-emerald-200 animate-text'>2</h1>
            <h1 className='xl:text-8xl lg:text-8xl md:text-6xl leading-none bg-gradient-to-r bg-clip-text text-transparent from-indigo-200 via-emerald-200 to-emerald-200 animate-text'>4</h1>
          </div>
          <div className='lg:w-5/6 z-auto'>
            <div className="inline-block">
              <p className='font-semibold xl:text-white lg:text-white md:text-white text-white mb-1 font-display xl:text-lg lg:text-md text-xs'>February 2024 @ Stanford University</p>
              <div class="h-[2px] bg-gradient-to-r xl:bg-white lg:bg-white md:bg-white bg-white rounded-full mb-4"></div>
            </div>
            <h1 className='font-semibold xl:text-7xl lg:text-6xl text-4xl mb-4 font-CerealBD'><span className="bg-gradient-to-r bg-clip-text text-transparent from-indigo-400 via-emerald-400 to-emerald-400 animate-text">TreeHacks turns 10!</span></h1>
            <h1 className='xl:text-3xl lg:text-xl text-md xl:text-white lg:text-white md:text-white text-white font-CerealMd'>Stanford's premier hackathon is back! Join us for our 10th anniversary with 1,600+ hackers from across the globe</h1>
            <div className="xl:mt-8 lg:mt-8 md:mt-8 mt-4 mb-6">
              <span className="font-CerealMd xl:text-lg md:text-lg text-sm lg:text-lg xl:text-gray-200 lg:text-gray-200 md:text-gray-200 text-gray-200">Questions? Contact us: <a className="underline" href="mailto:hello@treehacks.com">hello@treehacks.com</a></span>
            </div>
            <div className='flex flex-row'>
              <a href="https://medium.com/@hackwithtrees" target="_blank"><AiOutlineMedium className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://www.facebook.com/treehacks" target="_blank"><AiOutlineFacebook className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://twitter.com/hackwithtrees" target="_blank"><AiOutlineTwitter className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://www.instagram.com/stanfordtreehacks/?hl=en" target="_blank"><AiFillInstagram className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
              <a href="https://github.com/TreeHacks" target="_blank"><AiFillGithub className="mr-4 text-gray-200 xl:text-gray-200 lg:text-gray-200 md:text-gray-200" size={30} /></a>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center xl:mt-0 lg:mt-0 mt-4'>
          <a target="_blank" style={{ fontSize: 20 }} href="mailto:lmoberly@stannford.edu" className="xl:border-white lg:border-white md:border-white border-white hover:-translate-y-1 lg:border-2 border mx-4 mt-4 text-center group rounded-sm xl:p-6 lg:p-4 p-4 hover:bg-emerald-500 ease-in duration-150 cursor-pointer w-full xl:w-auto lg:w-auto md:w-auto">
            <span style={{ fontSize: 20 }} className="font-CerealBD xl:text-md lg:text-sm text-xs xl:text-white lg:text-white md:text-white text-white underline">
              Interested in sponsoring? Contact us here!
            </span>
          </a>
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
                TreeHacks is the perfect time and place to learn. We provide starter code “hack packs” on our github as well as beginner-friendly workshops and mentors to help you build something you can be proud of.</p>
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
        <h1 className='font-semibold text-md font-CerealBK text-slate-500 text-center'>Made with ❤️ by the TreeHacks team</h1>
      </div>
    </div >
  );
}

export default App;
