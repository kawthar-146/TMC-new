import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 import img1 from "../../assets/IMG_3012.JPG"
 import img2 from "../../assets/IMG_1052.JPG"
 import img3 from "../../assets/Slide4 (8).JPG"
 import img4 from "../../assets/20171005_133410.JPG"
 import { MdConstruction } from "react-icons/md";
 import { CgUserlane} from "react-icons/cg";
 import "./Header.css"
const AutoplaySlider = withAutoplay(AwesomeSlider);

 const Slidertrans = () => {
   
    return (
        <>
        
         {/* <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    animation="cubeAnimation"
  >
    <div data-src={img1}  className="img1as"/> 
    <div data-src={img1} />
    <div data-src={img1} />
    </AutoplaySlider> */}
      <div className="home-slider1">
    <AutoplaySlider
      className="home-slider-items"
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      organicArrows={true}
      bullets={false}
      // animation="cubeAnimation"
    >
      <div>
        <img src={img1} className="imgk" alt="leon1" title="leon1" />
        <div class="bottom-container">
           Our, Company!
        </div>

        <div class="top-container">
        Our, Company!
        </div>
       {/* <button id="neonShadow"><span>About Us</span></button> */}
       <button class="button1">About Us</button>
      </div>
      <div>
      <img src={img2} alt="projeect" className="imgk" title="leon1" />
      <div className="mess">
      <h1>
  <span>We always work hard <MdConstruction size={30}/></span>
  <div class="message">
    <div class="word1">to meet your expectations</div>
  </div>
</h1>
{/* <button id="neonShadow1"><span>Our Projects</span></button> */}
<button class="button2">Our Projects</button>
</div>
      </div>
      <div>
      <img src={img3} alt="Team Work" className="imgk" title="leon1" />
      {/* <button id="neonShadow"><span>Our Mission</span></button> */}
      <button class="button1">Our Mission</button>
      {" "}
      </div>
      <div>
      <img src={img4} alt="leon1"className="imgk" title="leon1" />
      <div className="mess">
      <h1>
  <span>Welcome To TMC <CgUserlane size={30}/></span>
  <div class="message">
    <div class="word1">For more info contuct us</div>
  </div>
</h1>
</div>
      {/* <button id="neonShadow2"><span>Contact Us</span></button> */}
      <button class="button1">Contact Us</button>
      {" "}
      </div>
      
    </AutoplaySlider>
  </div>
        </>
    )
    

 };
 export default Slidertrans ;
