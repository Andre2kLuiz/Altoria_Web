class Jogador{
    constructor(ctx,teclado){
        this.ctx = ctx
        this.teclado = teclado
        this.x = 0
        this.y = 0
        this.vel = 5
        this.frame = 0
        this.largura = 40
        this.altura = 33
        this.characters = new Image()
        this.characters.src = "/Img/characters.png"
        this.desenhar()
        }
    

    gerenciar(){
        if(this.teclado.esquerda){
            if(this.x > 0){
                this.x-=this.vel
            }
        }

        if(this.teclado.direita){
                this.x+=this.vel
                
        }

        if(this.teclado.sima){
            if(this.y > 0){
                this.y-=this.vel
            }
        }

        if(this.teclado.baixo){
            this.y+=this.vel

        }
    }

    desenhar(){
        this.gerenciar()
        this.ctx.drawImage(this.characters, this.frame * this.largura, 0, this.largura, this.altura, this.x, this.y, 120, 120)
        this.frame++
        if(this.frame == 1){
            this.frame = 0
        }
    }
}

        
        
    


