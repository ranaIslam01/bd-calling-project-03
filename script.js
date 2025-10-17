  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  menuIcon.addEventListener("click", () => {
    mobileMenu.style.right = "0";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
  });

  // Click outside to close menu
  document.addEventListener(
    "click",
    (e) => {
      if (!mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        mobileMenu.style.right = "-100%";
      }
    },
    true
  );