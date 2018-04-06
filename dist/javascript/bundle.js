/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_app_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_app_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_sliderDOM__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menus__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__menu_menus__);









if(navigator.serviceWorker)
    navigator.serviceWorker.register('../../sw.js');



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preloader_preloader__ = __webpack_require__(5);




let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubtitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#Slider-image");

let $textContent = document.querySelector("#slider-text-content");

// Start Controls

let $leftArrow = document.querySelector('.left-arrow');
let $rightArrow = document.querySelector('.right-arrow');

// end Controls

let slider = new __WEBPACK_IMPORTED_MODULE_0__slider__["a" /* default */]({
    elements: __WEBPACK_IMPORTED_MODULE_1__elements__["a" /* default */],
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

const imagePaths = __WEBPACK_IMPORTED_MODULE_1__elements__["a" /* default */].map(el => el.image);

__WEBPACK_IMPORTED_MODULE_2__preloader_preloader__["a" /* default */].preloadImages({
    images: imagePaths,
    completed: function(){
        document.querySelector(".controls").style.display = "block";
        
    }
})

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Slider{
    constructor({ elements, animationFunc, speed }){
        this.elements = elements;
        this.animationFunc = animationFunc;

        this.index = 0;
        this.size = elements.length;

        this.speed  = speed;

        this.innerNext = this.innerNext.bind(this);
        this.stop = this.stop.bind(this);''

        this.next= this.next.bind(this);
        this.prev= this.prev.bind(this);
    }

    innerNext(){
        this.index++;
        if(this.index >= this.size) this.index = 0;

        this.animationFunc(this.elements[this.index]);
    }

    innerPrev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;

        this.animationFunc(this.elements[this.index]);

    }

    next(){
        this.innerNext();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    prev(){
        this.innerPrev();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    play(){
       this.interval =  setInterval(this.innerNext,this.speed);
    }

    stop(){
        clearInterval(this.interval);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const elements = [
    {
        title: 'Creatividad',
        subtitle: 'Frontend',
        image: '../../../public/images/16.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        title: 'Lorem Ipsum 2',
        subtitle: 'Ipsum 2',
        image: '../../../public/images/reflection-computer-man.jpg',
        text: '2 Ut enim ad minim veniam, quis nostrud exercitation ullamco adipiscing elit, sed do eiusmod '
    },
    {
        title: 'Lorem Ipsum 3',
        subtitle: 'Ipsum 3',
        image: '../../../public/images/StockSnap_DO1KKRFQMB.jpg',
        text: '3 Ut enim ad minim veniam, quis nostrud exercitation ullamco adipiscing elit, sed do eiusmod '
    }

];

/* harmony default export */ __webpack_exports__["a"] = (elements);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Preloader{
    static preloadImages({images, completed}){
        const promises = images.map(imagePath => Preloader.preloadImage({imagePath}) );

        Promise.all(promises).then(completed);
    }

    static preloadImage({imagePath}){
        return new Promise((res,rej)=>{
            let image = new Image();
            image.src = imagePath;
            image.onload = res;
        })
    
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Preloader;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maps_styles__ = __webpack_require__(7);


function initMap(){

    const coords = {
      lat: 6.165076,
      lng: -75.629786 
    };

    let map = new google.maps.Map(document.getElementById('mapa'),{
        center: coords,
        zoom: 17,
        styles: __WEBPACK_IMPORTED_MODULE_0__maps_styles__["a" /* default */]
    });

    let marker = new google.maps.Marker({
        position: coords,
        map,
         title: 'OrbitX Dev House'
    })
}

initMap();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const blue = "#f5f5f5";
const label = "#2C3E50";
const accentRed = "#EE4364";
const green = "#468c56";
const black = "#28324A";
// const black = "#1f1f21";
const lightBlue = "#6DBCDB";
const roads = "#eadf8f";
const transit = "#d3ba74";





const grey3 = "#f5f5f5";




const styles = [
    {elementType: 'geometry', stylers: [{color: blue}]},
    {elementType: 'labels.text.stroke', stylers: [{color: "#ffffff"}]},
    {elementType: 'labels.text.fill', stylers: [{color: label}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: accentRed}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: label}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: blue}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: green}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: black}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: lightBlue}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: label}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: roads}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: roads}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: transit}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: lightBlue}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: label}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: label}]
    }
  ];

/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// abrir y cerrar menu

function scrollToElement(element){
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    });

}

document.querySelector(".menu")
    .addEventListener("click", function(){
        document.querySelector(".menu-screen").classList.add("active");
    });
document.querySelector(".close")
    .addEventListener("click", function(){
        document.querySelector(".menu-screen").classList.remove("active");
    });


let links = document.querySelectorAll(".menu-screen a");
    
 
    links.forEach(link => {
        link.addEventListener('click', function(ev){
            document.querySelector(".menu-screen").classList.remove("active");

            let paths = this.href.split("/");

            const selector = paths[paths.length - 1];

            ev.preventDefault();


            if(window.scrollTo) ev.preventDefault()

            scrollToElement(document.querySelector(selector));

            
            return !!window.scrollTo;
        })
    })



// export default menus;

/***/ })
/******/ ]);