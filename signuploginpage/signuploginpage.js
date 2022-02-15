function signup() {
    document.getElementById("signup-bg").style.display = "flex";
    document.getElementById("login-bg").style.display = "none";
}
function login() {
    document.getElementById("signup-bg").style.display = "none";
    document.getElementById("login-bg").style.display = "flex";
}
function reset_password() {
    document.getElementById("login-bg").style.display = "none";
    document.getElementById("reset_password-bg").style.display = "flex";
}
function back_to_login() {
    document.getElementById("login-bg").style.display = "flex";
    document.getElementById("reset_password-bg").style.display = "none";
}