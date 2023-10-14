
let flag = true
let cont = 0

/*Função para escrever na tela os números, concatenalos e liberar flag para operadores */

function inserir (num){
    if(cont === 0){
        document.getElementById('resultado').innerHTML = ""
        cont++
    }
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
    flag = true
}

/*Função para escrever operadores na tela e bloquear repetição seguidas de operadores */

function inserirOp (op){
    if(flag === true){
        let numero = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML = numero + op
        flag = false
    }
}

/*Limpar a tela */

function limpar (){
    document.getElementById('resultado').innerHTML = 0
    cont = 0
}

/*Apagar numero por numero da tela */

function apagar (){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
    if(resultado.length === 1){
        document.getElementById('resultado').innerHTML = 0
        cont = 0
    }
}

/*função de caulculo dos numeros usando eval. calculando em string sem usar o typecast */

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}