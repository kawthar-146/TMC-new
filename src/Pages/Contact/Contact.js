import React from 'react'
import "./Contact.css"
import Footer from '../../components/Footer';
const Contact = () => {
  return (
    <>
     <div class="absolute w-full min-h-screen">
    <div class="kokobg bg-fixed absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom pt-20 px-12 text-white text-center"></div>

  </div>
   
<form id="contact-stack-form" class="form">
    
	<div class="cube-1 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-2 w-100 cube">
		<div class="front">
			<label for="name" class="label">Name</label>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-3 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-4 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-5 w-300 cube">
		<div class="front">
			<input type="text" name="name" id="name" placeholder="Your Name" class="field"/>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-6 w-180 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-7 w-120 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-8 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-9 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-10 w-100 cube">
		<div class="front">
			<label for="email" class="label">Email</label>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-11 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-12 w-300 cube">
		<div class="front">
			<input type="email" name="email" id="email" placeholder="Your Email" class="field"/>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right">
			<label for="gossip" class="label">Gossip</label>
		</div>
	</div>
	<div class="cube-13 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-14 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-15 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right">
			<input type="text" name="gossip" id="gossip" placeholder="How did you hear about us?" class="field"/>
		</div>
	</div>
	<div class="cube-16 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-17 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-18 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-19 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-20 w-100 cube">
		<div class="front">
			<label for="message" class="label">Message</label>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-21 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-22 w-300 cube">
		<div class="front">
			<textarea name="message" id="message" placeholder="Message" class="field textarea"></textarea>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-23 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-24 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-25 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-26 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-27 w-100 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-28 w-100 cube">
		<div class="front">
			<label for="gossip" class="label">Gossip</label>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-29 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-30 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-31 w-300 cube">
		<div class="front">
			<input type="text" name="gossip" id="gossip" placeholder="How did you hear about us?" class="field"/>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-32 w-300 cube">
		<div class="front"></div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
	<div class="cube-33 w-300 cube">
		<div class="front">
			<button id="contact-stack-button" type="button" class="button">Submit</button>
		</div>
		<div class="back"></div>
		<div class="top"></div>
		<div class="bottom"></div>
		<div class="left"></div>
		<div class="right"></div>
	</div>
</form>

<Footer/>
    </>
  )
}

export default Contact