const $center = document.querySelector(".center");
const $inits = document.querySelectorAll(".init");

$center.addEventListener("click", () => {
  $center.classList.toggle("active");
  $inits.forEach((init) => init.classList.remove("init"));
});
