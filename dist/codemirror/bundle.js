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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./parts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./parts/calck.js":
/*!************************!*\
  !*** ./parts/calck.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calck() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        totalValue = document.getElementById('total'),
        place = document.getElementById('select'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;
    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    place.addEventListener('change', function() {
        if(restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
          
        }
    });
};

module.exports = calck;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжимся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');


        class Forms {
            constructor(forms) {
                this.forms = forms;
            }
            sendForm() {
                this.forms.addEventListener('submit', function(event) {
                event.preventDefault();
                this.appendChild(statusMessage);
    
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
    
                let formData = new FormData(form);
                let obj ={};
                formData.forEach(function(value, key){
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
    
                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200 ) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                });
    
                for(let i= 0; i< input.length; i++) {
                    input[i].value = '';
                }
                 })
            }

        };
        let formSend = new Forms(form);
        let contactFormSend = new Forms(contactForm);
        formSend.sendForm();
        contactFormSend.sendForm();
        
};
module.exports = form;

/***/ }),

/***/ "./parts/model.js":
/*!************************!*\
  !*** ./parts/model.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function model() {
    
let btn1 = document.querySelectorAll('.description-btn')[0],
btn2 = document.querySelectorAll('.description-btn')[1],
btn3 = document.querySelectorAll('.description-btn')[2],
btn4 = document.querySelectorAll('.description-btn')[3];

let more = document.querySelector('.more'),
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close');

class Model {
    constructor(btn) {
        this.btn = btn;

    } 
    open() {
        
            overlay.style.display = 'block';
            this.btn.classList.add('more-splash');
            document.body.style.overflow = 'hidden';        
      
    }
};


more.addEventListener('click', function() {
    let a = new Model(more);
    a.open();
});

btn1.addEventListener('click', function() {
    let a = new Model(btn1);
    a.open();
});
btn2.addEventListener('click', function() {
    let a = new Model(btn2);
    a.open();
});
btn3.addEventListener('click', function() {
    let a = new Model(btn3);
    a.open();
});
btn4.addEventListener('click', function() {
    let a = new Model(btn4);
    a.open();
});



close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});
};

module.exports = model;

/***/ }),

/***/ "./parts/script.js":
/*!*************************!*\
  !*** ./parts/script.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
    "use strict"; 
    let calck = __webpack_require__(/*! ./calck */ "./parts/calck.js"),
        form = __webpack_require__(/*! ./form */ "./parts/form.js"),
        model = __webpack_require__(/*! ./model */ "./parts/model.js"),
        slider = __webpack_require__(/*! ./slider */ "./parts/slider.js"),
        tabs = __webpack_require__(/*! ./tabs */ "./parts/tabs.js"),
        timer = __webpack_require__(/*! ./timer */ "./parts/timer.js");

        calck();
        form();
        model();
        slider();
        tabs();
        timer();
});

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider(){
     
    let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');
showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item)=> item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }
function plusSlides(n){
showSlides(slideIndex += n)
};
function currenSlide(n) {
showSlides(slideIndex =n );
};
prev.addEventListener('click', function() {
    plusSlides(-1)
});
next.addEventListener('click', function()  {
    plusSlides(1);
});
dotsWrap.addEventListener('click', function(event) {
    for(let i= 0; i<dots.length +1; i++) {
        if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currenSlide(i);
        }
    }
} );
};
module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    
let tab = document.querySelectorAll('.info-header-tab'),
info = document.querySelector('.info-header'),
tabContent = document.querySelectorAll('.info-tabcontent');




function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        
    }
};

hideTabContent(1);

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('show');
        tabContent[b].classList.add('show');
        
    }
};

info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i] ) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});
};

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer () {
    
    let deadline = '2019-09-31';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),   
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor(((t/1000/60 ) % 60)),
            hours = Math.floor((t/(1000*60*60))); 

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
    };

    function setClock(id,endtime){
        let timer = document.getElementById('timer'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            };
             
            if (t.total <= 0){
                 hours.textContent = '00';
                 minutes.textContent = '00';
                 seconds.textContent = '00';

            };

            if(t.seconds <= 9 ) {
                seconds.textContent = `0${t.seconds}`;
            };
            if(t.minutes <= 9 ) {
                minutes.textContent = `0${t.minutes}`;
            };
            if(t.hours <= 9 ) {
                hours.textContent = `0${t.hours}`;
            };
        }

    };

    setClock(timer,deadline);
};
module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map