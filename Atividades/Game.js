let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")

const imagem = new Image()
imagem.src = "/Img/raio.png"

tela.style.border="3px solid black"

const largura = 250
const altura = 200

let posX = 0
let posY = 0

function draw(){
    ctx.clearRect(0, 0, 800, 800)
    ctx.drawImage(imagem, 250, 250, largura, altura, posX, posY, largura, altura)
}


let rungame = setInterval(draw, 300)

window.addEventListener('keydown', (event)=>{
    if(event.key === "a" && posX > 0){
        posX -= 20
    }else if(event.key === "d" && posX < 550){
        posX+= 20
    }
    if(event.key === "w" && posY > 0){
        posY -= 20
    }else if(event.key === "s" && posY < 600){
        posY += 20
    }
})
    
    

