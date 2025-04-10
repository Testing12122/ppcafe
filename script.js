// Funkce pro odhalení (reveal) animovaných sekcí
function revealOnScroll() {
  const fadeIns = document.querySelectorAll('.fade-in');

  fadeIns.forEach((element) => {
    const elementPos = element.getBoundingClientRect().top; 
    const windowHeight = window.innerHeight;

    // Pokud je element ve viditelné části obrazovky, přidáme mu třídu show
    if (elementPos < windowHeight - 50) {
      element.classList.add('show');
    }
  });
}

// Při scrollu voláme funkci revealOnScroll
window.addEventListener('scroll', revealOnScroll);

// Voláme také při načtení stránky
document.addEventListener('DOMContentLoaded', revealOnScroll);
