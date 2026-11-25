document.getElementById("formulario").addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let idade = document.getElementById("idade").value;
    let senha = document.getElementById("senha").value;
    let confirmacao = document.getElementById("confirmacao").value;

    if (nome == "" || email == "" || idade == "" || senha == "" || confirmacao == "") {
        alert("Preencha todos os campos!");
    }

    else if (!document.getElementById("email").checkValidity()) {
        alert("Digite um e-mail válido!");
    }

    else if (isNaN(idade) || Number(idade) <= 0) {
        alert("A idade deve ser um número maior que zero!");
    }

    else if (senha.length < 6) {
        alert("A senha deve possuir pelo menos 6 caracteres!");
    }

    else if (senha != confirmacao) {
        alert("As senhas não são iguais!");
    }

    else {
        alert("Os dados foram preenchidos corretamente!");
        document.getElementById("formulario").reset();
    }
});