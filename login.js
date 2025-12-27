function loginUser() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email && pass) {
    alert("Login successful!");
    window.location.href = "project1.html";
  } else {
    alert("Please enter valid credentials");
  }
}
