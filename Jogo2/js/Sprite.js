const gravidade = 0.6

class Sprite {
    constructor({posicao, velocidade, dimencao}){
        this.posicao = posicao
        this.velocidade = velocidade
        this.largura = dimencao.largura
        this.tamanho = dimencao.tamanho
    }
    desenha(){
        const img = new Image()
        img.src = "Asserts/Cavaleiro.png"
        
            ctx.drawImage( //desenho do cavaleiro
                img, //imagem
                this.posicao.x, //recorte x
                this.posicao.y, //recorte Y
                this.largura,  //onde desenhar a imagem x
                this.tamanho, //onde desenhar a imagem y
                this.velocidade.x, //cordenada da img no canvas x
                this.velocidade.y, //cordenada da img no canvas y
                this.largura + 55, //largura
                this.tamanho + 70  //altutura
            )
    }

    gravidade(){
        this.desenha()
    }
}


class Cavaleiro extends Sprite {
    constructor({posicao, velocidade, dimencao}){
    super({posicao, velocidade, dimencao})
        posicao = posicao
        velocidade = velocidade
        dimencao = dimencao
        

        this.noChao
        this.ultimoBotaoApertado;
    }

    pulo(){
        if(!this.noChao)return
        this.velocidade.y -= 16
    }

    gravidade(){
        if(Math.ceil(this.posicao.y + this.tamanho >= canvas.height)){
            this.noChao = true
        }else{
            this.noChao = false
        }

        if(this.posicao.y + this.tamanho > canvas.height){
           this.posicao.y = canvas.height - this.tamanho
           this.velocidade.y = 0
        }else{
            if(!this.noChao) this.velocidade.y += gravidade
        }
        
        this.posicao.x += this.velocidade.x
        this.posicao.y += this.velocidade.y

        this.desenha()
    }
}

const cavaleiro = new Cavaleiro({
    posicao: {
        sx: 0,
        sy: 0
    },

    velocidade: {
        x: 0,
        y: 620
    },

    dimencao: {
        largura: 50,
        tamanho: 100
    },

})  



