const items = document.querySelectorAll(".item_a");
let current = null;

items.forEach((item) => {
  item.addEventListener("click", handle);
  function handle() {
    current?.classList.remove("active");
    item.classList.add("active");
    current = item;
  }
});

// Navbar button media
const navbarButton = document.querySelector(".bx-menu-alt-left");
const navbarClose = document.querySelector(".close");
const mediaItems = document.querySelectorAll(".media");

navbarButton.addEventListener("click", () => {
  mediaItems.forEach((item) => {
    item.classList.add("navbarButton");
  });
});
navbarClose.addEventListener("click", () => {
  mediaItems.forEach((item) => {
    item.classList.remove("navbarButton");
  });
});
