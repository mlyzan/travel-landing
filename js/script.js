window.addEventListener('DOMContentLoaded', function() {
'use strict';

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



//model
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

    //Timer
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

    //Form

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
        

        //Slider
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
    //Calc
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
 
});