const openBtn = document.querySelector(".mobile-btn");

const closeBtn = document.querySelector(".close-sidebar");

const sidebar = document.querySelector(".mobile-sidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
