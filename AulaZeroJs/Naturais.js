
for(let i = 0; i <= 500; i++){
    console.log(i)
}

let n1 = 1
let n2 = 10
let soma = 0

for(n1; n1 <= n2; n1++){
    if(n1 % 2 == 0){
        soma = soma += n1
    }
}

console.log(soma)