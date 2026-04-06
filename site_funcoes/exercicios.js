// Exercicio 1: Par ou Impar
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "Seu numero e PAR";
    } else {
        return "Seu numero e IMPAR";
    }
}

function executar1() {
    var numero = document.getElementById("input1").value;
    var resultado = parOuImpar(numero);
    alert(resultado);
}

// Exercicio 2: Verificacao de Maioridade
function maiorOuMenor(idade) {
    if (idade < 18) {
        return "Voce e menor de idade";
    } else {
        return "Voce e maior de idade!";
    }
}

function executar2() {
    var idade = document.getElementById("input2").value;
    var resultado = maiorOuMenor(idade);
    alert(resultado);
}

// Exercicio 3: Contagem de 1 a 10
function contagem1a10() {
    var resultado = "";
    for (var i = 1; i < 11; i++) {
        resultado = resultado + i + " ";
    }
    return resultado;
}

function executar3() {
    var resultado = contagem1a10();
    alert(resultado);
}

// Exercicio 4: Contagem Regressiva
function contagemRegressiva(numero) {
    var resultado = "";
    var x = numero;
    while (x > 0) {
        resultado = resultado + x + " ";
        x--;
    }
    return resultado;
}

function executar4() {
    var numero = document.getElementById("input4").value;
    var resultado = contagemRegressiva(numero);
    alert(resultado);
}

// Exercicio 5: Tabuada
function tabuada(numero) {
    var resultado = "";
    for (var m = 1; m < 11; m++) {
        var multi = numero * m;
        resultado = resultado + numero + " x " + m + " = " + multi + "\n";
    }
    return resultado;
}

function executar5() {
    var numero = document.getElementById("input5").value;
    var resultado = tabuada(numero);
    alert(resultado);
}

// Exercicio 6: Somatorio
function somatoria(numero) {
    var resultado = 0;
    for (var s = 0; s <= numero; s++) {
        resultado = resultado + s;
    }
    return "A soma de 0 ate " + numero + " e: " + resultado;
}

function executar6() {
    var numero = parseInt(document.getElementById("input6").value);
    var resultado = somatoria(numero);
    alert(resultado);
}

// Exercicio 7: Numero Primo
function verificarPrimo(numero) {
    if (numero < 2) {
        return "Nao e primo";
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return numero + " NAO e primo";
        }
    }
    return numero + " E primo";
}

function executar7() {
    var numero = parseInt(document.getElementById("input7").value);
    var resultado = verificarPrimo(numero);
    alert(resultado);
}

// Exercicio 8: Login Simples
function loginSimples(usuario, senhaDigitada) {
    var senha = "12345";
    var login = "pietrorodrigues09";
    
    if (usuario == login) {
        if (senhaDigitada == senha) {
            return "Login concluido!";
        } else {
            return "Senha errada!";
        }
    } else {
        return "Usuario errado!";
    }
}

function executar8() {
    var usuario = document.getElementById("input8a").value;
    var senhaDigitada = document.getElementById("input8b").value;
    var resultado = loginSimples(usuario, senhaDigitada);
    alert(resultado);
}

// Exercicio 9: Soma de Numeros Positivos
function somaNumeros() {
    var soma = 0;

    while (true) {
        var number = parseFloat(prompt("Digite o numero para ser somado: "));

        if (number <= 0) {
            return soma;
        } else {
            soma = soma + number;
        }
    }
}

function executar9() {
    var resultado = somaNumeros();
    alert("A soma dos numeros digitados e: " + resultado);
}

// Exercicio 10: Adivinhacao
var numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinharNumero(palpite) {
    if (palpite == numeroSecreto) {
        var msg = "PARABENS! Voce acertou! O numero era " + numeroSecreto;
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
        return msg;
    } else if (palpite < numeroSecreto) {
        return "O numero e MAIOR!";
    } else {
        return "O numero e MENOR!";
    }
}

function executar10() {
    var palpite = parseInt(document.getElementById("input10").value);
    var resultado = adivinharNumero(palpite);
    alert(resultado);
}

function novoJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    alert("Novo jogo iniciado! Tente adivinhar o numero.");
    document.getElementById("input10").value = "";
}

// Exercicio 11: Calculo de Fatorial
function fatorial(numero) {
    if (numero < 0) {
        return "Fatorial nao existe para numeros negativos";
    }
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return "O fatorial de " + numero + " e: " + resultado;
}

function executar11() {
    var numero = parseInt(document.getElementById("input11").value);
    var resultado = fatorial(numero);
    alert(resultado);
}

// Exercicio 12: Validacao de Nota
function validarNota(nota) {
    if (nota >= 0 && nota <= 10) {
        return "Nota valida: " + nota;
    } else {
        return "Valor invalido! Digite uma nota de 0 a 10.";
    }
}

function executar12() {
    var nota = parseFloat(document.getElementById("input12").value);
    var resultado = validarNota(nota);
    alert(resultado);
}

// Exercicio 13: Media de Notas
function mediaNotas(nota1, nota2, nota3) {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        return "Digite apenas numeros validos!";
    }

    var media = (nota1 + nota2 + nota3) / 3;
    var resultado = "Media: " + media.toFixed(2) + "\n";

    if (media >= 7) {
        resultado += "Aprovado!";
    } else {
        resultado += "Reprovado!";
    }

    return resultado;
}

function executar13() {
    var nota1 = parseFloat(document.getElementById("input13a").value);
    var nota2 = parseFloat(document.getElementById("input13b").value);
    var nota3 = parseFloat(document.getElementById("input13c").value);
    var resultado = mediaNotas(nota1, nota2, nota3);
    alert(resultado);
}

// Exercicio 14: Caixa Eletronico
function caixaEletronico(valor) {
    var notas100 = Math.floor(valor / 100);
    valor = valor % 100;

    var notas50 = Math.floor(valor / 50);
    valor = valor % 50;

    var notas20 = Math.floor(valor / 20);
    valor = valor % 20;

    var notas10 = Math.floor(valor / 10);
    valor = valor % 10;

    var notas5 = Math.floor(valor / 5);
    valor = valor % 5;

    var notas2 = Math.floor(valor / 2);
    valor = valor % 2;

    var notas1 = valor;

    var resultado = "";
    resultado = resultado + "Notas de 100: " + notas100 + "\n";
    resultado = resultado + "Notas de 50: " + notas50 + "\n";
    resultado = resultado + "Notas de 20: " + notas20 + "\n";
    resultado = resultado + "Notas de 10: " + notas10 + "\n";
    resultado = resultado + "Notas de 5: " + notas5 + "\n";
    resultado = resultado + "Notas de 2: " + notas2 + "\n";
    resultado = resultado + "Notas de 1: " + notas1;
    return resultado;
}

function executar14() {
    var valor = parseInt(document.getElementById("input14").value);
    var resultado = caixaEletronico(valor);
    alert(resultado);
}

// Exercicio 15: Numeros Impares
function numerosImpares(numero) {
    var resultado = "";
    for (var i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            resultado = resultado + i + " ";
        }
    }
    return resultado;
}

function executar15() {
    var numero = parseInt(document.getElementById("input15").value);
    var resultado = numerosImpares(numero);
    alert(resultado);
}

// Carregar codigos quando a pagina abrir
function carregarCodigos() {
    document.getElementById("pre1").textContent = parOuImpar.toString();
    document.getElementById("pre2").textContent = maiorOuMenor.toString();
    document.getElementById("pre3").textContent = contagem1a10.toString();
    document.getElementById("pre4").textContent = contagemRegressiva.toString();
    document.getElementById("pre5").textContent = tabuada.toString();
    document.getElementById("pre6").textContent = somatoria.toString();
    document.getElementById("pre7").textContent = verificarPrimo.toString();
    document.getElementById("pre8").textContent = loginSimples.toString();
    document.getElementById("pre9").textContent = somaNumeros.toString();
    document.getElementById("pre10").textContent = adivinharNumero.toString();
    document.getElementById("pre11").textContent = fatorial.toString();
    document.getElementById("pre12").textContent = validarNota.toString();
    document.getElementById("pre13").textContent = mediaNotas.toString();
    document.getElementById("pre14").textContent = caixaEletronico.toString();
    document.getElementById("pre15").textContent = numerosImpares.toString();
}

carregarCodigos();