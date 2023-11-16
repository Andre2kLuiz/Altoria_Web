const gravidade = 0.6

const sprites = new Image()
sprites.src = ["Asserts/bomberman.png", "Asserts/Arena.png"]

class Sprite {
    constructor({corteImg, tamanhoDoCorte, cordenadaImgCanvas }){
        
        this.corteImg = corteImg
        this.tamanhoDoCorte = tamanhoDoCorte
        this.cordenadaImgCanvas = cordenadaImgCanvas  
    }

    desenha(){
        const img = new Image()
        img.src = "Asserts/bomberman.png"

        ctx.drawImage(
            img,
            this.corteImg.sx, this.corteImg.sy,
            this.tamanhoDoCorte.swidth, this.tamanhoDoCorte.sheight,
            this.cordenadaImgCanvas.x, this.cordenadaImgCanvas.y,
            this.tamanhoDoCorte.swidth, this.tamanhoDoCorte.sheight

        )
    }

} 

class Player extends Sprite {
    constructor ({
        corteImg,
        tamanhoDoCorte,
        cordenadaImgCanvas,
    }){
    super({
        corteImg,
        tamanhoDoCorte,
        cordenadaImgCanvas
    })
    }

}

const player = new Sprite({
    corteImg: {
        sx: 100,
        sy: 100,
    },
    tamanhoDoCorte: {
        swidth: 100,
        sheight: 100,
    },
    cordenadaImgCanvas: {
        x: 10,
        y: 10,
    },

})