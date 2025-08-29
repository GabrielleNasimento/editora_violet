const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.seta-esquerda');
const btnDireita = document.querySelector('.seta-direita');

const scrollAmount = 270;

btnDireita.addEventListener('click', () => {
  if (carrossel.scrollLeft + carrossel.offsetWidth >= carrossel.scrollWidth) {
    // Se chegou ao fim, volta pro começo
    carrossel.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});

btnEsquerda.addEventListener('click', () => {
  if (carrossel.scrollLeft <= 0) {
    // Se está no início, vai pro fim
    carrossel.scrollTo({ left: carrossel.scrollWidth, behavior: 'smooth' });
  } else {
    carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});


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






