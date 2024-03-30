let titulo = document.querySelector("h1");
titulo.innerHTML = 'Hora do desafio';
let cidade 
let numero1
let numerro2
let resultado
function botaoConsole(){
    console.log ('O botao foi clicado');
}
function botaoAlerta(){
    alert('Eu amo Js');
}
function botaoPrompt(){
    cidade = prompt('Você mora em qual cidade?');
    alert (`Estive em ${cidade} e me lembrei de você!!`);
}
function botaoSoma(){
    numero1 = Number(prompt('Digite um número'));
    numero2 = Number(prompt('Digite outro número'));
    resultado = numero1 + numero2
    alert(`Agora iremos mostrar o resultado da soma dos seus números ${numero1} e ${numero2}.`);
    alert(`A soma dos números escolhidos é igual a ${resultado}`);
}