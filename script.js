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
