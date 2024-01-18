let nome = prompt('Digite seu nome: ')
alert(`Boas vindas ao jogo do numero secreto, ${nome}!`)

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let tentativa
let qtdTentativas = 1

while (tentativa != numeroSecreto) {
    tentativa = prompt(`Escolha um numero de 0 a ${numeroMaximo}: `)

    if (tentativa == numeroSecreto) {
    } else {
        if (tentativa < numeroSecreto) {
            alert('Essa não! Você errou o número secreto!')
            alert(`O número secreto é maior que ${tentativa}`)
        } else if (tentativa > numeroSecreto) {
            alert('Essa não! Você errou o número secreto!')
            alert(`O número secreto é menor que ${tentativa}`)
        }
        qtdTentativas++
    }
}

// ternário
let palavraTentativa = qtdTentativas > 1 ? 'tentativas' : 'tentativa'
alert(
    `Parabéns, ${nome}! Você descobriu o número secreto (${numeroSecreto}), com ${qtdTentativas} ${palavraTentativa}!`,
)

// Desafio ---------------------------------
// let idade = prompt('Digite sua idade: ')
// if (idade > 18) {
//     alert('Pode tirar habilitação!😄')
// } else {
//     alert('Não pode tirar habilitação 🥲')
// }
// let numeroDeVendas = 50
// let saldoDisponivel = 1000
// let mensagemDeErro = 'Erro! Preencha todos os campos!'
// alert(mensagemDeErro)
// -----------------------------------------
