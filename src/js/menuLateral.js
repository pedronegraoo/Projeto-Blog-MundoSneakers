// ABRIR MENU LATERAL MOBILE

const btnAbrirMenu = document.querySelector(".btn-abrir-menu-mobile");
const MenuMobile = document.querySelector(".menu-mobile");
const overlayMenuMobile = document.querySelector(".overlay-menu-mobile");

// Abrir Menu

btnAbrirMenu.addEventListener("click", () => {
  overlayMenuMobile.style.display = "block";
  MenuMobile.classList.add("abrir-menu");
});

// Fechar menu

MenuMobile.addEventListener("click", () => {
  overlayMenuMobile.style.display = "none";
  MenuMobile.classList.remove("abrir-menu");
});

overlayMenuMobile.addEventListener("click", () => {
  MenuMobile.classList.remove("abrir-menu");
  overlayMenuMobile.style.display = "none";
});
