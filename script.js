// Sipariş/iletişim linkini buradan tek yerden güncelle
const ORDER_LINK = "https://instagram.com/epoksac";

document.querySelectorAll(".shop-link, #nav-shop-link").forEach((el) => {
  el.setAttribute("href", ORDER_LINK);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// Mobil menü
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// Footer yılı
document.getElementById("year").textContent = new Date().getFullYear();
