//exiba mensagem de boas vindas
alert ("Bem-vindo");

//Nome
let nome = prompt("Qual é seu nome ?");
alert("Seu nome é,"+nome + "!");

//idade
let idade = prompt("Qual a sua idade ?");
if (idade>=18) {
    alert("Você é maior de idade");
} else {
    alert("Você é menor de idade");
}

//confirmar
let resposta = confirm("Você deseja continuar ?");
if (resposta) {
    alert("Você escolheu continuar");
} else {
    alert("Você cancelou a ação");
}

//duasvariaveis
let n1 = prompt("digite o numero 1");
let n2 = prompt("digite o numero 2");
let soma = parseFloat(n1) + parseFloat(n2);
alert("a soma e igual á: "+ soma+ "!");

//dobro número
let num = prompt("digite o número");
let mult = parseFloat(num)*2;
alert("O dobro do número e igual á: "+ mult+ "!");

//script
let name = prompt("qual é seu nome ?");
let years = prompt("qual a sua idade ?");
alert("bom dia "+name +", voce tem " +years +", está liberado para jogar");
alert("fim do programa");