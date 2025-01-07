// Navbar Toggle
const navbarToggle = document.querySelector("#hamburgerToggle");
const navigationLinks = document.querySelector("#navigationLinks");
navbarToggle.addEventListener("click", () => {
  if (navigationLinks.classList.contains("hidden")) {
    navigationLinks.classList.remove("hidden");
    navigationLinks.classList.toggle("active");
  } else {
    navigationLinks.classList.add("hidden");
    navigationLinks.classList.toggle("active");
  }
});
