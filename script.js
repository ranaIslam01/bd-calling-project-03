const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

if (menuIcon && mobileMenu && closeIcon) {
  const openMenu = () => {
    mobileMenu.style.right = "0";
  };

  const closeMenu = () => {
    mobileMenu.style.right = "-100%";
  };

  menuIcon.addEventListener("click", openMenu);
  closeIcon.addEventListener("click", closeMenu);

  // Close menu if clicked outside
  document.addEventListener(
    "click",
    (event) => {
      if (
        !mobileMenu.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        closeMenu();
      }
    },
    true
  )
}