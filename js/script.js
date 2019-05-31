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


});