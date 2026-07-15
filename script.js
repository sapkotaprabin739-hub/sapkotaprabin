// Login Function
function login() {

    // Get username and password
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Login Details
    const correctUsername = "admin";
    const correctPassword = "1234";

    // Check Login
    if (username === correctUsername && password === correctPassword) {

        alert("✅ Login Successful!");

        // Open Dashboard
        window.location.href = "index.html";   // यदि dashboard को नाम dashboard.html हो भने dashboard.html लेख

    } else {

        alert("❌ Invalid Username or Password!");

        // Clear Password
        document.getElementById("password").value = "";
        document.getElementById("password").focus();
    }
}

// Enter key support
document.addEventListener("DOMContentLoaded", function () {

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    password.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            login();
        }
    });

    username.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            password.focus();
        }
    });

});