document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // para processar o envio da mensagem
    alert("Feedback enviado com sucesso!");

    // Resetar o formulário
    form.reset();
  });
});
