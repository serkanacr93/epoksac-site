// Sipariş/iletişim linkini buradan tek yerden güncelle
const WHATSAPP_NUMBER = "905465741867";
const WHATSAPP_MESSAGE = encodeURIComponent("Merhaba, Ay-Yıldız dekoratif obje hakkında bilgi almak istiyorum.");
const ORDER_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

document.querySelectorAll(".shop-link, #nav-shop-link").forEach((el) => {
  el.setAttribute("href", ORDER_LINK);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// Logo tıklanınca URL'de #top göstermeden en üste kaydır
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname + window.location.search);
  });
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
