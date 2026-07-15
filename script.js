<script>
function login() {

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Username or Password!");
    }

}
</script>