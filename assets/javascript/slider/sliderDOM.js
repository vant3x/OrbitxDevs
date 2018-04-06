import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#Slider-image");

let $textContent = document.querySelector("#slider-text-content");

// Start Controls

let $leftArrow = document.querySelector('.left-arrow');
let $rightArrow = document.querySelector('.right-arrow');

// end Controls

let slider = new Slider({
    elements,
    animationFunc: function(element){
       $textContent.classList.add('hide');
       sliderImage.classList.add('hide');

       setTimeout(function(){
          

            sliderTitle.innerHTML = element.title;
            sliderText.innerHTML = element.text;
            sliderSubtitle.innerHTML = element.subtitle;
            sliderImage.src = element.image;

            // animation remove
            $textContent.classList.remove('hide');
            sliderImage.classList.remove('hide');
       },600);

     
    },
    speed: 5000
});

slider.play();

// function controls

$leftArrow.addEventListener('click', slider.prev);
$rightArrow.addEventListener('click', slider.next);

const imagePaths = elements.map(el => el.image);

Preloader.preloadImages({
    images: imagePaths,
    completed: function(){
        document.querySelector(".controls").style.display = "block";
        
    }
})