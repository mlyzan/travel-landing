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