import React from 'react'
import img1 from "../../assets/Screenshot (80).png"
import "./distributor.css";
import { useState } from "react";
import Footer from '../../components/Footer';
const Distributor = () => {
    const [formStatus, setFormStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState({
      name: "",
      email: "",
      platform: "",
      file: ""
    });
    
 

  return (
    <>
      
<section class="sm:flex justify-between py-20 px-10 bg-gray-100 text-indigo-100">


<div class="sm:w-1/2 mb-12 sm:mb-0 ">
  <h2 class="md:text-4xl lg:text-6xl sm:text-4xl text-3xl text-btn_color mb-6 font-bold">Welcome to TMC company ...</h2>
  <p class="mb-4 text-black">There's never a sad day here!</p>
  <a href="#" class="inline-block sm:py-1.75 md:py-3 md:px-5 sm:px-3.5 py-3 px-5 text-lg bg-gray-400 text-gray-700 hover:bg-gray-300 rounded mr-3 mb-3 transition ease-in">Learn More</a>
  <a href="#" class="inline-block md:py-3 md:px-5 sm:py-1.75 sm:px-3.5 py-3 px-5 text-lg bg-yellow-400 text-yellow-700 hover:bg-yellow-300 rounded transition ease-in">Get Started</a>
</div>


<div class="sm:w-1/2">
  <img src={img1} className="imad"/>
</div>

</section>
<section class="pt-20 pb-36 px-8 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center  animate-[wave_5s_ease-in-out_100]">
        <h1 class="text-2xl font-bold text-gray-800">APPLICATION</h1>
        <p class="text-sm pt-2">Get in touch with TMC team</p>
      </div>
    </div>
    <div class="mt-16 relative max-w-4xl mx-auto">
      <div class="absolute z-10 inset-0 bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
      <div class="relative z-20 bg-white rounded-md shadow-md p-12">
        <form action="">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <input type="text" placeholder="Name" class="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400" />
            <input type="text" placeholder="Email" class="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400" />
            <input type="tel" placeholder="Phone number" class="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400" />
            <input type="date" placeholder="Start Date" class="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400" />
            <input type="file" placeholder="Upload your CV" class="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2" />
            <textarea rows="5" placeholder="Why should we choose you?" class="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"></textarea>
          </div>
          <button class="inline-block w-auto mt-4 px-6 py-2 bg-gradient-to-r from-blue-800 to-blue-500 hover:to-blue-500 hover:from-blue-800 rounded-md shadow-md text-sm font-bold text-white">
            Apply
          </button>
        </form>
      </div>
    </div>
  </section>
  
<Footer/>
   
    </>
  )
}

export default Distributor