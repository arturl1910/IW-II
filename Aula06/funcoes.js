// a) Maior entre dois números
function maiorNumero() {
    let a = Number(prompt("Digite o primeiro número para comparar qual é maior:"));
    let b = Number(prompt("Digite o segundo número para comparar qual é maior:"));

    if (a > b) {
        console.log("Maior número: " + a);
        alert("O maior número é: " + a);
    } else {
        console.log("Maior número: " + b);
        alert("O maior número é: " + b);
    }
}

maiorNumero();


// b) Verificar se é par
function ehPar() {
    let numero = Number(prompt("Digite um número para saber se ele é par ou ímpar:"));

    if (numero % 2 === 0) {
        console.log(true);
        alert("O número é PAR");
    } else {
        console.log(false);
        alert("O número é ÍMPAR");
    }
}

ehPar();


// c) Fatorial
function fatorial() {
    let n = Number(prompt("Digite um número para calcular o fatorial:"));
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    console.log("Fatorial: " + resultado);
    alert("O fatorial de " + n + " é: " + resultado);
}

fatorial();


// d) Média de uma lista
function media() {
    let quantidade = Number(prompt("Quantos números você quer digitar para calcular a média?"));
    let soma = 0;

    for (let i = 0; i < quantidade; i++) {
        let num = Number(prompt("Digite um número para a média:"));
        soma += num;
    }

    let resultado = soma / quantidade;

    console.log("Média: " + resultado);
    alert("A média dos números é: " + resultado);
}

media();


// e) Celsius para Fahrenheit
function celsiusParaFahrenheit() {
    let c = Number(prompt("Digite a temperatura em Celsius para converter para Fahrenheit:"));
    let f = (c * 9/5) + 32;

    console.log("Fahrenheit: " + f);
    alert("A temperatura em Fahrenheit é: " + f);
}

celsiusParaFahrenheit();