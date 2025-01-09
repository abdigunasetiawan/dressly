// Navbar Toggle
const navbarToggle = document.querySelector("#hamburgerToggle");
const navigationLinks = document.querySelector("#navigationLinks");
const mobileNavigationLinks = document.querySelector("#mobileNavigationLinks");
const navigationContainer = document.querySelector("nav#navbar .container");
navbarToggle.addEventListener("click", () => {
  navigationContainer.classList.toggle("active");

  if (navbarToggle.classList.contains("active")) {
    navbarToggle.innerHTML = '<path fill="#1B1314" fill-rule="evenodd" d="M2.708 5c0-.345.28-.625.625-.625h13.334a.625.625 0 1 1 0 1.25H3.333A.625.625 0 0 1 2.708 5Zm0 5c0-.345.28-.625.625-.625H10a.625.625 0 1 1 0 1.25H3.333A.625.625 0 0 1 2.708 10Zm0 5c0-.345.28-.625.625-.625h13.334a.625.625 0 1 1 0 1.25H3.333A.625.625 0 0 1 2.708 15Z" clip-rule="evenodd" />';
  } else {
    navbarToggle.innerHTML = '<path fill="#0D0B4E" d="M16.275 4.609a.625.625 0 1 0-.884-.884L10 9.116 4.609 3.725a.625.625 0 1 0-.884.884L9.116 10l-5.391 5.392a.625.625 0 0 0 .884.883L10 10.884l5.391 5.391a.625.625 0 0 0 .884-.883L10.884 10l5.391-5.391Z" />';
  }

  navbarToggle.classList.toggle("active");
});
