/*main.js
  This is a comment block, enclosed in a slash + asterisk and
  ending with an asterisk + slash
  */

// Demo of calling a function - console is the javascript editor environment in the browser
//console.log(message);
console.log('main.js is loaded');

// The updateInnerHTML function has two parameters:
// - selector - is a string that identifies which DOM element to get/select
// - newValue - is a tring that will be the new value for the selector`s innerHTML
function updateInnerHTML(selector, newValue) {
 document.querySelector(selector).innerHTML = newValue;
}

function strong(value) {
    //Concatenation- combining strings to produce a new string 
 return '<strong>' + value + '</strong>';
}







