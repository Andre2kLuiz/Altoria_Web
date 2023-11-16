

window.onload = function(){
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")
    const spriteSheet = new Image()
    spriteSheet.src = "imagem/linksheet.png"
    let cavaleiro = new Sprite(spriteSheet)
    let scene = new Image()
    scene.src = "imagem/scene.jpg"
    var mvLeft = mvUp = mvRight = mvDown = false;

    let tileSize = 64;

    let tilesSrcSize = 64;

    let linkImg = new Image()
    linkImg.src = "imagem/linksheet.png"

    let img = new Image();
    img.src = "imagem/block.png"
    img.addEventListener("load", function(){
        window.requestAnimationFrame(loop, ctx)
    }, false);


    let walls = [];

    var player = {
		x: tileSize + 2,
		y: tileSize + 2,
		width: 55,
		height: 55,
		speed: 2
	};

    let labirinto = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
        [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];
    
    // Função para imprimir o labirinto
    function imprimirLabirinto() {
        for (let i = 0; i < labirinto.length; i++) {
            let linha = "";
            for (let j = 0; j < labirinto[i].length; j++) {
                if (labirinto[i][j] === 1) {
                    linha += "#";
                } else if (i === 0 && j === 0) {
                    linha += "S";
                } else if (i === labirinto.length - 1 && j === labirinto[i].length - 1) {
                    linha += "E";
                } else {
                    linha += " ";
                }
            }
            console.log(linha);
        }
    }
    
    // Chamar a função para imprimir o labirinto
    imprimirLabirinto();
    
    
    
    const T_WIDTH = labirinto[0].length * tileSize;
    const T_HEIGHT = labirinto.length * tileSize;

    for(let row in labirinto){
        for(let column in labirinto[row]){
            let tile = labirinto[row][column]
            if(tile === 1){
               const wall = {
                x: tileSize * column,
                y: tileSize * row,
                width: tileSize,
                height: tileSize
               };
               walls.push(wall);
            }
        }
    }

    const cam = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
        innerLeftBoundary: function(){
            return this.x + (this.width*0.25);
        },
        innerTopBoundary: function(){
            return this.y + (this.height*0.25);
        },
        innerRigthBondary: function(){
            return this.x + (this.width*0.75);
        },
        innerBottomBondary: function(){
            return this.y + (this.height*0.75);
           
        },
         
    }

    function blockRectangle(objA, objB){
		var distX = (objA.x + objA.width/2) - (objB.x + objB.width/2);
		var distY = (objA.y + objA.height/2) - (objB.y + objB.height/2);
		
		var sumWidth = (objA.width + objB.width)/2;
		var sumHeight = (objA.height + objB.height)/2;
		
		if(Math.abs(distX) < sumWidth && Math.abs(distY) < sumHeight){
			var overlapX = sumWidth - Math.abs(distX);
			var overlapY = sumHeight - Math.abs(distY);
			
			if(overlapX > overlapY){
				objA.y = distY > 0 ? objA.y + overlapY : objA.y - overlapY;
			} else {
				objA.x = distX > 0 ? objA.x + overlapX : objA.x - overlapX;
			}
		}
	}

window.addEventListener("keydown", e =>{
    let key = e.key
    switch(key){
        case "a":
            mvRight = true
            mvLeft = false
            mvUp = false
            mvDown = false
        break;
        case "d":
            mvRight = false
            mvLeft = true
            mvUp = false
            mvDown = false
        break;
        case "w":
            mvRight = false
            mvLeft = false
            mvUp = true
            mvDown = false
        break;
        case "s":
            mvRight = false
            mvLeft = false
            mvUp = false
            mvDown = true
        break;
    }
})

window.addEventListener("keyup", e => {
    let key = e.key
    switch(key){
        case "a":
            mvRight = false
        break;
        case "d":
            mvLeft = false
        break;
        case "w":
            mvUp = false
        break;
        case "s":
            mvDown = false
        break;
    }
})
    

    spriteSheet.onload = function(){
        init()
    }

    function init(){
        cavaleiro.posX = cavaleiro.posY = 80
        loop()
    }

    function update(){
        //cavaleiro.move()
        if(mvLeft && !mvRight){
			player.x += player.speed;
            player.srcY = tilesSrcSize + player.height * 2
		} else 
		if(mvRight && !mvLeft){
			player.x -= player.speed;
            player.srcX = tilesSrcSize + player.height * 0
		}
		if(mvUp && !mvDown){
			player.y -= player.speed;
            player.srcY = tilesSrcSize + player.height * 3
		} else 
		if(mvDown && !mvUp){
			player.y += player.speed;
            player.srcX = tilesSrcSize + player.height * 4
		}
		
		for(var i in walls){
			var wall = walls[i];
			blockRectangle(player, wall);
		}
        if(player.x < cam.innerLeftBoundary()){
            cam.x = player.x - (cam.width * 0.25);
        }
        if(player.y < cam.innerTopBoundary()){
            cam.y = player.y - (cam.width * 0.25);
        }
        if(player.x + player.width > cam.innerRigthBondary()){
            cam.x = player.x + cavaleiro.width - (cam.width * 0.75);
        }
        if(player.y + player.height > cam.innerBottomBondary()){
            cam.y = player.y + player.height - (cam.height * 0.75);
        }

        cam.x = Math.max(0, Math.min(T_WIDTH - cam.width, cam.x));
        cam.y = Math.max(0, Math.min(T_HEIGHT - cam.height, cam.y));
    }

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.save();
        ctx.translate(-cam.x, -cam.y);
        for(let row in labirinto){
            for(let column in labirinto[row]){
                let tile = labirinto[row][column];
                if(tile === 1){
					var x = column*tileSize;
					var y = row*tileSize;
                    ctx.fillStyle = "red"
					ctx.fillRect(x,y,tileSize,tileSize);
				}
                
            }
        }
        /*ctx.drawImage(scene,0, 0, scene.width, scene.height, 0, 0, canvas.width, canvas.height)*/
        //cavaleiro.draw(ctx)
       
		ctx.fillStyle = "#00f";
		ctx.fillRect(player.x,player.y,player.width,player.height);
		ctx.restore();
        ctx.restore();
    }

    function loop(){
        update()
        draw()
        window.requestAnimationFrame(loop, ctx)
    }
    
}