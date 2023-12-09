import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(
    '[aria-controls="mobile-menu"]'
  );
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    const expanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
    mobileMenuButton.setAttribute("aria-expanded", !expanded);
    mobileMenu.classList.toggle("hidden");
  });

  const profileButton = document.getElementById("user-menu-button");
  const profileDropdown = document.getElementById("profile-dropdown"); // Fix the ID here

  profileButton.addEventListener("click", function () {
    const expanded = profileButton.getAttribute("aria-expanded") === "true";
    profileButton.setAttribute("aria-expanded", !expanded);
    profileDropdown.classList.toggle("hidden");
  });
});
