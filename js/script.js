var floatingTextFields = document.querySelectorAll('.floating-label input, .floating-label textarea'),
btnTriggerSearch = document.querySelector('.trigger-search'),
searchField = document.querySelector('.search-form [type="search"]'),
btnTriggerLogin = document.querySelector('.trigger-login'),
loginEmailField = document.querySelector('.login-form [name="email"]');

btnTriggerSearch.addEventListener('mouseenter', function(event) {
  searchField.focus();
});

btnTriggerLogin.addEventListener('mouseenter', function(event) {
  loginEmailField.focus();
});

function handleFloatingLabels(floatingTextFields) {
  Array.prototype.forEach.call(floatingTextFields, function(textField) {
    if (textField.value) {
      textField.parentElement.classList.add('floating-label--active');
    }

    textField.addEventListener('focus', function(event) {
      this.parentElement.classList.add('floating-label--active', 'floating-label--focusing');
    });

    textField.addEventListener('blur', function(event) {
      this.parentElement.classList.remove('floating-label--focusing');

      if (this.value) {
        this.parentElement.classList.add('floating-label--active');
      } else {
        this.parentElement.classList.remove('floating-label--active');
      }
    });
  });
}

handleFloatingLabels(floatingTextFields);
