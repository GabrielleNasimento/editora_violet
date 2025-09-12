

document.addEventListener("DOMContentLoaded", () => {
    const logarBtn = document.getElementById("logar");
    const emailInput = document.querySelector("input[placeholder='E-mail']");
    const senhaInput = document.querySelector("input[placeholder='Senha']");

    logarBtn.addEventListener("click", (e) => {
        e.preventDefault(); 

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();


        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }

        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        alert("Login válido!");
    });
});
