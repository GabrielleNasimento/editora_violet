const scrollAmount = 270;

// Seleciona TODOS os carrosséis
document.querySelectorAll('.carrossel-container').forEach(container => {

  const carrossel = container.querySelector('.carrossel');
  const btnEsquerda = container.querySelector('.seta-esquerda');
  const btnDireita = container.querySelector('.seta-direita');

  // Armazena os cards originais
  let cardsOriginais = Array.from(carrossel.children);
  let cloneIndex = 0;

  function duplicarItem() {
    const clone = cardsOriginais[cloneIndex].cloneNode(true);
    carrossel.appendChild(clone);
    cloneIndex = (cloneIndex + 1) % cardsOriginais.length;
  }

  // ---- Movimentos ----
  function scrollDireita() {
    carrossel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    duplicarItem();
  }

  function scrollEsquerda() {
    // Se estiver no começo, duplica atrás também
    if (carrossel.scrollLeft <= 0) {
      const ultimo = cardsOriginais[cardsOriginais.length - 1].cloneNode(true);
      carrossel.prepend(ultimo);
      carrossel.scrollLeft += scrollAmount;
    }

    carrossel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }

  // ---- Eventos ----
  btnDireita.addEventListener("click", scrollDireita);
  btnEsquerda.addEventListener("click", scrollEsquerda);

  // Auto-scroll independente
  let autoScroll = setInterval(scrollDireita, 2000);

  carrossel.addEventListener("mouseenter", () => clearInterval(autoScroll));
  carrossel.addEventListener("mouseleave", () => {
    autoScroll = setInterval(scrollDireita, 2000);
  });
});


// Barra de pesquisa 

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
