// When a gallery thumbnail size button is clicked, the corresponding size class should be added to the div.thumbnails element.  
// This will apply the corresponding CSS rule to modify the display the of hte thumbnail images. 
//  In addition to this, the clicked button should be made active (i.e. add the active class).

// var liSm = document.querySelector('.thumbnails-sm');
// var liMd = document.querySelector('.thumbnails-md');
// var liLg = document.querySelector('.thumbnails-lg');
var ulContainer = document.querySelector('ul.thumbnail-sizes');

function thumbNailSizeHandler(evt) {
    var target = evt.target; //evt.targer is the object the event happened on
    var thumbnails = document.querySelector('div.thumbnails');

    if(target.classList.contains('.active') != true) {
        // update the active <li> element
        document.querySelector('li.active').classList.remove('active');
        target.classList.add('active');

        // determine which button <li> was clicked
        if(target.classList.contains('thumbnails-sm')) {
            console.log('switch size to "sm');
            thumbnails.classList.remove('md');
            thumbnails.classList.remove('lg');
            thumbnails.classList.add('sm');
        } else  if(target.classList.contains('thumbnails-md')) {
            console.log('switch size to "md');
            thumbnails.classList.remove('sm');
            thumbnails.classList.remove('lg');
            thumbnails.classList.add('md');
        } else  if(target.classList.contains('thumbnails-lg')) {
            console.log('switch size to "lg');
            thumbnails.classList.remove('sm');
            thumbnails.classList.remove('md');
            thumbnails.classList.add('lg');
        }




    }

    console.log(target);
}

// liSm.addEventListener('click', thumbNailSizeHandler);
// liMd.addEventListener('click', thumbNailSizeHandler);
// liLg.addEventListener('click', thumbNailSizeHandler);


ulContainer.addEventListener('click', thumbNailSizeHandler);