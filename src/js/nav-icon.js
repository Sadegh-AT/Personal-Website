let ico = document.querySelector("#nav-icon3");
let menu = document.querySelector(".menu-open");
ico.addEventListener("click", function () {
  this.classList.toggle("open");
  menu.classList.toggle("active");
  document.body.classList.toggle("oh");
});
