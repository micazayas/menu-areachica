document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("menu-btn");

  button.addEventListener("click", function () {
    window.open("MENU.pdf", "_blank"); 
  });
});