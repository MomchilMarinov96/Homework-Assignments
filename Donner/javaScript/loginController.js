(function () {
   
    let loginForm = document.getElementById('loginForm');    
    let wrongCredentialsError = document.getElementById('wrong_credentials_error');

    loginForm.addEventListener('submit', function (event) {

        event.preventDefault();
        const { username_field: { value: username }, password_field: { value: password } } = this.elements;

        if (userManager.validateCredentials(username, password)) {
            localStorage.setItem('isLogged', true);
            location.hash = 'main_page';
        } else {
            wrongCredentialsError.style.display = 'block';
        };

        this.reset();

    });

})()