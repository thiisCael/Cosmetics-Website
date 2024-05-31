const swiper = new Swiper(".swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
//Menu - responsividade
const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-mob");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("mostrar-menu");
});

$(function () {
  const toggleMenu = (e) => {
    e.preventDefault();
    $(e.currentTarget).next(".lista-menu").toggleClass("show");
  };

  $(".link").on("click", toggleMenu);
});
// aplicando desconto de 25%
document.addEventListener("DOMContentLoaded", () => {
  const btnDesconto = document.querySelector(".btn-desconto");
  const precos = document.querySelectorAll(".preco");

  btnDesconto.addEventListener("click", () => {
    alert("Parabéns! Você ganhou 25% de desconto.");

    precos.forEach((preco) => {
      let precoAntigo = preco.querySelector(".preco-antigo");
      let precoNovo = preco.querySelector(".preco-novo");

      if (!precoAntigo.classList.contains("descontado")) {
        let valorAtual = parseFloat(
          precoAntigo.textContent.replace("R$", "").replace(",", ".")
        );
        let valorComDesconto = (valorAtual * 0.75).toFixed(2).replace(".", ",");

        precoNovo.textContent = `R$${valorComDesconto}`;

        precoAntigo.classList.add("descontado");
        precoNovo.classList.add("novo");
      }
    });
  });
});
