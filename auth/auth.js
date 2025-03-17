document.addEventListener("DOMContentLoaded", function () {
    // LOGIN HANDLER
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("login-email").value; 
            const password = document.getElementById("login-password").value;
            const loginError = document.getElementById("login-error");

            const storedUser = JSON.parse(localStorage.getItem(email));

            if (storedUser && storedUser.password === password) {
                localStorage.setItem("loggedInUser", email);
                alert("Login successful!");
                window.location.href = "../event_front.html";
            } else {
                loginError.textContent = "Invalid email or password.";
            }
        });
    }

    // SIGN-UP HANDLER
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("register-name").value;
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const registerError = document.getElementById("register-error");

            if (password !== confirmPassword) {
                registerError.textContent = "Passwords do not match!";
                return;
            }

            localStorage.setItem(email, JSON.stringify({ name, password }));
            alert("Registration successful! Please login.");
            window.location.href = "login.html";
        });
    }

    // LOGOUT HANDLER
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");
            alert("Logged out successfully!");
            window.location.href = "auth/login.html"; // Correct path for redirection
        });
    }

    // LOGIN STATE CHECK
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const loginLink = document.querySelector(".login-link");
        const signupLink = document.querySelector(".signup-link");
        if (loginLink) loginLink.style.display = "none";
        if (signupLink) signupLink.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "block";
    }
});