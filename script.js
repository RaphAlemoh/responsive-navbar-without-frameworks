const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

const openMobileNavbar = () => {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close mobile navigation menu.");
}


const closeMobileNavbar = () => {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open mobile navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  (navbar.classList.contains("opened") ? closeMobileNavbar() :  openMobileNavbar())
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);