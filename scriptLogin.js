var login = document.querySelector('input#inpt-txt')
var password = document.querySelector('input#inpt-pass');
var answer = document.querySelector('div.res');

function send() {
    /*
    
    
    console.log(login.value)
    console.log(password.value)
    
    funcionando perfeitamente.

    */
    
    if (login.value == "bryan" && password.value == "12345"){
        window.alert('Você logou. Seja bem vindo!')

    }
         else {
            window.alert('Login e/ou Senha incorreto(s).')
        }
    
}

const switchBtn = document.querySelector('label.switch')
const sessao = document.querySelector('section#sessao')

function light () {
    if (switchBtn == true) {
        sessao.style.backgroundColor = 'grey'
    }
}