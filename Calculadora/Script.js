
let flag = true


function inserir (num){
    let numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
    flag = true
}

function inserirOp (op){
    if(flag === true){
        let numero = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML = numero + op
        flag = false
    }
}

function limpar (){
    document.getElementById('resultado').innerHTML = ""
}

function apagar (){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}