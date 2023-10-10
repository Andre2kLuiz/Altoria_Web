


function trocaCor (){

    const imput = document.getElementById("nome")
    alert(imput.value)

    if(imput.value.length < 5){
        imput.className = "erro"
        
    }
}

let pararagrafos = document.getElementsByTagName('p')
document.getElementById("div1").innerHTML = "O numero de paragrafo é " + pararagrafos.length

let article = document.getElementsByTagName("article")
let paragrafosArticle = article[0].getElementsByTagName("p")

//document.getElementById("div2").innerHTML = "O numero de d eparagrafos no article e " + paragrafosArticle.length


