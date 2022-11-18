import React, { useState } from "react";
import "./Events.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import img1 from "../../assets/IMG_1326.jpg"
import img2 from "../../assets/pp8.jpg"
import img3 from "../../assets/pp10.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from "../../components/Footer";
const Events = () => {
  const [active,setActive] = useState(null)
  const langs = [
    {name:"blabla", skill:"80%",color:"hue-rotate-[240deg]"},
    {name:"blabla", skill:"80%",color:"hue-rotate-[240deg]"},
    {name:"blabla", skill:"80%",color:"hue-rotate-[240deg]"},
    {name:"blabla", skill:"80%",color:"hue-rotate-[240deg]"},
    {name:"blabla", skill:"80%",color:"hue-rotate-[240deg]"},
    {name:"blabla", skill:"80%",color:"hue-rotate-[240deg]"},
  ]
  return (
    <>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div class="imgko absolute top-0 w-full h-full bg-center bg-fixed bg-cover">
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 "
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  This is our Events 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0px)" }}
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20  -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words rounded-lg transform transition duration-500 hover:scale-110 bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Awarded Agency</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words rounded-lg transform transition duration-500 hover:scale-110 bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-700">
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Events</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Keep you updated always
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words rounded-lg transform transition duration-500 hover:scale-110 bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-900">
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Verified Company</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="text-gray-900 bg-gray-100">
  <section class="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
    <div class="flex flex-wrap items-center justify-between mb-8">
      <h2 class="mr-10 text-4xl font-bold leading-none md:text-5xl">
      Events
      </h2>
      <a href="#" class="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
          Go to insights 
        </a>
    </div>

    <div class="flex flex-wrap -mx-4">
      <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
        <img src={img1} alt="Card img" class="object-cover object-center w-full h-48" />
        <div class="flex flex-grow">
          <div class="triangle"></div>
          <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
            <div>
              <a href="#" class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Reliable Schemas</a
                >
                <a
                  href="#"
                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                >
                 Event(1)
                </a>
              <p class="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi aperiam, amet cupiditate?
              </p>
            </div>
            <div>
              <a href="#" class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More </a
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
        >
          <img
            src={img2}
            alt="Card img"
            class="object-cover object-center w-full h-48"
          />
          <div class="flex flex-grow">
            <div class="triangle"></div>
            <div
              class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400"
            >
              <div>
                <a
                  href="#"
                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                  >Client-based Adoption</a
                >
                <a
                  href="#"
                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                >
                  Event(2)
                </a>
              <p class="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
              </p>
            </div>
            <div>
              <a href="#" class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More </a
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col"
        >
          <img
            src={img3}
            alt="Card img"
            class="object-cover object-center w-full h-48"
          />
          <div class="flex flex-grow">
            <div class="triangle"></div>
            <div
              class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400"
            >
              <div>
                <a
                  href="#"
                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                  >Intellectual Capital</a
                >
                <a
                  href="#"
                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                >
                 Event(3)
                </a>
              <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
              </p>
            </div>
            <div>
              <a href="#" class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read More </a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
 
   <Footer/>
    </>
  );
};

export default Events;
