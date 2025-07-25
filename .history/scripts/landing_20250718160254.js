import { UsersLandingPages } from './global.js';
import { LandingPage } from './classes.js';
// Importing the EmojiButton library
import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/+esm';



window.addEventListener("DOMContentLoaded", createLandingPage);










function createLandingPage() {
    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedLandingPage"; // So we can update it later
    div.style.width = "100%";
    div.style.minHeight = "auto";
    div.style.backgroundColor = "grey";


    blank.appendChild(div);
}