let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function buttonConsole() {
    console.log('O botão foi clicado')
}

function buttonAlert() {
    alert('Eu amo JS')
}

function buttonPrompt() {
    cidade = prompt('Digite o nome de uma cidade do Brasil: ')
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function buttonSoma() {
    num1 = parseInt(prompt('Digite o primeiro número: '))
    num2 = parseInt(prompt('Digite o segundo número: '))
    soma = num1 + num2
    alert(`O resultado da soma é ${soma}`)
}
