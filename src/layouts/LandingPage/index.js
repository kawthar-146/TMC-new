import React from "react";
import Navbar from "../../components/Header";
import Hero from "../../assets/Hero.jpg";
import "../LandingPage/landing.css"
import Footer from "../../components/Footer";
import img1 from "../../assets/page 62 GIFCO - JIEH (3).JPG"
import img2 from "../../assets/page 69 4B SPORTING CLUB- saida (3).JPG"
import img3 from "../../assets/p.JPG"
import img4 from "../../assets/pp2.jpg"
import img5 from "../../assets/pp3.jpg"
import Slidertrans from "../../components/Header/Slidertrans";
const LandingPageLayout = ({ heading, ...otherProps }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>

{/* <section class="kokoko3 min-h-screen bg-cover bg-no-repeat bg-bottom bg-fixed col-span-12 relative md:h-[calc(780px+5vw)] ">
    

    <div class="absolute inset-0 px-5 flex items-center h-full w-full justify-center flex-col">
      <span class="w-40 h-0.5 bg-white block mb-7"></span>
      <h1 class="text-xl md:text-4xl xl:text-5xl tracking-wider uppercase font-semibold text-white  ">we're building the future</h1>
      <span class="w-40 h-0.5 bg-white block mt-7"></span>
    </div>
  </section> */}
  <Slidertrans/>
  <section class="text-gray-700 body-font lg:mt-56  sm:mt-0">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 animate-pulse sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">TMC build our future</h2>
        <p class="leading-relaxed text-base">TMC is a dynamic, capital-intensive, modern company, playing a key role in the development of Lebanon and its people.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">TMC
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 animate-ping h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">COPE OF OPERATION OF TMC-CI</h2>
        <p class="leading-relaxed text-base">TMC-CI  Manufacturing  facility  has  a  total  land  area  of  20,000  square  meters;  7,000 square meters of which  are utilized  for  production</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center"><button
        className="bg-[#f8cd00] text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        TMC
      </button>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 animate-ping ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 animate-bounce  h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-[#f8cd00] text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 animate-spin h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Quality management system</h2>
        <p class="leading-relaxed text-base">Has been delivering a wide range of quality and innovative metal work and steel building constraction</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">TMC
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 animate-ping h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

   
  </div>
</section>
<section class="project font-Poppins bg-dark_purple text-white bg-fixed">
<div className="text-center py-10">
    <h5 class="text-white lg:text-lg">New Projects</h5>
    <h1 class="text-4xl w-96 mx-auto leading-norm
    al font-bold text-[#f8cd00] mb-12">Look at the magic of our work</h1>
    <div class=" max-w-5xl mx-auto gap-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 group ">
        <div class="bg-white  duration-500 p-8 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl mix-blend-luminosity ">
           <img src={img1} class="h-60 mx-auto" />
           <h4 class="uppercase text-xl font-bold text-btn_color">GIFCO-JIEH </h4>
           <p class="text-sm leading-7 my-3 font-light text-btn_color ">m ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lectus quis elit vulputate ornare a in mauris. Curabitur id efficitur sapien. Quisque hendrerit ullamcorper lectus, in imperdiet magna fermentum ac.</p>
           <button class="bg-btn_color py-2.5 px-8 rounded-full"> Get in Touch</button>
        </div>
        <div class="bg-white  p-8 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer rounded-xl mix-blend-luminosity ">
           <img src={img2} class="h-60 mx-auto" />
           <h4 class="uppercase text-xl font-bold text-btn_color">SPORTING CLUB- saida</h4>
           <p class="text-sm leading-7 my-3 font-light text-btn_color ">m ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lectus quis elit vulputate ornare a in mauris. Curabitur id efficitur sapien. Quisque hendrerit ullamcorper lectus, in imperdiet magna fermentum ac.</p>
           <button class="bg-btn_color py-2.5 px-8 rounded-full"> Get in Touch</button>
        </div>
        <div class="bg-white  duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity ">
           <img src={img3} class="h-60 mx-auto" />
           <h4 class="uppercase text-xl font-bold text-btn_color">Kotob city - saida</h4>
           <p class="text-sm leading-7 my-3 font-light text-btn_color ">m ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lectus quis elit vulputate ornare a in mauris. Curabitur id efficitur sapien. Quisque hendrerit ullamcorper lectus, in imperdiet magna fermentum ac.</p>
           <button class="bg-btn_color py-2.5 px-8 rounded-full"> Get in Touch</button>
        </div>

    </div>
</div>
</section>
<div id="logos-home-page">
	<div class="slider">
		<div class="slide-track">
			<div class="slide"><img class="alignnone size-full wp-image-13024" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-wipro_logo.jpg" alt="" width="60" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13023" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-w.l.-gore-logo.jpg" alt="" width="110" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13022" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-visa.jpg" alt="" width="188" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13021" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-vf_circle_logo-290.jpg" alt="" width="60" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-13020" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-unitedhealthcareprocycling_logo2017-trans.jpg" alt="" width="285" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13019" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-tyco-electronics-logo.jpg" alt="" width="184" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13018" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-toyota-logo.jpg" alt="" width="73" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13017" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-thyssenkrupp.jpg" alt="" width="79" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-13016" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-tech_mahindra_new_logo.jpg" alt="" width="212" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-13015" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-standard-chartered-bank-777x437.jpg" alt="" width="155" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13014" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-solix-logo.jpg" alt="" width="237" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13013" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-smuckers_logo.jpg" alt="" width="194" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13012" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-siemens-logo-300x49.jpg" alt="" width="300" height="49" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13011" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-sap-logo.jpg" alt="" width="118" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13010" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-paypal.jpg" alt="" width="230" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13009" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-otterbox.jpg" alt="" width="92" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13008" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-ntt_communications_.jpg" alt="" width="243" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-13007" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-nike-logo-free-png-image.jpg" alt="" width="115" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-13006" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-nestle.jpg" alt="" width="202" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13005" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-mtuity-logo.jpg" alt="" width="173" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13004" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-lancaster.jpg" alt="" width="187" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13003" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-kaneka.jpg" alt="" width="233" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13002" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-intel-logo.jpg" alt="" width="90" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13001" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-ibm_logo.jpg" alt="" width="150" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12999" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-hitachi_logo-300x52.jpg" alt="" width="300" height="52" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-13000" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-huawei-logo-web.jpg" alt="" width="241" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-12998" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-hero-cycles-logo.jpg" alt="" width="242" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-12997" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-heatcraft.jpg" alt="" width="195" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12995" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-fujitsu.jpg" alt="" width="119" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12996" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-goodyear-tires-in-ohio-300x60.jpg" alt="" width="300" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12994" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-fedexlogo.jpg" alt="" width="204" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12993" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-ezdi-logo.jpg" alt="" width="279" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12992" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-ericsson.jpg" alt="" width="295" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12991" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-dpt_dupont_logo_thumbnail_690x345.jpg" alt="" width="150" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12990" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-collabera-logo.jpg" alt="" width="217" height="60" /></div>
			<div class="slide"><img class="alignnone size-medium wp-image-12989" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-coca-cola.jpg" alt="" width="175" height="60" /></div>
			<div class="slide"><img class="alignnone size-full wp-image-12988" src="https://garwoodcenter.wpengine.com/wp-content/uploads/2018/02/mini-logo-applied_materials_logo.jpg" alt="" width="237" height="60" /></div>

		</div>
	</div>
</div>
<div class="py-1  bg-gray-100">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="mb-12 space-y-2 text-center">
        <span class="block w-max mx-auto px-3 py-1.5 border border-bg_white rounded-full bg-btn_color text-bg_white">TMC</span>
        <h2 class="text-2xl text-blue-900 font-bold md:text-4xl">CONSTRUCTION is TECHNIQUE MÉTAL CONSTRUCTION </h2>
        <p class="lg:w-6/12 lg:mx-auto">We are looking forward to be your reliable supplier of structural steel for your projects and we assure you of
The best quality always
</p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src={img4} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">The art of construction is in the attention to detail..</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna lacus, sodales eu ligula nec, efficitur euismod quam. ...</p>
              </div>
              <a href="www.tailus.io" class="block w-max text-cyan-600">Read more</a>
            </div>
          </div>
        </div>
        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src={img5} alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">The construction you can count on</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna lacus, sodales eu ligula nec, efficitur euismod quam. ...</p>
              </div>
              <a href="www.tailus.io" class="block w-max text-cyan-600">Read more</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

{showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

<Footer/>

</>
  );
};

LandingPageLayout.defaultProps = {
  heading: "",
};

export default LandingPageLayout;
