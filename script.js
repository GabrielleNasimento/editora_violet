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


document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById('searchInput');
  const sugestoesLista = document.getElementById('sugestoes');

  // Captura todos os cards (com link + texto + imagem)
  const cards = document.querySelectorAll('.carrossel .card');
  const dados = Array.from(cards).map(card => {
    const a = card.querySelector('a');
    const text = card.querySelector('.text');
    const img = card.querySelector('img');
    if (!a || !text || !img) return null;
    return {
      nome: text.textContent.toLowerCase().trim(),
      nomeOriginal: text.textContent.trim(),
      link: a.getAttribute('href'),
      imagem: img.getAttribute('src')
    };
  }).filter(Boolean);

  searchInput.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase().trim();
    sugestoesLista.innerHTML = '';

    if (value === '') {
      sugestoesLista.style.display = 'none';
      return;
    }

    const resultados = dados.filter(item => item.nome.includes(value));

    if (resultados.length > 0) {
      sugestoesLista.style.display = 'block';
      resultados.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('sugestao-item');

        li.innerHTML = `
          <img src="${item.imagem}" alt="${item.nomeOriginal}">
          <span>${item.nomeOriginal}</span>
        `;

        li.addEventListener('click', () => {
          window.location.href = item.link;
        });

        sugestoesLista.appendChild(li);
      });
    } else {
      sugestoesLista.style.display = 'none';
    }
  });

  document.addEventListener('click', (e) => {
    if (!document.querySelector('.barra-pesquisa').contains(e.target)) {
      sugestoesLista.style.display = 'none';
    }
  });
});
