
const sprites = new Image()
sprites.src = "asserts/Cavaleiro.png"

const BG = new Image()
BG.src = "asserts/fase1.png"

const inicio = new Image()
inicio.src = "asserts/KOTR.jpg"

const sondIntro = new Audio()
sondIntro.src = 'sonds/intro.mp3'

const stage1 = new Audio()
stage1.src = 'sonds/stage1.mp3'

let frames = 0

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = 1024;
const canvasHeight = 800;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.fillRect(0, 0, canvasWidth, canvasHeight);

const telaInicial = {
    spritex: 0,
    spritey: 0,
    largura: 1024,
    altura: 800,
    x: 0,
    y: 0,
    desenha(){
        ctx.drawImage(
            inicio,
            telaInicial.spritex, telaInicial.spritey,
            telaInicial.largura, telaInicial.altura,
            telaInicial.x, telaInicial.y,
            telaInicial.largura, telaInicial.altura
        )
    }
}

const planoDeFundo = {
    spritex: 0,
    spritey: 10,
    largura: 1024,
    altura: 800,
    x: 0,
    y: 0,

    desenha(){
        ctx.drawImage(
            BG,
            planoDeFundo.spritex, planoDeFundo.spritey,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura +3075, planoDeFundo.altura +2200
        )
    }
}

const cavaleiro = {
    spritex: 0,
    spritey: 0,
    largura: 50,
    altura: 100,
    x: 200,
    y: 220,
    pulo: 0,
    gravidade:0.9,
    velocidad: 0,
    noChao: true,
    ultimoBotaoApertado: true,
    parado: true,
    atualiza(){  
        if(Math.ceil(cavaleiro.y + cavaleiro.altura >= 450)){
            cavaleiro.noChao = true
        }else{
            cavaleiro.noChao = false
        }

        if(cavaleiro.y + cavaleiro.altura > 450){
            cavaleiro.y = 450 - cavaleiro.altura
            cavaleiro.velocidad = 0
            
         }else{
             if(!this.noChao) cavaleiro.velocidad += cavaleiro.gravidade
             cavaleiro.y = cavaleiro.y + cavaleiro.velocidad
         }

         //cavaleiro.desenha()
    //cavaleiro.velocidad = cavaleiro.velocidad + cavaleiro.gravidade
        
    },

    frameAtual: 0,

    movimento: [
        {spritex: 0, spritey: 0, },
        {spritex: 52, spritey: 160, },
        {spritex: 98, spritey: 160, },
    ],

    correr: [
        {spritex: 0, spritey: 262, },
        {spritex: 47, spritey: 263, },
        {spritex: 99, spritey: 265, },
        {spritex: 159, spritey: 261, },
    ],

    atualizaFrameAtual(){
        const intervaloDeFrames = 13
        const passouIntervalo = frames % intervaloDeFrames === 0

        if(passouIntervalo){
            const baseDoIncremento = 1
            const incremento = baseDoIncremento + cavaleiro.frameAtual
            const baseRepeticao = cavaleiro.movimento.length
            cavaleiro.frameAtual = incremento % baseRepeticao
        }
        
    },

    desenha(){
        
        if(cavaleiro.parado){
            cavaleiro.atualizaFrameAtual()
            const {spritex, spritey} = cavaleiro.movimento[cavaleiro.frameAtual]
            ctx.drawImage(
                sprites,
                spritex, spritey, 
                cavaleiro.largura, cavaleiro.altura, 
                cavaleiro.x , cavaleiro.y, 
                150, 250
            )
        }
        if(!cavaleiro.parado){
            cavaleiro.atualizaFrameAtual()
            const {spritex, spritey} = cavaleiro.correr[cavaleiro.frameAtual]
            ctx.drawImage(
                sprites,
                spritex, spritey , 
                cavaleiro.largura , cavaleiro.altura -32, 
                cavaleiro.x , cavaleiro.y, 
                130, 220
            )
        }
        
    },
    pular(){
        if(!cavaleiro.noChao)return
        cavaleiro.velocidad = -20
    }
}


let telaAtiva = {}
function mudaParaTela(novaTela){
    telaAtiva = novaTela
}

const telas = {
    INICIO: {
        desenha(){
            sondIntro.play()
            telaInicial.desenha()
             
        },
        click(){
            mudaParaTela(telas.JOGO)
            sondIntro.pause()
            
        },
        atualiza(){

        }
    }
}

telas.JOGO = {
    desenha(){
        stage1.play()
        planoDeFundo.desenha()
        cavaleiro.desenha()
        
    },
    atualiza(){
        cavaleiro.atualiza()
        
    }
}

window.addEventListener("click", () =>{
    if(telaAtiva.click()){
        telaAtiva.click()
    }
})



const keys = {
    a: {
        apertado: false
    },

    d: {
        apertado: false
    },

    w:{
        apertado: false,
        segurando: false
    },

    space:{
        apertado: false,
        segurando: false
    }
}

window.addEventListener("keydown", e =>{
    let key = e.key

    switch(key){
        case "a":
            keys.a.apertado = true
            cavaleiro.ultimoBotaoApertado = key
            cavaleiro.parado = false
        break;
        case "d":
            keys.d.apertado = true
            cavaleiro.ultimoBotaoApertado = key
            cavaleiro.parado = false
        break;
        case "w":
            keys.w.apertado = true
            
        break;
    }
})

window.addEventListener("keyup", e =>{
    let key = e.key

    switch(key){
        case "a":
            keys.a.apertado = false
            cavaleiro.parado = true
            
        break;
        case "d":
            keys.d.apertado = false
            cavaleiro.parado = true
        break;
        case "w":
            keys.w.apertado = false
            keys.w.segurando = false
        break;
    }
})

function controleBotao(){
    movimento()
    function movimento(){
       //cavaleiro.x = 0

        if(keys.a.apertado && ["a"].includes(cavaleiro.ultimoBotaoApertado) && cavaleiro.x > 0) {
            cavaleiro.x -= 1.5 * 3.4
        }

        if(keys.d.apertado && ["d"].includes(cavaleiro.ultimoBotaoApertado) && cavaleiro.x < 920) {
            cavaleiro.x += 1.5 * 3.4
        }

        if(keys.w.apertado && !keys.w.segurando) {
            cavaleiro.pular()
            keys.w.segurando = true
        }
    }
}


function loop(){
    telaAtiva.atualiza()
    telaAtiva.desenha()
    controleBotao()
    
    frames++
    window.requestAnimationFrame(loop)
}

mudaParaTela(telas.INICIO)
loop()



