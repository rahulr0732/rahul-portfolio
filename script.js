// Basic script for interactions

// Highlight active nav link automatically
const currentPage = location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Contact form (demo only)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", () => {
    alert("Your message has been submitted! (Demo only)");
  });
}
