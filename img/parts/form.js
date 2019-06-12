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