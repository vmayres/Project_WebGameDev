import kaboom from 'kaboom';

kaboom({
    canvas: document.querySelector("#game"), // Use o canvas com ID "game"
    width: 1280,
    height: 720,
    letterbox: true
});

const scenes = {
    menu: () => {

    },
    controls: () => {

    },
    1: () => {

    },
    2: () => {

    },
    3: () => {

    },
    gameover: () => {

    },
    victory: () => {

    }
};

for (const key in scenes) {
    scene(key, scenes[key]);
}

go("menu");