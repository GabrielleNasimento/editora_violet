const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.seta-esquerda');
const btnDireita = document.querySelector('.seta-direita');

<<<<<<< HEAD
const scrollAmount = 270; // ajuste para largura do card + gap

btnDireita.addEventListener('click', () => {
  carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

btnEsquerda.addEventListener('click', () => {
  carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
=======
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
>>>>>>> a8c750b (Algumas das páginas de livro feitas)
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
<<<<<<< HEAD
});
=======
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





>>>>>>> a8c750b (Algumas das páginas de livro feitas)
