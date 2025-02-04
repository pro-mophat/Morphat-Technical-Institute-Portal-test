// script.js
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if(username && password) {
        alert("Logged in successfully!");
        // You can integrate backend login logic here later
    } else {
        alert("Please fill in both fields.");
    }
});

document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if(username && email && password) {
        alert("Registered successfully!");
        // You can integrate backend registration logic here later
    } else {
        alert("Please fill in all fields.");
    }
});
