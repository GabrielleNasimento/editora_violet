
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const form = document.getElementById("formEmail");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      alert("E-mail válido! Sua mensagem foi enviada.");
      form.reset()
    } else {
      alert("E-mail inválido! Por favor, digite um e-mail correto.");
    }
  });
});
