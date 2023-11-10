const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 2048;
const canvasHeight = 800;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.fillRect(0, 0, canvasWidth, canvasHeight);

let prevTime = 0;

animate();

function animate(){
    window.requestAnimationFrame(animate)

    controleBotao()

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    Background.update()
    player.update()
    //player.draw()

    let delta = (performance.now() - prevTime) / 1000;
    let fps = 1/ delta;

    prevTime = performance.now()
    //console.log(`FPS: ${fps}`)
}