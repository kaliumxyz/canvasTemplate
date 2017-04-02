"use strict"
// This uses the select function to get the canvas element.
const canvas = select("canvas")
// This gets the 2d context of the canvas (no other contexts have been implemented yet).
const context = canvas.getContext("2d")

// print "test" to console if space is pressed.
window.onkeydown = e => e.keyCode===32 && console.log("test")

