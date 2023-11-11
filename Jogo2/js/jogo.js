
const Sprite = new Image()
const ArenaSprite = new Image()
ArenaSprite.src = "Asserts/Arena.png"
Sprite.src = "Asserts/bomberman.png"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const arena = {
    spriteX: 0,
    spriteY: 58,
    largura: 300,
    altura: 150,
    x: 0,
    y: 0,
    desenha(){
        ctx.drawImage(
            ArenaSprite,
            arena.spriteX, arena.spriteY -58,
            arena.largura, arena.altura +58,
            arena.x, arena.y ,
            arena.largura + 32, arena.altura 
        );
    }
}

const bomberman = {
    spriteX: 0,
    spriteY: 65,
    largura: 30,
    altura: 28,
    x: 100,
    y: 100,
    desenha(){
        ctx.drawImage(
            Sprite,
            bomberman.spriteX, bomberman.spriteY,
            bomberman.largura, bomberman.altura,
            bomberman.x, bomberman.y,
            bomberman.largura , bomberman.altura - 13
        );
    }
}

function loop (){
    arena.desenha()
    bomberman.desenha()
    requestAnimationFrame(loop)
}

loop()