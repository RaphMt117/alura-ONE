let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('h1', 'Acertou!')
        exibirTextoNaTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é maior do que ${chute}`)
        } else if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor do que ${chute}`)
        }
        tentativas++
        limparCampo()
    }
}

// gera numero entre 1 e 10
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

// desafio
// function helloWorld() {
//     console.log('Olá, mundo!')
// }
// function olaNome() {
//     let nome = prompt('Digite seu nome: ')
//     console.log(`Olá, ${nome}`)
// }
// function dobro(num) {
//     return num * 2
// }
// function media(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3
// }
// function maior(num1, num2) {
//     if (num1 > num2){
//         return num1
//     }else{
//         return num2
//     }
// }
// function quadrado(num) {
//     return num*num
// }
