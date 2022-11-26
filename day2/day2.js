document.querySelector(".center").addEventListener("click", (e) => {
  document.querySelector(".center").classList.toggle("active");
  document.querySelectorAll(".init").forEach((temp) => temp.classList.remove("init"));
});
