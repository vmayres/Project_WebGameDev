import kaboom from "../lib/kaboom.mjs"

kaboom({
    width: 640,
    height: 480,
    letterbox: true,
})

// Define cenas
const scenes = {
    menu: () => {
        add([
            text("Menu Principal", { size: 32 }),
            pos(120, 200)
        ])
    },
    options: () => {
        add([
            text("Opções", { size: 32 }),
            pos(160, 200)
        ])
    },
}

// Registra cenas
for (const key in scenes) {
    scene(key, scenes[key])
}

// Começa com a cena de menu
go("menu")
