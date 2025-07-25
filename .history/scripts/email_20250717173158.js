
import { UsersEmailBanners } from './global.js';
import { emailBanner } from './classes.js';
// Importing the EmojiButton library
import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/+esm';


window.addEventListener("DOMContentLoaded", createEmailBanner);




function createEmailBanner() {
    const blank = document.querySelector("#preview");
    blank.innerHTML = "";
    const div = document.createElement("div");
    div.id = "generatedEmailBanner"; // So we can update it later
    div.style.width = "600px";
    div.style.height = "400px";
    div.style.border = "1px solid black";
    div.style.background = "white";
