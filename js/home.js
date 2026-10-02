console.log("Script has loaded")

function toggleMenu() {
  const menu = document.getElementById("menu");
  const btn = document.getElementById("nav-menu");
  
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    btn.innerHTML = "Close";
  } else {
    btn.innerHTML = "Menu";
  }
}