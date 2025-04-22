document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("menu-btn");

  button.addEventListener("click", function () {
    window.open("MENU.pdf", "_blank"); 
  });
});

const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "style.css?v=" + new Date().getTime(); 
  document.head.appendChild(css);

document.getElementById("menu-btn").addEventListener("click", function () {
  const timestamp = new Date().getTime();
  window.open("menu.pdf?v=" + timestamp, "_blank");
});
