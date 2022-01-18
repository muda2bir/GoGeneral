const navbar = document.querySelector(".navbar");
const menu_toggle = document.querySelector(".menu-toggle");

menu_toggle.onclick = function () {
  if (
    navbar.classList.contains("navbar--open") &&
    menu_toggle.classList.contains("open")
  ) {
    navbar.classList.remove("navbar--open");
    menu_toggle.classList.remove("open");
  } else {
    navbar.classList.add("navbar--open");
    menu_toggle.classList.add("open");
  }
};
