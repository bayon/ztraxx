"use strict";

//DOM element
const form1 = document.getElementById("form1");

const textOverlayInput = document.getElementById("textOverlayInput");
const handleColorInput = document.getElementById("handleColorInput");

const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const batHandleImage = document.getElementById("batHandleImage");
const batRingImage = document.getElementById("batRingImage");
const batBarrelImage = document.getElementById("batBarrelImage");

const highlights1 = document.getElementById("highlights1");
const highlights2 = document.getElementById("highlights2");
const highlights3 = document.getElementById("highlights3");

 const moniker = document.getElementById("moniker");

 

// var rr = 3;
var mt = "25%";
var ml = "30%";
var mf = "1.5em";
var ww = window.innerWidth;
 
if(ww <= 600){
  resizeDisplay(5,"15%","25%","1em")
} else if ( ww <= 400 ){
  resizeDisplay(7,mt,ml,mf)
} else{
  resizeDisplay(3,mt,ml,mf)
}

window.addEventListener('resize', function(event) {
 
  // var rr = 3;
  var ww = window.innerWidth;
  var mt = "25%";
  var ml = "30%";
  var mf = "1.5em";

  //console.log("ww:",ww);
  if(ww <= 600){
    resizeDisplay(5,"15%","25%","1em")
  } else if ( ww <= 400 ){
    resizeDisplay(7,mt,ml,mf)
  } else{
    resizeDisplay(3,mt,ml,mf)
  }
  
  
}, true);
//resizeDisplay(resizeRatio, moniker top, left, and fontSize))
function resizeDisplay(rr,mt,ml,mf){
  batHandleImage.style.height = 319 / rr + "px";
  batHandleImage.style.width = 852 / rr + "px";
  batRingImage.style.height = 319 / rr + "px";
  batRingImage.style.width = 26 / rr + "px";
  batBarrelImage.style.height = 319 / rr + "px";
  batBarrelImage.style.width = 722 / rr + "px";
  
  highlights1.style.height = 319 / rr + "px";
  highlights1.style.width = 852 / rr + "px";
  highlights2.style.height = 319 / rr + "px";
  highlights2.style.width = 26 / rr + "px";
  highlights3.style.height = 319 / rr + "px";
  highlights3.style.width = 722 / rr + "px";

  moniker.style.top = mt;
  moniker.style.left = ml;
  moniker.style.fontSize = mf;

}

/* change versus submit */
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  batHandleImage.classList.remove("bat-handle-wooden");
  batHandleImage.classList.remove("bat-handle-blue");
  batHandleImage.classList.remove("bat-handle-white");

  batRingImage.classList.remove("bat-ring-wooden");
  batRingImage.classList.remove("bat-ring-blue");
  batRingImage.classList.remove("bat-ring-white");

  batBarrelImage.classList.remove("bat-barrel-wooden");
  batBarrelImage.classList.remove("bat-barrel-blue");
  batBarrelImage.classList.remove("bat-barrel-white");


  /* Handle Options */ 
  if (form1.handleColorInput.value === "clear") {
    batHandleImage.classList.add("bat-handle-wooden");
  } else if (form1.handleColorInput.value === "blue") {
    batHandleImage.classList.add(`bat-handle-blue`);
  } else if (form1.handleColorInput.value === "white") {
    batHandleImage.classList.add(`bat-handle-white`);
  } else {
    //default
    batHandleImage.classList.add("bat-handle-wooden");
  }

  /* Ring Options */ 
  if (form1.ringColorInput.value === "clear") {
    batRingImage.classList.add("bat-ring-wooden");
  } else if (form1.ringColorInput.value === "blue") {
    batRingImage.classList.add(`bat-ring-blue`);
  } else if (form1.ringColorInput.value === "white") {
    batRingImage.classList.add(`bat-ring-white`);
  } else {
    //default
    batRingImage.classList.add("bat-ring-wooden");
  }

  /* Barrel Options */ 
  if (form1.barrelColorInput.value === "clear") {
    batBarrelImage.classList.add("bat-barrel-wooden");
  } else if (form1.barrelColorInput.value === "blue") {
    batBarrelImage.classList.add(`bat-barrel-blue`);
  } else if (form1.barrelColorInput.value === "white") {
    batBarrelImage.classList.add(`bat-barrel-white`);
  } else {
    //default
    batBarrelImage.classList.add("bat-barrel-wooden");
  }


  moniker.innerHTML = `<div style='color:#ccc;font-size:.8em;font-style:italic;' >${form1.textOverlayInput.value}</div>`;
});
