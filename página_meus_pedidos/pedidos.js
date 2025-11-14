const pedidos = {
      1:{titulo:'Casa da Bamba',autor:'João Silva',status:'Entregue',preco:'39,90',descricao:'Romance contemporâneo sobre música, cultura e memória.'},
      2:{titulo:'Poemas do Norte',autor:'Maria Andrade',status:'Em processamento',preco:'29,90',descricao:'Coletânea poética sobre paisagens do norte.'},
      3:{titulo:'Manual do Editor',autor:'Equipe Técnica',status:'Pendente',preco:'49,90',descricao:'Guia completo para autores independentes.'},
    };

    document.querySelectorAll('[data-open]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const id = btn.getAttribute('data-open');
        const p = pedidos[id];
        document.getElementById('modalContent').innerHTML = `
          <h2>${p.titulo}</h2>
          <p><strong>Autor:</strong> ${p.autor}</p>
          <p><strong>Status:</strong> ${p.status}</p>
          <p><strong>Preço:</strong> R$ ${p.preco}</p>
          <p style='margin-top:10px'>${p.descricao}</p>
        `;
        document.getElementById('modal').style.display='flex';
      });
    });

    document.getElementById('closeModal').addEventListener('click',()=>{
      document.getElementById('modal').style.display='none';
    });