
const keys = {
    a: {
        apertado: false
    },

    d: {
        apertado: false
    },

    w:{
        apertado: false,
        segurando: false
    },

    space:{
        apertado: false,
        segurando: false
    }


}


window.addEventListener("keydown", e => {
    let key = e.key

    switch(key) {
        case "ArrowLeft":
        case "a":
            keys.a.apertado = true
            player.ultimoBotaoApertado = key
        break
        case "ArrowRight":
        case "d":
            keys.d.apertado = true
            player.ultimoBotaoApertado = key
        break
        case "ArrowUp":
        case "w":
            keys.w.apertado = true
        break
        case " ":
            keys.space.apertado = true
        break
    }
})

window.addEventListener("keyup", e => {
    let key = e.key

    switch(key) {
        case "ArrowLeft":
        case "a":
            keys.a.apertado = false
        break
        case "ArrowRight":
        case "d":
            keys.d.apertado = false
        break
        case "ArrowUp":
        case "w":
            keys.w.apertado = false
            keys.w.segurando = false
        break
        case " ":
            keys.space.apertado = false
            keys.space.segurando = false
        break
    }
})

function controleBotao(){
    movimento()
    attack()
        function movimento(){
            player.velocidade.x = 0

            if(keys.a.apertado && ["a", "ArrowLeft"].includes(player.ultimoBotaoApertado) && player.position.x > 0) {
                player.velocidade.x -= 1.5 * 3.4
            }

            if(keys.d.apertado && ["d", "ArrowRight"].includes(player.ultimoBotaoApertado) && player.position.x < 2000) {
                player.velocidade.x += 1.5 * 3.4
            }

            if(keys.w.apertado && !keys.w.segurando) {
                player.pulo()
                keys.w.segurando = true
            }
        }

        function attack(){
            if (keys.space.apertado && !keys.space.segurando){
                player.attack()
                keys.space.segurando = true
            }
        }
}