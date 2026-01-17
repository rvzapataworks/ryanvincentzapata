// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Collapsible sections
document.querySelectorAll(".collapse-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen ? "View Monthly Activities" : "Hide Monthly Activities";
  });
});
