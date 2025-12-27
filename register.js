function registerUser() {
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (pass.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match");
    return;
  }

  alert("Registration successful!");
  window.location.href = "login.html";
}
