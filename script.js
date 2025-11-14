const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.seta-esquerda');
const btnDireita = document.querySelector('.seta-direita');

const scrollAmount = 270;

// Funções de scroll
function scrollDireita() {
  if (carrossel.scrollLeft + carrossel.offsetWidth >= carrossel.scrollWidth) {
    carrossel.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function scrollEsquerda() {
  if (carrossel.scrollLeft <= 0) {
    carrossel.scrollTo({ left: carrossel.scrollWidth, behavior: 'smooth' });
  } else {
    carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

// Eventos de clique
btnDireita.addEventListener('click', scrollDireita);
btnEsquerda.addEventListener('click', scrollEsquerda);

// Auto-scroll
let autoScroll = setInterval(scrollDireita, 3000);

// Pausar ao passar o mouse
carrossel.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

// Retomar quando o mouse sair
carrossel.addEventListener('mouseleave', () => {
  autoScroll = setInterval(scrollDireita, 3000);
});

// Barra


const searchInput = document.querySelector('.search-bar');
const cards = document.querySelectorAll('.card');

function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

searchInput.addEventListener('input', function () {
  const value = normalizeText(this.value);

  cards.forEach(card => {
    const titleElement = card.querySelector('.text');
    const title = normalizeText(titleElement.textContent);
    card.style.display = title.includes(value) ? 'block' : 'none';
  });
});

const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.parentElement;
      parentItem.classList.toggle('active');
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const form = document.getElementById("formEmail");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      alert("E-mail válido! Sua mensagem foi enviada.");
      form.reset()
    } else {
      alert("E-mail inválido! Por favor, digite um e-mail correto.");
    }
  });
});



