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

document.addEventListener('DOMContentLoaded', function () {
  // Inicialmente mostra o conteúdo do autor ativo (Rick Riordan)
  mostrarConteudoAutor('riordan');

  // Adiciona evento de clique para cada imagem do slider
  document.querySelectorAll('.slider-img').forEach(function (item) {
    item.addEventListener('click', function () {
      const autor = this.getAttribute('data-autor');
      mostrarConteudoAutor(autor);
    });
  });

  function mostrarConteudoAutor(autor) {
    // Oculta todos os conteúdos de autores
    document.querySelectorAll('.conteudo-autor').forEach(function (conteudo) {
      conteudo.classList.remove('ativo');
    });

    // Oculta a mensagem de sem conteúdo
    document.getElementById('sem-conteudo').style.display = 'none';

    // Mostra o conteúdo do autor selecionado
    const conteudoAutor = document.getElementById('conteudo-' + autor);
    if (conteudoAutor) {
      conteudoAutor.classList.add('ativo');
    }
  }
});





