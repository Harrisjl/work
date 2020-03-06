var el_up = document.getElementById("HSA_UP");
var el_down = document.getElementById("HSA_DOWN");
var heading = document.getElementById("h1");
el_up.innerHTML = "Click on the button to " + "change the style attribute";
var x = document.getElementById("item1").nextElementSibling.innerHTML;

function hsa_Run() {
  heading.style["color"] = "white";
  heading.style["background-color"] = "blue";
  heading.style["width"] = "400px";
  heading.style["border"] = "1px solid black";

  el_up.style["background-color"] = "blue";
  el_up.style["width"] = "550px";
  el_up.style["border"] = "1px solid black";

  el_down.innerHTML = "Style Attribute Changed";
}
