window.addEventListener('DOMContentLoaded', function () {
    "use strict"; 
    let calck = require('./calck'),
        form = require('./form'),
        model = require('./model'),
        slider = require('./slider'),
        tabs = require('./tabs'),
        timer = require('./timer');

        calck();
        form();
        model();
        slider();
        tabs();
        timer();
});