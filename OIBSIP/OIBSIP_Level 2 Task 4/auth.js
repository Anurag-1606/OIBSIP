document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');

    // Handle registration
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            alert('Registration successful! You can now login.');
            window.location.href = 'login.html';
        });
    }

    // Handle login
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                sessionStorage.setItem('loggedIn', 'true');
                alert('Login successful!');
                window.location.href = 'secured.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            sessionStorage.removeItem('loggedIn');
            alert('Logged out successfully!');
            window.location.href = 'login.html';
        });
    }

    // Protect secured page
    if (window.location.pathname.endsWith('secured.html') && !sessionStorage.getItem('loggedIn')) {
        alert('You must be logged in to view this page.');
        window.location.href = 'login.html';
    }
});
