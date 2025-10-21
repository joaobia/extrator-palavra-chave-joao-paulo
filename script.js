const botaoMostraPlavras = document.querySelector("#botao-palavrachave");

botaoMostraPlavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavraChave");
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(", ")
}