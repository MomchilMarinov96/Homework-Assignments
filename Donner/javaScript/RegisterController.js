(function () {
let registerForm = document.getElementById('registerForm');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let userExistsError = document.getElementById('userExistsError');
let passMismatchError = document.getElementById('passMismatchError');
let registerBtn = document.getElementById('registerBtn');
let regUsername = document.getElementById('regUsername');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(this.elements);

    const {usernameFieldReg:{value:username}, passwordFieldReg: {value:password}}= this.elements;

    if (userManager.addUser(username, password)) {
        location.hash = 'login_page';
    } else {
        userExistsError.style.display = 'block';
    };

    this.reset();
})

registerForm.addEventListener('input', validateForm);

    function validateForm() {
        const regUsernameValue = regUsername.value;
        const passwordValue = password.value;
        const confirmPassValue = confirmPassword.value;

        if (regUsernameValue && passwordValue && confirmPassValue) {
            registerBtn.removeAttribute('disabled');
        } else {
            registerBtn.setAttribute('disabled', true);
        }

        if (passwordValue && confirmPassValue && passwordValue !== confirmPassValue) {
            passMismatchError.style.display = 'block';
            registerBtn.setAttribute('disabled', true);
        } else {
            passMismatchError.style.display = 'none';
        }

    }
})();
