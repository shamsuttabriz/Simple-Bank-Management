document.getElementById('btn-submit').addEventListener('click', function () {
    // get email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // checking email and password but it's not recommend for developer
    if (email === 'tabriz@gmail.com' && password === 'hello') {
        window.location.href = '../inside.html';
    }
    else {
        alert('Invalid user');
    }
});
