function alteraTexto() {
    document.getElementById("header").innerText = "Ola Mundo"
}


function soma (a, b){
    return a + b
}

let aula = soma

console.log(typeof soma)
console.log(typeof aula) 

soma = 7

console.log(typeof soma)


const subtração = (a, b) => {
    return a - b
}

console.log(`subtração tipo = ${typeof subtração}`)

console.log(subtração(10, 7))
console.log(aula(10, 7))


