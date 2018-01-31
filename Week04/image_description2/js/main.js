var featureLink = document.querySelector('a.feature');

function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    if (featureImage.classList.contains('hidden')) {
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');
     var text = document.querySelector('a.feature.link').innerHTML = "Hide Barcelona";
   
    } else {
        featureImage.src = '';
        featureImage.classList.add('hidden');
         var text = document.querySelector('a.feature.link').innerHTML = "View Barcelona";
    }

    


    evt.preventDefault();
}



featureLink.addEventListener('click', featureLinkHandler);