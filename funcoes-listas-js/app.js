let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
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

// desafio funções
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

// desafio arrays
// let listaGenerica = []
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')

// let nomes = ['nome1', 'nome2', 'nome3']
// console.log(nomes[0]) // primeiro elemento
// console.log(nomes[1]) // segundo elemento
// console.log(nomes[nomes.length - 1]) // ultimo elemento
