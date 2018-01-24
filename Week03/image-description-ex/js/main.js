

// Step 1) Declare event handlers
function showImage(evt) {
    // console.log('showImage function called');
    // console.log(linkElement);

    // a) Get a reference to the <img class="feature"> element
    var imgElement = document.querySelector('img.feature');

    // b) remove the 'hidden' class from the element
    imgElement.classList.remove('hidden');
    
    // c) Get the href from the <a class="feature link" href"..."> element
    //      (storing in a local temporary variable)
    var imgSrc=linkElement.href;

    // d) Set the .src attribute`s value for the <img>
    imgElement.src=imgSrc;

    // e) Set the .alt attribute's value for the <img>
    imgElement.alt = linkElement.title;

    // f) Get a reference to the <p class='feature title'> elements
    var captionParagraph = document.querySelector('p.feature.title');
    // g) Put some text in that paragraph
    captionParagraph.innerHTML = linkElement.title;

    // Stop the default actions
    console.log(imgSrc);
    evt.preventDefault();
}

// Step 2) Find the elemets that respond to events
var linkElement = document.querySelector('a.feature.link');


// Step 3) "Wire up" the elements to the event handlers (this is where the action is used)
linkElement.addEventListener('click',showImage);

