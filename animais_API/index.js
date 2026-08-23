let animais = ["cachorro", "gato", "urso", "raposa", "pato"];

function Animal() {

    let imagem = document.getElementById("imagem");
    let nome = document.getElementById("nome");

    // Sorteia um número
    let numero = Math.floor(Math.random() * animais.length);

    // Escolhe o animal
    let animal = animais[numero];

    nome.innerHTML = animal;


    
    if (animal == "cachorro") {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                imagem.src = data.message;
            })
            .catch(function() {
                alert("Erro ao buscar a imagem do cachorro.");
            });
    }


    
    if (animal == "gato") {

        fetch("https://api.thecatapi.com/v1/images/search")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                imagem.src = data[0].url;
            })
            .catch(function() {
                alert("Erro ao buscar a imagem do gato.");
            });
    }


    
    if (animal == "urso") {

        imagem.src = "https://placebear.com/200/300";
    }
    //Nao estava indo do jeito padrão;


   
    if (animal == "raposa") {

        fetch("https://randomfox.ca/floof/")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                imagem.src = data.image;
            })
            .catch(function() {
                alert("Erro ao buscar a imagem da raposa.");
            });
    }


    
    if (animal == "pato") {

        fetch("https://api.openverse.org/v1/images/?q=duck&per_page=1")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                imagem.src = data.results[0].thumbnail;
            })
            .catch(function() {
                alert("Erro ao buscar a imagem do pato.");
            });
    }
}

