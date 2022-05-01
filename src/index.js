import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Rotate3D(identifier, percentage) {
  let degree = percentage * 360;
  document.querySelector(identifier).style.transform = "rotate3d(0,1,0," + degree + "deg)";
}

function FadeIn(identifier, percentage) {
  document.querySelector(identifier).style.opacity = percentage;
}

function FlyIn(identifier, percentage) {
  document.querySelector(identifier).style.transform = "scale(" + percentage + ")";
}

// animate based on scroll distance to element
// returns false if animation has not been completed
// returns true if animation is completed
function PerformAnimation(identifier, animation_types) {
  // calculate how far midpoint of viewbox (what user sees) is from midpoint of element
  let element = document.querySelector(identifier);
      
  let ele_midpoint = element.getBoundingClientRect().height / 2;
  let ele_offsetTop = element.offsetTop;

  let viewbox_distance_travelled = -1 * document.getElementById("About").getBoundingClientRect().y;
  let viewbox_midpoint = document.documentElement.clientHeight / 2;

  let ele_midpoint_offsetTop = ele_midpoint + ele_offsetTop;
  let viewbox_midpoint_offsetTop = viewbox_distance_travelled + viewbox_midpoint;
  
  // based on how far apart they are, decide whether to animate or not
  let difference = ele_midpoint_offsetTop - viewbox_midpoint_offsetTop;
  let animation_percentage = 1 - (difference / viewbox_midpoint);

  // only animate within a certain range
  if (animation_percentage >= 0 && animation_percentage <= 1) {
    // do all animations listed
    for (let i = 0; i < animation_types.length; i++) {
      let type = animation_types[i];
      if (type === "rotate3d")
        Rotate3D(identifier, animation_percentage);
      if (type === "fadein")
        FadeIn(identifier, animation_percentage);
      if (type === "flyin")
        FlyIn(identifier, animation_percentage);
    }
  }

  // case: animation is done
  if (animation_percentage >= 1) {
    element.style = ""; // reset style (gets rid of animation)
    return true;
  }
  
  // case: animation is not done
  else
    return false;
}

// animate based on scroll
window.onload = () => {
  // identifiers to animate
  let identifiers = [
    "#selfie-container",
    "#introduction-desc-container",
    "#aggieland",
    "#aggieland-card",
    "#bball",
    "#bball-card",
    "#service-card"
  ];

  // set opacity to 0 for animated elements
  for (let i = 0; i < identifiers.length; i++)
    document.querySelector(identifiers[i]).style.opacity = 0;

  document.querySelector("#aggieland").transform = "scale(0)";
  document.querySelector("#bball").transform = "scale(0)";

  // how to animate each identifier
  let animation_types = [
    ["rotate3d", "fadein"],
    ["fadein"],
    ["flyin", "fadein"],
    ["fadein"],
    ["flyin", "fadein"],
    ["fadein"],
    ["fadein"]
  ];

  if (identifiers.length !== animation_types.length) {
    alert("ERR: All identifiers must have corresponding animation types");
  }
  
  // animation status for each identifier
  let done_animating = [];
  for (let i = 0; i < identifiers.length; i++)
    done_animating.push(false);

  // on scroll, perform animation(s)
  window.onscroll = () => {

    let finished_all = true;
    for (let i = 0; i < identifiers.length; i++) {
      if (!done_animating[i]) {
        let finished_animating = PerformAnimation(identifiers[i], animation_types[i]);
        
        // update animation status (on finish)
        if (finished_animating)
          done_animating[i] = finished_animating;

        // otherwise, flag that at least one animation not finished
        else
          finished_all = false;
      }
    }

    // if all animations done, get rid of scroll event
    if (finished_all)
      window.onscroll = null;
  }
}


// render stuff
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();