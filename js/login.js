document.getElementById("login-submit").addEventListener("click", function () {
    // get email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    // get password
    const passField = document.getElementById("user-password");
    const userPass = passField.value;

    // check password and email
    if (userEmail == "admin@admin.com" && userPass == "admin") {
        window.location.href = "banking.html"
    } else {
        console.log("invalid user")
    };
});