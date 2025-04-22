const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "style.css?v=" + new Date().getTime();
document.head.appendChild(css);

const button = document.getElementById("menu-btn");
if (button) {
  button.addEventListener("click", function () {
    const timestamp = new Date().getTime();
    window.open("MENU.pdf?v=" + timestamp, "_blank");
  });
}