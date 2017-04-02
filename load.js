"use strict"
/* 
 * The use strict ensures that we follow the rules thighter which allows the
 * compiler to optimize our code somewhat as it is executing in browsers that support it
 */


// select() acts like the $() in jQuery, it takes a string and gets the element with that tagname. 
function select(selector){
	document.querySelector(selector)
}
// load() creates the script element, gives it its source, and adds it within the head element. 
function load(){
	let script = document.createElement("script")
	script.setAttribute("src","script.js")
	select("head").appendChild(script)
}

// call load() if space is pressed.
window.onkeydown = function(event){
	if(e.keyCode===32) {load()}
}
