import React from "react";

export default function Hero() {

  
  var elements = document.querySelectorAll('.parallax');

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Update position for each element based on mouse movements
  elements.forEach(function(element) {
    element.style.left = mouseX*0.1+ 'px';
    element.style.top = mouseY*0.1 + 'px';
  });
});


  return (
    <div className="Hero-main-container">
      <div class="sc-f0992bfa-0 floating-assets">
        <div
          class="common  cellar parallax"
         
        ></div>
        <div
          class="common  pay parallax"
        ></div>
        <div
          class="common face parallax"
        ></div>
        <div
          class="common command parallax"
        ></div>
        <div
          class="common  fill parallax"
        ></div>
        
      </div>

      <div className="content">
      <p className="title-line-1">Say Hello</p>
      <p className="title-line-2">to your new icon library.</p>
      <p className="desc">
        A high-quality selection of free icons. No premium options or sign-ups.
        Your new alternative to Noun Project, Flaticon, and all Figma resources.
        Available in SVG, Font, React, React Native, Flutter, Figma and Framer.
      </p>
      </div>
    </div>
  );
}
