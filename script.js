// Shopify mağaza linkini buradan tek yerden güncelle
const SHOPIFY_STORE_URL = "https://REPLACE-WITH-YOUR-STORE.myshopify.com";

document.querySelectorAll(".shop-link, #nav-shop-link").forEach((el) => {
  el.setAttribute("href", SHOPIFY_STORE_URL);
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
