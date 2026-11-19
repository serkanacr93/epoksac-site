
const WA="905386784637";
document.querySelectorAll("a.wa").forEach(a=>{const m=a.dataset.msg||"Merhaba, Epoksac ürünleri hakkında bilgi almak istiyorum.";a.href="https://wa.me/"+WA+"?text="+encodeURIComponent(m);a.target="_blank";a.rel="noopener"});
const nt=document.getElementById("nt"),nv=document.getElementById("nav");if(nt)nt.addEventListener("click",()=>nv.classList.toggle("open"));
const y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
