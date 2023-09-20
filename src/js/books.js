const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const mobileNav = document.getElementById("nav-list");
const nav__links = document.getElementById("nav-list");

menu.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
  menu.classList.add("hidden");
  mobileNav.classList.add("nav-list");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
  menu.classList.remove("hidden");
  mobileNav.classList.remove("nav-list");
});

nav__links.addEventListener("click", function (e) {
  e.preventDefault();
  // MATCHING STRATEGY
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
