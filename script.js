document.getElementById("menu-btn").addEventListener("click", function () {
  window.location.href = "menu.html";
});

const img = document.getElementById("menuImg");
img.src = "MENU.png?v=" + new Date().getTime();