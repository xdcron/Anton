const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const mobileNav = document.getElementById("nav-list");
const tabContainer = document.getElementById("tab-container");
const tabs = document.querySelectorAll(".tabs");
const tabContent = document.querySelectorAll(".content-container");
const moreInfo = document.getElementById("more-content");
const overlay = document.getElementById("overlay");
const btnModal1 = document.getElementById("show-modal-1");
const btnServices = document.getElementById("btn-services");
const serviceInfo = document.getElementById("services");
const closeModal = document.getElementById("close-modal");
const closeModal2 = document.getElementById("close-modal-2");
const nav__links = document.getElementById("nav-list");
const action = document.getElementById("action");

document.cookie = "myCookie=Strict; SameSite=Lax";

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

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn");
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach((t) => {
    t.classList.remove("bg-gold", "translate-y-[-10px]", "text-lightGold");
    t.classList.add("bg-lightGold", "text-gold");
  });
  clicked.classList.remove("bg-lightGold", "translate-y-[-10px]", "text-gold");
  clicked.classList.add("bg-gold", "translate-y-[-10px]", "text-lightGold");
  console.log(clicked.dataset.tab);
  // Activate content area
  tabContent.forEach((t) => t.classList.add("hidden"));
  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.remove("hidden");
});

btnModal1.addEventListener("click", () => {
  moreInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  moreInfo.classList.add("hidden");
  overlay.classList.add("hidden");
});

closeModal2.addEventListener("click", () => {
  serviceInfo.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  moreInfo.classList.add("hidden");
  overlay.classList.add("hidden");
  serviceInfo.classList.add("hidden");
});

btnServices.addEventListener("click", () => {
  serviceInfo.classList.remove("hidden");
  overlay.classList.remove("hidden");
  serviceInfo.classList.add("flex");
  serviceInfo.classList.add("flex-col");
});

window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  moreInfo.classList.add("hidden");
  overlay.classList.add("hidden");
});

nav__links.addEventListener("click", function (e) {
  e.preventDefault();
  // MATCHING STRATEGY
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
action.addEventListener("click", function (e) {
  e.preventDefault();
  // MATCHING STRATEGY
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// reveal section

const allSections = document.querySelectorAll(".section");
function revealSection(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  threshold: 0.05,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

console.log("hi");
