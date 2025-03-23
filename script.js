function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


var loader = document.getElementById("per-loader");
window.addEventListener("load", function(){
  setTimeout(function(){
    loader.style.display = "none";
  }, 1500);
});