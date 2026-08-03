let normal = "";
let shiny = "";
let trocou = false;

function callAPI() {

    let numero = document.getElementById("numero").value;
    let imagem = document.getElementById("imagem");
    let nome = document.getElementById("nome");
    let tipo = document.getElementById("tipo");

    if (numero < 1 || numero > 1025) {
        alert("Digite um número entre 1 e 1025.");
        return;
    }

    fetch("https://pokeapi.co/api/v2/pokemon/" + numero)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            nome.innerHTML = data.name;
            tipo.innerHTML = "Tipo: " + data.types[0].type.name;

            normal = data.sprites.front_default;
            shiny = data.sprites.front_shiny;

            imagem.src = normal;
            trocou = false;
        })
        .catch(function() {
            alert("Erro ao buscar o Pokémon.");
        });

}

function mostrarShiny() {

    let imagem = document.getElementById("imagem");

    if (normal == "") {
        alert("Busque um Pokémon primeiro.");
        return;
    }

    if (trocou == false) {
        imagem.src = shiny;
        trocou = true;
    } else {
        imagem.src = normal;
        trocou = false;
    }

}