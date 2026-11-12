
const WA="905465741867";
const hd=document.querySelector("header");
addEventListener("scroll",()=>hd.classList.toggle("solid",scrollY>40));
const nt=document.getElementById("nt"),nv=document.getElementById("nav");
if(nt)nt.addEventListener("click",()=>nv.classList.toggle("open"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const lb=document.getElementById("lb");
if(lb){document.querySelectorAll(".mos div,.sq div").forEach(d=>d.addEventListener("click",()=>{lb.querySelector("img").src=d.querySelector("img").src;lb.classList.add("on")}));
lb.addEventListener("click",()=>lb.classList.remove("on"));addEventListener("keydown",e=>{if(e.key==="Escape")lb.classList.remove("on")});}
document.querySelectorAll("a.wa").forEach(a=>{const m=a.dataset.msg||"Merhaba, Fibmod ürünleri hakkında bilgi almak istiyorum.";a.href="https://wa.me/"+WA+"?text="+encodeURIComponent(m);a.target="_blank";a.rel="noopener"});
const fl=document.getElementById("filters");
if(fl)fl.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{fl.querySelectorAll("button").forEach(x=>x.classList.remove("on"));b.classList.add("on");const f=b.dataset.f;document.querySelectorAll(".mos div").forEach(c=>c.classList.toggle("hide",f!=="all"&&c.dataset.c!==f))}));
const qf=document.getElementById("qf");
if(qf)qf.addEventListener("submit",e=>{e.preventDefault();const f=new FormData(qf);const l=["Merhaba, teklif almak istiyorum.","Ad Soyad: "+f.get("ad"),"Telefon: "+f.get("tel"),"Hizmet: "+f.get("hizmet"),f.get("sehir")?"Şehir: "+f.get("sehir"):"",f.get("not")?"Not: "+f.get("not"):""].filter(Boolean);window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(l.join("\n")),"_blank","noopener")});
const y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
