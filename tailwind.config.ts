import type {Config} from "tailwindcss";
const config:Config={content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],darkMode:"class",
theme:{extend:{fontFamily:{sans:["Plus Jakarta Sans","system-ui","-apple-system","Segoe UI","sans-serif"]},
keyframes:{marquee:{from:{transform:"translateX(0)"},to:{transform:"translateX(-50%)"}}},animation:{marquee:"marquee 32s linear infinite"}}},plugins:[]};
export default config;
