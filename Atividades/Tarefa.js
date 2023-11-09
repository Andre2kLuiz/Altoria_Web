
let txt = document.getElementById('texto')
let btn = document.getElementById('btn')

let vet = []



function capturar(){
    vet.push(txt)
    console.log(vet)
    let cap = document.createElement('ol')
    let cap2 = document.createElement('li')
    cap2.appendChild(txt)
    cap.appendChild(cap2)

}