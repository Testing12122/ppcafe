// Funkce pro zobrazení animovaných prvků při scrollování
function revealOnScroll() {
  const fadeIns = document.querySelectorAll('.fade-in');
  fadeIns.forEach((element) => {
    const elementPos = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPos < windowHeight - 50) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);
