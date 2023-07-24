/* const navbar = document.querySelector("#navBar--links");
const navbarLinks = document.querySelectorAll("navBar--link");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav); */



/**
 * header active
 */

const navBar = document.querySelector("#navBar");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    navBar.classList.add("navBar--active");
  } else {
    navBar.classList.remove("navBar--active");
  }
});