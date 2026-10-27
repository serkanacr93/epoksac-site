// Sipariş/iletişim linkini buradan tek yerden güncelle
const WHATSAPP_NUMBER = "905465741867";

// Sayfaya göre genel "Sipariş Ver / WhatsApp'tan Yaz" mesajı.
// Her sayfanın <body> etiketine data-context="ay-yildiz" / "minare-kubbe" / "duvar-kalip" eklenir.
const CONTEXT_MESSAGES = {
  "ay-yildiz": "Merhaba, Ay-Yıldız dekoratif obje hakkında bilgi almak istiyorum.",
  "minare-kubbe": "Merhaba, Minare & Kubbe projesi için teklif almak istiyorum.",
  "duvar-kalip": "Merhaba, Duvar Kalıbı projesi için teklif almak istiyorum.",
  "genel": "Merhaba, Epoksac ürünleri hakkında bilgi almak istiyorum."
};

const pageContext = document.body.getAttribute("data-context") || "genel";
const ORDER_MESSAGE = CONTEXT_MESSAGES[pageContext] || CONTEXT_MESSAGES.genel;
const ORDER_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ORDER_MESSAGE)}`;

document.querySelectorAll(".shop-link").forEach((el) => {
  el.setAttribute("href", ORDER_LINK);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// Minare / Kubbe / Duvar Kalıbı gibi özel sipariş butonları için ürüne özel mesaj
// (sayfa bağlamından daha spesifik olduğu için öncelikli kalır)
document.querySelectorAll(".shop-link-custom").forEach((el) => {
  const urun = el.getAttribute("data-urun") || "özel sipariş";
  const msg = encodeURIComponent(`Merhaba, ${urun} projesi için teklif almak istiyorum.`);
  el.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// Logo tıklanınca ana sayfanın en üstüne git
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
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

// Footer yılı
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Proje filtreleri
const filterWrap = document.getElementById("filters");
if (filterWrap) {
  filterWrap.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterWrap.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      document.querySelectorAll(".projeler-grid .proje-card").forEach((c) => {
        c.classList.toggle("hidden", f !== "all" && c.getAttribute("data-cat") !== f);
      });
    });
  });
}

// Teklif formu: bilgileri hazır WhatsApp mesajına çevirir
const quoteForm = document.getElementById("quote-form");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(quoteForm);
    const lines = [
      "Merhaba, teklif almak istiyorum.",
      `Ad Soyad: ${f.get("ad")}`,
      `Telefon: ${f.get("tel")}`,
      `Hizmet: ${f.get("hizmet")}`,
      f.get("sehir") ? `Şehir: ${f.get("sehir")}` : "",
      f.get("not") ? `Not: ${f.get("not")}` : "",
    ].filter(Boolean);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  });
}
