var css = document.querySelector("h3");
var color = document.querySelector(".color1");
var color = document.querySelector(".color2");
var body = document.getElementsById("gradient");




function setGradient(){
	body.style.background ="linear-gradient(to right," + color1.value =","+ color2.value+")";
	css.textContext =body.style.background+";";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);