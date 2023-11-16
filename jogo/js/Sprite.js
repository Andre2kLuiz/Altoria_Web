class Sprite {
    constructor(img){
    //Atributos
    this.mvRight = false,
    this.mvLeft = false,
    this.mvUp = false,
    this.mvDown = false
    this.srcX = 0,
    this.srcY = 0,
    this.width = 102,
    this.height = 111,
    this.posX = 0,
    this.posY = 0,
    this.img = img
    this.speed = 3
    this.fps = 0
    //Métodos

    //desenha
    this.draw = function(ctx){
        ctx.drawImage(
            this.img,
            this.srcX, this.srcY,
            this.width, this.height,
            this.posX, this.posY,
            this.width, this.height,
        )
        this.animation()
    }

   this.blockRectangle = function(objA, objB){
        let distX = (objA.x + objA.width/2) - (objB.x + objB/2);
        let distY = (objA.y + objA.height/2) - (objB.y + objB.height/2);

        let sumWidth = (objA.width + objB.width)/2
        let sumHeight = (objA.height + objB.height)/2

        if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){

            let overlapX = sumWidth - Math.abs(distX)
            let overlapY = sumHeight - Math.abs(distY)

            if(overlapX > overlapY){
                objA.y = distY > 0 ? objA.y + overlapY : objA.y - overlapY; 
            }else{
                objA.x = distX > 0 ? objA.x + overlapX : objA.x - overlapX; 
            }
        }
    };

    //move
    this.move = function(){
        if(this.mvRight){
            this.posX -= this.speed
            this.srcY = this.height * 5
        }else if(this.mvLeft){
            this.posX += this.speed
            this.srcY = this.height * 7
        } else if(this.mvUp){
            this.posY -= this.speed
            this.srcY = this.height * 6
        } else if(this.mvDown){
            this.posY += this.speed
            this.srcY = this.height * 4
        }
        
    }
    //animação
    this.animation = function(){
        if(this.mvLeft || this.mvDown || this.mvRight || this.mvUp){
            this.fps++
            if(this.fps >= 50){
                this.fps = 0
            }
            this.srcX = Math.floor(this.fps / 5) * this.width
        }
    }
}

//animação
   
}