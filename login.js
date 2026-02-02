const form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const em = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!em.includes("@")) {
    return alert("Invalid email");
  }
  if (pass.length < 6) {
    return alert("Password must be 6+ characters");
  }
  localStorage.setItem("loggedIn", "true");
  window.location.href = "index1.html";
});


