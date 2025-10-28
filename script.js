const botaoMostraPlavras = document.querySelector("#botao-palavrachave");

botaoMostraPlavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavraChave");
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ")
}
    
function processaTexto(texto){
let palavras = texto.split(/\P{L}+/u);

return palavras;

}