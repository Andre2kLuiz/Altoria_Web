let canvas = document.getElementById("canvas");

let ctx = canvas.getContext('2d');

canvas.style.backgroundColor='grey';

ctx.fillStyle = "brown";
ctx.strokeStyle="green"
ctx.fillRect(120, 170, 250, 250)
ctx.strokeRect(120, 170, 250, 250)
ctx.fillStyle='green'
ctx.fillRect(150, 200, 68, 68)
ctx.fillStyle = "violet"
ctx.strokeStyle='green'
ctx.fillRect(225, 340, 50, 80)
ctx.strokeRect(225, 340, 50, 80)

ctx.fillStyle='rgba(255, 0, 44, 0.5)'
ctx.strokeStyle='green'
ctx.beginPath();
ctx.moveTo(245, 20)
ctx.lineTo(120, 170)
ctx.lineTo(370, 170)
ctx.closePath()
ctx.stroke()
ctx.fill()