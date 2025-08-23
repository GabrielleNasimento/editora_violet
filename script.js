const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.seta-esquerda');
const btnDireita = document.querySelector('.seta-direita');

const scrollAmount = 270; // ajuste para largura do card + gap

btnDireita.addEventListener('click', () => {
  carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

btnEsquerda.addEventListener('click', () => {
  carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});





