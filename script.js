// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(() => loader.style.display = "none", 400);
});

// Reveal animations
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
},{threshold:.15});

reveals.forEach(el => observer.observe(el));

// Collapsible
document.querySelectorAll(".collapse-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const content = btn.nextElementSibling;
    const open = content.style.display==="block";
    content.style.display = open ? "none":"block";
    btn.textContent = open ? "View Monthly Activities":"Hide Monthly Activities";
  });
});
