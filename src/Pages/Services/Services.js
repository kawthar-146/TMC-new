import React from 'react'
import img1 from '../../assets/Slide5 (3).JPG'
import Footer from '../../components/Footer'
import img2 from "../../assets/pp4.jpg"
const Services = () => {
  return (
    <>
    
<div class="relative z-0 h-64 m-8 overflow-hidden rounded-lg bg-indigo-500">
  <div class="absolute z-30 flex w-full h-full">
    <div class="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
      <h2 class="text-5xl">INDUSTRIES SERVED WORLDWIDE </h2><span></span>
    </div>
    <div class="absolute top-0 right-0 flex w-full h-full">
      <div class="w-1/3 h-full bg-indigo-500"></div>
      <div class="relative w-1/3"><svg fill="currentColor" viewBox="0 0 100 100" class="absolute inset-y-0 z-20 h-full text-indigo-500">
          <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
        </svg><svg fill="currentColor" viewBox="0 0 100 100" class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
          <polygon points="0,0 100,0 50,100 0,100"></polygon>
        </svg></div>
    </div>
  </div>
  <div class="absolute top-0 right-0 block w-9/12 h-full" ><img alt="Snowy mountain lake" class="object-fill min-w-full h-full" src={img1}/></div>
</div>
  
<section class="flex flex-col justify-center antialiased  mb-40 mt-10 text-blue min-h-screen">
    <div class="max-w-3xl mx-auto p-4 sm:px-6 h-full">
    <div class="container mx-auto mt-30 mb-20 text-center animate-[wave_5s_ease-in-out_100]">
        <p class=" sm:text-xl mt-10 text-4xl">Our Strategic</p>
        <p class="text-btn_primary mt-2 sm:text-xl text-2xl"> Objectives</p>
      </div>
        <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a class="relative block group" href="#0">
                <div class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={img2} width="540" height="303" alt="Blog post"/>
                </figure>
            </a>
            <div>
                
                <header>
                    
                    <div class="mb-3">
                        <ul class="flex flex-wrap text-xs font-medium -m-1">
                            <li class="m-1">
                                <a class="inline-flex text-center py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" href="#0">Constraction</a>
                            </li>
                            <li class="m-1">
                                <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">Engineering</a>
                            </li>
                        </ul>
                    </div>
                    <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <a class="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Designing and build your world</a>
                    </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">Managing our Business Safely, Reliably and Efficiently & Growing our People and our Business</p>
               
            </div>
        </article>    
    </div>
</section>

<section class="bg-gray-100 flex flex-col text-center py-16 px-4 lg:px-16 md:px-8 xl:px-24 xxl:px-40">
    <div class="mt-12 sm:flex items-start justify-between sm:-mx-2">
      <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 sm:w-1/3 sm:mx-2 lg:mx-6">
        <div class="h-24">
          <img src="https://tailwindcss-templates.netlify.com/fair-rate-mortgage/images/icon-home-1.svg
" alt="" class="mx-auto"/>
        </div>
        <h4 class="text-md uppercase text-gray-800 font-bold mt-10">sad, sweet, I knew it complete</h4>
        <p class="text-base text-gray-600 mt-2">when I wore a younger man's clothes</p>
      </div>

      <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6">
        <div class="h-24">
          <img src="https://tailwindcss-templates.netlify.com/fair-rate-mortgage/images/icon-home-2.svg
" alt="" class="mx-auto"/>
        </div>
        <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Two way data binding</h4>
        <p class="text-base text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6">
        <div class="h-24">
          <img src="https://tailwindcss-templates.netlify.com/fair-rate-mortgage/images/icon-home-3.svg
" alt="" class="mx-auto"/>
        </div>
        <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Choose Life</h4>
        <p class="text-base text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    <div class="mt-12 sm:flex items-start justify-between sm:-mx-2">
      <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 sm:w-1/3 sm:mx-2 lg:mx-6">
        <div class="h-24">
          <img src="https://tailwindcss-templates.netlify.com/fair-rate-mortgage/images/icon-home-1.svg
" alt="" class="mx-auto"/>
        </div>
        <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Albedo</h4>
        <p class="text-base text-gray-600 mt-2">Measure of the light - adipisci.</p>
      </div>

      <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6">
        <div class="h-24">
          <img src="https://tailwindcss-templates.netlify.com/fair-rate-mortgage/images/icon-home-2.svg
" alt="" class="mx-auto"/>
        </div>
        <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Christopher Latham Sholes</h4>
        <p class="text-base text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6">
        <div class="h-24">
          <img src="https://tailwindcss-templates.netlify.com/fair-rate-mortgage/images/icon-home-3.svg
" alt="" class="mx-auto"/>
        </div>
        <h4 class="text-md uppercase text-gray-800 font-bold mt-10">Integer is possible</h4>
        <p class="text-base text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    
      
        
  </section>
  <section class="text-center mt-26 mb-20 bg-white px-4 py-12 lg:px-16 md:px-8 xl:px-24 xxl:px-40">
    <div>
      <h2 class="text-xl font-bold text-gray-900 lg:text-3xl ">Need Help?</h2>
      <p class="w-full lg:w-1/2 mx-auto text-base text-gray-600 mt-6">Contact our Customer Support that is always ready
        to help you with any
        possible
        questions, problems or information.</p>
      <a href="#" class="block text-xl text-blue-500 mt-4">info@tmc.com.lb</a>
    </div>
  </section>
       

<Footer/>

    </>
  )
}

export default Services