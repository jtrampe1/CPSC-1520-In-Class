var urlTemplate = 'http://placehold.it/:size/:color/:background/';
var urlQueryStringTemplate = "?text="

var texInput = document.querySelector('input[name=placeholderText]');


function onplaceholderTextChanged(evt) {
    // The .target of the evt is the object that 'experienced' the event
    // The .value is an attribute of the <input> element
    console.log(evt.target.value); 

    var imgElement = document.querySelector('img');
    var src = imgElement.src;
    var indexOfEqualSign = src.indexOf('=');
    var newSrc = src.substring(0, indexOfEqualSign);

    console.log(newSrc);
    newSrc = newSrc + '=' + evt.target.value;
    imgElement.src = newSrc;

}


// Wire up the event handler
texInput.addEventListener('change', onplaceholderTextChanged);





// mini-lesson on string manipulation:

//  split string into an array
//  join from array into a string
//  includes / endswith / startsWith
//  match - regular expressions
//  indexof / lastIndexOf
//  replace
//  character access
//  comparing - equals, greater/lesser
//  slice
//  toString
//  trim