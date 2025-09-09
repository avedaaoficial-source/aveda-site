// Script para gerenciar hover e checkout
document.addEventListener("DOMContentLoaded", () => {
  // Hover nas imagens do catálogo
  document.querySelectorAll(".card img").forEach(img => {
    const hover = img.getAttribute("data-hover");
    if (hover) {
      const original = img.src;
      img.addEventListener("mouseover", () => img.src = hover);
      img.addEventListener("mouseout", () => img.src = original);
    }
  });

  // Função para salvar produto e ir para checkout
  function comprar(produto) {
    localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
    window.location.href = "checkout.html";
  }

  // Adicionar eventos nos botões
  document.querySelectorAll(".btn-comprar").forEach(botao => {
    botao.addEventListener("click", e => {
      e.preventDefault();
      const nome = botao.getAttribute("data-nome");
      const preco = parseFloat(botao.getAttribute("data-preco"));
      const imagem = botao.getAttribute("data-imagem");
      comprar({ nome, preco, imagem });
    });
  });
});
