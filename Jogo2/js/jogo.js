
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const canvasWidth = 1024;
const canvasHeight = 800;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.fillRect(0, 0, canvasWidth, canvasHeight);

let prevTime = 0;

loop()

function loop (){
    window.requestAnimationFrame(loop)
    controleBotao()
    player.desenha()
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    
    
  
}

