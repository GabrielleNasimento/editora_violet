const carrossel = document.querySelector('.carrossel');
const btnEsquerda = document.querySelector('.seta-esquerda');
const btnDireita = document.querySelector('.seta-direita');

const scrollAmount = 270;

btnDireita.addEventListener('click', () => {
  if (carrossel.scrollLeft + carrossel.offsetWidth >= carrossel.scrollWidth) {

    carrossel.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});

btnEsquerda.addEventListener('click', () => {
  if (carrossel.scrollLeft <= 0) {

    carrossel.scrollTo({ left: carrossel.scrollWidth, behavior: 'smooth' });
  } else {
    carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});


// barra de pesquisa

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const sugestoesLista = document.getElementById("sugestoes");


  const livros = Array.from(document.querySelectorAll(".card")).map(card => {
    return {
      titulo: card.querySelector(".text").textContent.trim(),
      img: card.querySelector("img").src,
      link: card.querySelector("a").href
    };
  });

  searchInput.addEventListener("input", () => {
    const termo = searchInput.value.toLowerCase();
    sugestoesLista.innerHTML = "";

    if (termo.length === 0) {
      sugestoesLista.style.display = "none";
      return;
    }

    const resultados = livros.filter(livro =>
      livro.titulo.toLowerCase().includes(termo)
    );

    if (resultados.length > 0) {
      sugestoesLista.style.display = "block";
      resultados.forEach(livro => {
        const li = document.createElement("li");

        li.innerHTML = `
          <img src="${livro.img}" alt="${livro.titulo}">
          <span>${livro.titulo}</span>
        `;

        li.addEventListener("click", () => {
          window.location.href = livro.link; 
        });

        sugestoesLista.appendChild(li);
      });
    } else {
      sugestoesLista.style.display = "none";
    }
  });


  document.addEventListener("click", (e) => {
    if (!document.getElementById("barra").contains(e.target)) {
      sugestoesLista.style.display = "none";
    }
  });
});