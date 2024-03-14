var a = window.document.getElementById('botao')

function clicar(){

    a.innerText = 'Clicou!!'
    a.style.backgroundColor ='rgb(128, 0, 0)' == a.style.backgroundColor ? 'rgb(0, 128, 0)' : 'rgb(128, 0, 0)'

}
function entrar(){
    
    a.innerText = 'Entrou!!'

}
function sair(){
  
    a.innerText = 'Saiu!!'
}