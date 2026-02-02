
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

const side = document.getElementById("side");
const toggleBtn = document.getElementById("toggleBtn");


side.classList.remove("closed");
document.body.classList.add("shifted");

toggleBtn.addEventListener("click", () => {
  side.classList.toggle("closed");
  document.body.classList.toggle("shifted");
});

function add() {
  alert("Added to cart!");
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}
