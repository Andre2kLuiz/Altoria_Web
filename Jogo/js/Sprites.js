const gravidade = 0.6;

const backgroundSpritePath = "Assets/BGimg.gif"

class Sprite {
    constructor({position, dimencao, velocidade, source}){
        this.position = position;
        this.velocidade = velocidade;
        this.width = dimencao?.width;
        this.height = dimencao?.height;

        if(source) {
            this.image = new Image()
            this.image.src = source

            this.width = this.image.width + 800
            this.height = this.image.height
        }
    }

    draw(){
        if(this.image) {
            ctx.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            )
        }else {
            ctx.fillStyle = "white"
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        }

        if(this.isAttack && !keys.a.apertado) {
            ctx.fillStyle = "red"
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
        

        if(this.isAttack && keys.d.apertado === true) {
            ctx.fillStyle = "red"
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }

        if(this.isAttack && keys.a.apertado === true){
            ctx.fillStyle = "green"
            ctx.fillRect(this.attackBox.position.x - 75, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }

    update(){
        this.draw()
    }
    
}

class Lutador extends Sprite {
    constructor({
        position,
        velocidade,
        dimencao
    }) {
        super({
            position,
            velocidade,
            dimencao
        })
        
        this.velocidade = velocidade;
        this.width = dimencao.width;
        this.height = dimencao.height;

        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: 125,
            height: 50 
        }

        this.isAttack
        this.attackCooldown = 300
        this.onAttackCoodown

        this.ultimoBotaoApertado;
        this.noChao

    }

    update(){
        if(Math.ceil(this.position.y + this.height >= canvas.height)){
            this.noChao = true
        }else{
            this.noChao = false
        }

        if(this.position.y + this.height > canvas.height){
           this.position.y = canvas.height - this.height
           this.velocidade.y = 0
        }else{
            if(!this.noChao) this.velocidade.y += gravidade
        }
        
        this.position.x += this.velocidade.x
        this.position.y += this.velocidade.y

        this.attackBox.position.x = this.position.x
        this.attackBox.position.y = this.position.y

        this.draw()
    }

    attack(){
        if(this.onAttackCoodown) return
        this.isAttack = true
        this.onAttackCoodown = true

        setTimeout(()=> {
            this.isAttack = false
        }, 100)

        setTimeout(() => {
            this.onAttackCoodown = false
        }, this.attackCooldown)
    }

    pulo(){
        if(!this.noChao)return
        this.velocidade.y -= 16
    }
}



const player = new Lutador({
    position: {
        x:100,
        y:0
    },
    dimencao:{
        width:50,
        height: 150
    },
    velocidade:{
        x:0,
        y:10
    }

})

/*const player2 = new Lutador({
    position: {
        x:500,
        y:0
    },
    dimencao:{
        width:50,
        height: 200
    },
    velocidade:{
        x:0,
        y:20
    }

})
*/

const Background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    source: backgroundSpritePath
})