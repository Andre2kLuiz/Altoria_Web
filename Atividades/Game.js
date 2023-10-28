let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")

tela.style.border="3px solid black"

const teclado ={
    sima:false,
    baixo:false,
    direita:false,
    esquerda:false
}

const jogador = new Jogador(ctx, teclado)

window.addEventListener('keydown',(evento)=>{
    if(evento.key === "a"){
        teclado.esquerda = true
    }else if(evento.key === "d"){
        teclado.direita = true
    }
    if(evento.key === "w"){
        teclado.sima = true
    }else if(evento.key === "s"){
        teclado.baixo = true
    }
})

window.addEventListener('keyup',(evento)=>{
    if(evento.key === "a"){
        teclado.esquerda = false
    }else if(evento.key === "d"){
        teclado.direita = false
    }
    if(evento.key === "w"){
        teclado.sima = false
    }else if(evento.key === "s"){
        teclado.baixo = false
    }
})


const game = ()=>{
    ctx.clearRect(0, 0, 800, 800)
    jogador.desenhar()
    requestAnimationFrame(game)
}
requestAnimationFrame(game)



    
    

