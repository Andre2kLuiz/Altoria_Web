let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
/*context.fillStyle = "red";
context.fillRect(50, 40, 200, 200);
context.fillStyle = "yellow";
context.fillRect(55, 45, 190, 190)
context.fillStyle = "blue";
context.fillRect(125, 115, 50, 50)

canvas.style.backgroundColor="";
*/
canvas.style.width="350px";
canvas.style.height="350px";


context.beginPath();
context.strokeStyle = "rgba(200, 0, 0, 0.8)";
context.fillStyle = "rgb(0, 200, 0)";
context.moveTo(100, 100);
context.lineTo(80, 250);
context.lineTo(125, 250);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(95, 250);
context.lineTo(95, 270);
context.lineTo(120, 250);
context.closePath();
context.stroke();


