function ex1(){
    var texto = document.getElementById("input1").value;
    document.getElementById("p1").innerText = texto;
}

// EX 2
function ex2(){
    var nome = document.getElementById("nome").value;
    document.getElementById("p2").innerText = "Olá, " + nome + "!";
}

// EX 3
function ex3(){
    var idade = document.getElementById("idade").value;
    if(idade >= 18){
        document.getElementById("p3").innerText = "Maior de idade";
    } else {
        document.getElementById("p3").innerText = "Menor de idade";
    }
}

// EX 4
function ex4(){
    document.body.style.backgroundColor = "lightblue";
}

// EX 5
var escuro = false;
function ex5(){
    if(escuro){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        escuro = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        escuro = true;
    }
}

// EX 6 + 7
function ex6(){
    var texto = document.getElementById("item").value;

    var li = document.createElement("li");
    li.innerText = texto + " ";

    var btn = document.createElement("button");
    btn.innerText = "Remover";

    // EX 7
    btn.onclick = function(){
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("lista").appendChild(li);
}


function ex7(elemento){
    elemento.remove();
}

// EX 8
function ex8(){
    var num = document.getElementById("numero").value;
    if(num % 2 == 0){
        document.getElementById("p8").innerText = "Par";
    } else {
        document.getElementById("p8").innerText = "Ímpar";
    }
}

// EX 9
function ex9(){
    var senha = document.getElementById("senha").value;
    if(senha.length >= 6){
        document.getElementById("p9").innerText = "Senha válida";
    } else {
        document.getElementById("p9").innerText = "Senha inválida";
    }
}

// EX 10
var total = 0;

function addNome(){
    var nome = document.getElementById("nomeCadastro").value;

    var li = document.createElement("li");
    li.innerText = nome;

    var btn = document.createElement("button");
    btn.innerText = "Remover";

    btn.onclick = function(){
        li.remove();
        total--;
        atualizarContador();
    };

    li.appendChild(btn);

    document.getElementById("listaCadastro").appendChild(li);

    total++;
    atualizarContador();
}

function atualizarContador(){
    document.getElementById("contador").innerText = "Total: " + total;
}
