(function () {
  'use strict';
  let form = document.querySelector('#contactForm');
  form.addEventListener('submit', function (event) {
    //stoping page reloading
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      // validation passed sending a mail
      let sendData = {
        from_email: form.querySelector('#email').value,
        from_name: form.querySelector('#name').value,
        from_phone: form.querySelector('#phone').value,
        message: form.querySelector('#message').value,
      };
      emailjs
        .send('service_njgj11u', 'template_zgyccib', sendData)
        .then((res) => {
          alert('success, your message was send without any problems');
        })
        .catch((err) => {
          alert('your message wasnt send please try latter');
        })
        .finally(() => {
          form.classList.remove('was-validated');
          form.reset();
        });
    }

    form.classList.add('was-validated');
  });
})();
