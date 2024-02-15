listaDeNumerosSorteados = [];
let numeroMaximo = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, "Brazilian Portuguese Male", {rate:2.0});
}

function exibirmensageminicial() {
    exibirTextoNaTela ("h1", "Que número é esse?");
exibirTextoNaTela ("p", "Estou pensando em um número entre 1 e 50");
}

exibirmensageminicial();

function verificarChute() {
 let chute = document.querySelector("input").value;
   
if (chute == numeroSecreto){
exibirTextoNaTela ("h1", "Acertou, miséra! ");
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
let mensagemTentativas = `Demorou, mas conseguiu. ${tentativas} ${palavraTentativa}`;
exibirTextoNaTela ("p", mensagemTentativas);
document.getElementById("reiniciar").removeAttribute ("disabled");
} else {
   if (chute > numeroSecreto) {
    exibirTextoNaTela ("p" , "O número é menor, tente novamente");
   } else {
    exibirTextoNaTela ("p" , "Ops, o número é maior, Tente outra vez");
   }
}
tentativas++;
limparCampo();
}
function gerarNumeroAleatorio() {
     let numeroEscolhido =  parseInt(Math.random () * numeroMaximo + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroMaximo); {
        listaDeNumerosSorteados = []
     }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados)
        return numeroEscolhido
    }
 }

function limparCampo() {
    chute = document.querySelector("input");
    chute.value="";
}

function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
    exibirmensageminicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
