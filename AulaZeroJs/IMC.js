let peso = document.querySelector("#peso")
let altura = document.querySelector("#numero")
let btn = document.querySelector("#botao")


let IMC = peso / (altura * altura)


if(IMC < 18.5){
    console.log("Abaixo do peso normal")
}else if(IMC > 18.5 && IMC < 24.9){
    console.log("Peso normal")
}else if(IMC >= 25.0 && IMC < 29.9){
    console.log("Exelente peso")
}else if(IMC >= 30.0 && IMC < 34.9){
    console.log("Obesidade classe 1")
}else if(IMC >= 35.0 && IMC < 39.9){
    console.log("Obesidade classe 2")
}else if(IMC > 40){
    console.log("Obesidade classe 3")
}


