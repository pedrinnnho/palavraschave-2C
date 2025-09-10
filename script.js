import {PALAVRAS_RUINS} from"./palavrasruins.js";

const botaoMostraPavalvras = document.querySelector('#botao-PalavrasChave');

botaoMostraPavalvras.addEventListener('click',mostraPalavrasChave);

function mostraPalavrasChave () {
    const texto = document. querySelector ('#entrada-de-texto').value;
    const CampoResultado = document.querySelector ('#resultado-PalavrasChave)
    const PalavrasChave = ProcessaTexto (texto);

CampoResultado.textContent = PalavrasChave.join(",")
}
