"use strict"
/* 
 * The use strict ensures that we follow the rules thighter which allows the
 * compiler to optimize our code somewhat as it is executing in browsers that support it
 */


// select() acts like the $() in jQuery, it takes a string and gets the element with that tagname. 
const select = selector => document.querySelector(selector)

// load() creates the script element, gives it its source, and adds it within the head element. 
const load = _ => {
	let script = document.createElement("script")
	script.setAttribute("src","script.js")
	select("head").appendChild(script)
}

// call load() if space is pressed.
window.onkeydown = e => e.keyCode===32 && load()
/* On a keydown event that has the keyCode corresponding to the space key (32).
 * I'm using the && operator here (and), it works as follows:
 * if keyCode===32 validates to true, then it will call load() to see if it also returns true.
 * load() ofcourse does not validate to true, this doesn't matter, we just want to call it.
 * Should be noted: this method of calling a function is considered an anti-pattern by some.
 */
