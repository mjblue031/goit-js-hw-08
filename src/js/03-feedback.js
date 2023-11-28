//import lodash
import throttle from 'lodash.throttle';

try {
  let feedbackForm = document.querySelector('.feedback-form');
  let emailInput = document.getElementById('emailInput');
  let messageInput = document.getElementById('messageInput');
  let btnSubmit = document.getElementById('btnSUbmit');

  let throttledData = function (data) {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };

  feedbackForm.addEventListener('input', throttle(throttledData, 500));

  window.addEventListener('load', function () {
    let storedData = localStorage.getItem('feedback-form-state');

    if (storedData) {
      const { email, message } = JSON.parse(storedData);
      emailInput.value = email;
      messageInput.value = message;
    }
  });

  feedbackForm.addEventListener('submit', (eve) => {
    eve.preventDefault();

    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };

    console.log(formData);

    localStorage.clear();
    emailInput.value='';
    messageInput.value='';
  });
} catch (error) {
  console.log(error);
}
