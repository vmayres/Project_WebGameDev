import { loadFont, loadSprite } from "kaboom";

export const load = {
    fonts: () => {
        loadFont("Minecraft", "../assets/fonts/Minecraft.ttf");
    },
    assets: () => {
        loadSprite(); // Adicione os sprites necessários aqui
    },
};

