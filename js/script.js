function toScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("nav-trans");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("nav-trans");
    }
  });
}
document.addEventListener("DOMContentLoaded", toScroll);
