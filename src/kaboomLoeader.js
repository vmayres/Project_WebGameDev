import kaboom from "../lib/kaboom.js";

export const scale = 2;
export const k = kaboom({
    width: 320 * scale,
    height: 240 * scale,
    scale,
    leterbox: true,
    global: false,
});