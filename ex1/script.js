var nome = window.prompt('Olá, qual o seu nome?')

var nomes = nome.replaceAll('', '')
document.write(`Seja bem vindo ${nome} seja bem vindo ao meu primeiro site Js <br>`)
document.write(`Seu nome tem extamente ${nomes.length}`)