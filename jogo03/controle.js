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

window.addEventListener("keydown", e =>{
    let key = e.key

    switch(key){
        case "a":
            keys.a.apertado = true
            cavaleiro.ultimoBotaoApertado = key
            cavaleiro.parado = false
        break;
        case "d":
            keys.d.apertado = true
            cavaleiro.ultimoBotaoApertado = key
            cavaleiro.parado = false
        break;
        case "w":
            keys.w.apertado = true
        break;
        case " ":
            keys.space.apertado = true
        break;
    }
})

window.addEventListener("keyup", e =>{
    let key = e.key

    switch(key){
        case "a":
            keys.a.apertado = false
            cavaleiro.parado = true
            
        break;
        case "d":
            keys.d.apertado = false
            cavaleiro.parado = true
        break;
        case "w":
            keys.w.apertado = false
            keys.w.segurando = false
        break;
        case " ":
            keys.space.apertado = false
            keys.space.segurando = false
        break;

    }
})

function controleBotao(){
    movimento()
    attack()
    function movimento(){
       //cavaleiro.x = 0

        if(keys.a.apertado && ["a"].includes(cavaleiro.ultimoBotaoApertado) && cavaleiro.x > 0) {
            cavaleiro.x -= 1.5 * 3.4
            cavaleiro.spritex = cavaleiro.height * 5
        }

        if(keys.d.apertado && ["d"].includes(cavaleiro.ultimoBotaoApertado) && cavaleiro.x < 920) {
            cavaleiro.x += 1.5 * 3.4
        }

        if(keys.w.apertado && !keys.w.segurando) {
            cavaleiro.pular()
            keys.w.segurando = true
        }
    }

    function attack(){
        if (keys.space.apertado && !keys.space.segurando){
            cavaleiro.attack()
            keys.space.segurando = true
        }
    }
}